//~~~~~~~~~~~~~~~~ Skills ~~~~~~~~~~~~~~~~//

// Creating array of skills to show
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "GitHub",
  "RWD",
  "REST API",
  "Fetch API",
  "DOM Manipulation",
  "Event Handling",
  "Flexbox",
  "Grid Layout",
  "SQL",
];

// Declaring and selecting the section where id=Skills from DOM
const skillsSection = document.querySelector("#Skills");

// Declaring and selecting the ul element under Skills section
const skillsList = skillsSection.querySelector("ul");

// For loop for Skills array that adding each skill to the list
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li"); // Creating a new <li> for each skill
  skill.textContent = skills[i]; // Text content for each skill

  skillsList.appendChild(skill); // Appending <li> to <ul>
}

//~~~~~~~~~~~~~~~~ Leave a Message form ~~~~~~~~~~~~~~~~//

// selecting form by attribute
const messageForm = document.forms["leave_message"];

document.getElementById("messages").style.display = "none";

// addEventListener --> for message form for Submit action
messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); // preventing the default refreshing behavior of the "submit" event

  // adding new var for each input text field
  let usersName = event.target.usersName.value;
  let usersEmail = event.target.usersEmail.value;
  let usersMessage = event.target.usersMessage.value;

  console.log("Name:", usersName);
  console.log("Email:", usersEmail);
  console.log("Message:", usersMessage);

  let messageSection = document.getElementById("messages"); // received msgs will show in here ==>
  let messageList = messageSection.querySelector("ul"); // area for received msgs list ==>
  messageSection.style.display = "block";

  let newMessage = document.createElement("li"); // every received new msg shows up as  a new list item

  // creating clickeable link: user's_email+mailto ==> then browser opens email app to send a msg.
  let messageLink = document.createElement("a");
  messageLink.href = `mailto:${usersEmail}`;
  messageLink.textContent = usersName;

  // creating a mesg body for the actual msg text to be sent
  let messageText = document.createElement("span");
  messageText.textContent = ` wrote: ${usersMessage}`;

  // adding name link to the msg then adding msg body agter the name
  newMessage.appendChild(messageLink);
  newMessage.appendChild(messageText);

  // Button "Remove"
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";

  // addEventListener for --> click button action
  removeButton.addEventListener("click", function () {
    let entry = removeButton.parentElement.parentElement;
    entry.remove();

    // creating received messages section
    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");

    // hiding msgs section if msg list is empty
    if (messageList.children.length === 0) {
      messageSection.style.display = "none";
    }
  });

  // Button "Edit" - OPTIONAL
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.type = "button";

  // addEventListener for --> click button action
  editButton.addEventListener("click", function () {
    let editMessage = prompt("Edit your message:", usersMessage);
    if (editMessage !== null && editMessage.trim() !== "") {
      messageText.textContent = ` wrote: ${editMessage}`;
    }
  });

  // creating div for buttons
  let controlButtons = document.createElement("div");
  controlButtons.classList.add("message-buttons");

  controlButtons.appendChild(removeButton);
  controlButtons.appendChild(editButton);

  newMessage.appendChild(messageLink);
  newMessage.appendChild(messageText);
  newMessage.appendChild(controlButtons);

  // moving the buttons under the message for cleaner look. The above commented version places it at the end of the msg
  messageList.appendChild(newMessage);

  messageForm.reset();
});

//~~~~~~~~~~~~~~~~ Footer ~~~~~~~~~~~~~~~~//

// Getting the current year
const today = new Date();
const thisYear = today.getFullYear();

// Creating a new element footer
const footer = document.createElement("footer");

// Creating p element and coryright info
const copyright = document.createElement("p");

// STRETCH: Using unicode Symbol
copyright.innerHTML = `\u00A9 Irina Lo ${thisYear}`;

// Adding copyright content to the footer
footer.appendChild(copyright);

// Adding the footer to the body
document.body.appendChild(footer);

// Console output check
console.log(`Footer is added to the bottom of the page.`, footer);

// Week-13 changes
//~~~~~~~~~~~~~~~~ Projects ~~~~~~~~~~~~~~~~//

fetch("https://api.github.com/users/locirin/repos") //making request to git
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json(); // converting to json
  })
  .then((repos) => {
    console.log("My GitHub Repositories:", repos); // checking the content of repos

    let projectSection = document.getElementById("Projects"); // Projects are selected by id
    let projectList = projectSection.querySelector("ul"); // Projects list <ul> is selected

    projectList.innerHTML = ""; // emptying <li>

    // show the most recent 3 repos
    let recentRepos = repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 3);

    // assigning repos meaningful names
    const repoNames = {
      "weather-api-project": "Weather API App (Open-Meteo)",
      "irina-lo-kepler": "Portfolio Site: Irina Lo",
      "irinalo-debugging": "Debugging Game Project",
      "my-ctd-app": "CTD Starter App",
    };

    // show existing repos first
    for (let i = 0; i < recentRepos.length; i++) {
      let currentRepo = recentRepos[i];

      let displayName = repoNames[currentRepo.name] || currentRepo.name;

      let project = document.createElement("li"); // adding a new element <li>

      let link = document.createElement("a"); // creating a new anchor to make it a clickagle link

      link.href = currentRepo.html_url; // setting link destination = repo's url

      link.innerHTML = `${displayName} <i class="fa-brands fa-github" style="margin-left: 0.5rem;"></i>`;

      link.target = "_blank"; // keeping portfolio page and open the link in new tab

      project.appendChild(link); // placing project links inside <li>
      projectList.appendChild(project); // adding all <li>s to <ul>
    }
  })
  .catch((error) => {
    console.error("An error occurred", error.message);
  });

//~~~~~~~~~~~~~~~~ Dark Mode Toggle ~~~~~~~~~~~~~~~~//

// Selecting toggle button
const toggleButton = document.getElementById("dark-mode-toggle");

// Adding EventListener for click to toggle
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const theme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
});

// When page reloads => checking user saved selection
window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
