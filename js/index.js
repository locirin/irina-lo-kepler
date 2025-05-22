// Week 11

//~~~~~~~~~~~~~~~~ Skills ~~~~~~~~~~~~~~~~//

// Creating array of skills 
const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Responsive Design"];

// Declaring and selecting the section where id=Skills from DOM
const skillsSection = document.querySelector("#Skills");

// Declaring and selecting the ul element under Skills section
const skillsList = skillsSection.querySelector("ul");


// For loop for Skills array that adding every skill to the list
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li"); // Creating a new <li> for each skill
  skill.textContent = skills[i]; //text for the skill
  skillsList.appendChild(skill); // Appending <li> to <ul>
}

//~~~~~~~~~~~~~~~~ Leave a Message form ~~~~~~~~~~~~~~~~//

// selecting form by attribute
const messageForm = document.forms["leave_message"];

// addEventListener --> for message form for Submit action
messageForm.addEventListener("submit", function(event) {
  event.preventDefault(); // preventing the default refreshing behavior of the "submit" event

// adding new var for each input text field 
  let usersName = event.target.usersName.value;
  let usersEmail = event.target.usersEmail.value;
  let usersMessage = event.target.usersMessage.value;

// logging
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
  messageText.textContent = `wrote: ${usersMessage}`;

  // adding name link to the msg then adding msg body agter the name
  newMessage.appendChild(messageLink);
  newMessage.appendChild(messageText);

  // Button "Remove"
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
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
  editButton.innerText = "edit";
  editButton.type = "button";

  // addEventListener for --> click button action
  editButton.addEventListener("click", function () {
    let editMessage = prompt("Edit your message:", usersMessage);
    if (editMessage !== null && editMessage.trim() !== "") {
      messageText.textContent = ` wrote: ${editMessage}`;
    }
  });

  // adding buttons to the msg
  // newMessage.appendChild(removeButton);  
  // newMessage.appendChild(editButton);
   // messageList.appendChild(newMessage);
  // messageForm.reset();

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