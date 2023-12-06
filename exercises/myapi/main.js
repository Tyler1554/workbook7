
function displayTodDo() {
    let toDoId = toDoIdInput.value;
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((jokes) => {
        toDoParagraph.innerText = jokes.title;
      });
  }
  toDoButton.onclick = displayTodDo;