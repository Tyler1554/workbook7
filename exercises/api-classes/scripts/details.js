"use strict"
const coursesTable = document.querySelector("#courses-table");
const urlParams = new URLSearchParams(location.search);

function displayCourse(){
let id = -1;
if (urlParams.has("courseid") === true)
{
 id = urlParams.get("courseid");
 fetch(`http://localhost:8081/api/courses/${id}`)
    .then((response) => response.json())
    .then((data) => {
        let row = coursesTable.insertRow();
        let cell1 = row.insertCell(0);
        cell1.innerText = course.courseName;
        let cell2 = row.insertCell(1);
        cell2.innerText = course.courseNum;
        let cell3 = row.insertCell(2);
        cell3.innerText = course.dept;
        let cell4 = row.insertCell(3);
      }
     )}
};

displayCourse();