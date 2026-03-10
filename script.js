// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

navLinks.classList.toggle("active");

});


// SMOOTH SCROLL

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});

});

});


// DARK MODE

const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

});


// CONTACT FORM VALIDATION

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if(name.length < 3){

msg.textContent = "Name must be at least 3 characters.";
return;

}

if(!email.includes("@")){

msg.textContent = "Enter a valid email.";
return;

}

if(message.length < 10){

msg.textContent = "Message must be at least 10 characters.";
return;

}

msg.style.color="green";
msg.textContent="Message sent successfully!";
form.reset();

});
