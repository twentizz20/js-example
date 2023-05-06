/////
////투두리스트 1
const todoList1Input = document.querySelector("#todo-list-1");

const todoList1Button = document.querySelector(".todo-list-1-button");

const todoList1Div = document.querySelector(".todo-list-1-div");
todoList1Button.addEventListener("click", () => {
  const p = document.createElement("p");
  const button = document.createElement("button");
  todoList1Div.appendChild(p);
  todoList1Div.appendChild(button);

  p.textContent = todoList1Input.value;
  button.textContent = "제거";

  button.addEventListener("click", () => {});
});
