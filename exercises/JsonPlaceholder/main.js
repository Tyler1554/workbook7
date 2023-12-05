let toDoIdInput = document.querySelector("#todo-id-input");
let toDoButton = document.querySelector("#todo-button");
let toDoParagraph = document.querySelector("#todo-paragraph");



//function for todo page
function displayTodDo() {
  let toDoId = toDoIdInput.value;
  fetch(`http://jsonplaceholder.typicode.com/todos/${toDoId}`)
    .then((response) => response.json())
    .then((todo) => {
      toDoParagraph.innerText = todo.title;
    });
}
toDoButton.onclick = displayTodDo;

