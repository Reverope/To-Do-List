// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".todos");

const deletebtn = document.querySelectorAll(".trash-btn");
const completebtn = document.querySelectorAll(".complete-btn");
// Event Listeners

todoButton.addEventListener("click", addToList);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterView);
// Funtions

function addToList() {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  if (todoInput.value != "" && todoInput.value != " ") {
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completed = document.createElement("button");
    completed.innerHTML = '<i class="fas fa-check"> </i>';
    completed.classList.add("complete-btn");
    todoDiv.appendChild(completed);

    const trash = document.createElement("button");
    trash.innerHTML = "<i class='fas fa-trash'> </i>";
    trash.classList.add("trash-btn");
    todoDiv.appendChild(trash);

    todoInput.value = " ";
    todoList.appendChild(todoDiv);
  } else {
    alert("Enter a valid task");
  }
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] == "trash-btn") {
    const todo = item.parentElement;
    setTimeout(() => {
      todo.remove();
    }, 800);
    todo.classList.add("fall");
  }
  if (item.classList[0] == "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterView(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
