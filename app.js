const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

console.dir(addEventListener);
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
