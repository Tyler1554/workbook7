// let promise = fetch("http://jsonplaceholder.typicode.com/users/1");
// console.log(promise);
// promise
//   .then(function processResponse(response) {
//     console.log(response.status, response.statusText, response.body);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
//turn json stream into js

fetch("http://jsonplaceholder.typicode.com/users/1").then(response => response.json()).then(data =>  console.log(data.name));