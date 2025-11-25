const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// Selecciona ambos formularios
const signInForm = document.querySelector('.form-container.sign-in form');
const signUpForm = document.querySelector('.form-container.sign-up form');

// Evento para login
signInForm.addEventListener("submit", function(e) {
  e.preventDefault();
  window.location.href = "../somos.html";

});

// Evento para registro
signUpForm.addEventListener("submit", function(e) {
  e.preventDefault();
  window.location.href = "../somos.html";

});