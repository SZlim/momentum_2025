const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDO) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDO;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function hadleToDoSubmit(event) {
  event.preventDefault();
  const newToDO = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDO);
}

toDoForm.addEventListener("submit", hadleToDoSubmit);
