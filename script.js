const input = document.getElementById("userInput");
const btn = document.getElementById("btn");
const todoList = document.querySelector(".myTodos");

btn.addEventListener("click", function () {
  console.log(input.value);

  let todo = document.createElement("div");
  todo.setAttribute("class", "todos");
  let para = document.createElement("p");
  para.setAttribute("class", "para");
  para.innerText = input.value;
  let button = document.createElement("button");
  button.setAttribute("class", "btn");
  button.innerHTML = "Delete";

  todo.append(para);
  todo.append(button);

  todoList.append(todo);
  input.value = "";

  para.addEventListener("click", function () {
    if ((para.style.textDecoration = "none")) {
      para.style.textDecoration = "line-through";
      para.style.textDecorationColor = "green";
    } else {
      para.style.textDecoration = "none";
    }
  });

  button.addEventListener("click", function () {
    todo.remove();
  });
});
