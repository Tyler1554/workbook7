let userDrop = document.querySelector("#user-drop");
let userDisplayTable = document.querySelector("#user-table-body");
let userTable = document.querySelector("#user-table");

//function to display drop down names
function displayUserDrop() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((user) => {
      for (i of user) {
        let option = document.createElement("option");
        option.textContent = i.name;
        userDrop.appendChild(option);
      }
    });
}

//function to populate table on value from drop down
function displayUserTable() {
  userDisplayTable.innerHTML = "";
  fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      for (i of data) {
        if (userDrop.value == i.name) {
          let row = userDisplayTable.insertRow(-1);
          let cell1 = row.insertCell(0);
          cell1.innerText = i.id;
          let cell2 = row.insertCell(1);
          cell2.innerText = i.name;
          let cell3 = row.insertCell(2);
          cell3.innerText = i.username;
          let cell4 = row.insertCell(3);
          cell4.innerText = i.email;
          let cell5 = row.insertCell(4);
          cell5.innerText = i.phone;
          let cell6 = row.insertCell(5);
          cell6.innerText = i.website;
          let cell7 = row.insertCell(6);
          cell7.innerText = i.address.street;
          let cell8 = row.insertCell(7);
          cell8.innerText = i.address.suite;
          let cell9 = row.insertCell(8);
          cell9.innerText = i.address.city;
          let cell10 = row.insertCell(9);
          cell10.innerText = i.address.zipcode;

          if (i) {
            userTable.style.display = "block";
          } else userTable.style.display = "none";
        }
      }
    });
}

//wire up the function
window.onload = displayUserDrop;
userDrop.onchange = displayUserTable;
