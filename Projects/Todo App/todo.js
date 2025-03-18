let todoList = [
  { item: "Buy milk", dueDate: "4/10/2025" },
  { item: "Go to collage", dueDate: "7/12/2025" },
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  // console.log(todoItem);
  todoList.push({ item: todoItem, dueDate: dateElement.value });
  inputElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
