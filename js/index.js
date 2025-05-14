// Week 11

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
console.log("Footer is added to the bottom of the page.", footer);

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