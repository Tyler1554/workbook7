// fetch("http://jsonplaceholder.typicode.com/users/1")
// .then(response => response.json())
// .then(data =>  console.log(data.name));

async function loadUser(){
 let response = await fetch("http://jsonplaceholder.typicode.com/users/1");
 let data = await response.json();
 console.log(data);
}
loadUser();