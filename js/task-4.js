'use strict';

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    
    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    }
    console.log({ email, password });
    loginForm.reset();
}