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
    .then((course) => {
        let row = coursesTable.insertRow();
        let cell1 = row.insertCell(0);
        cell1.innerText = course.id;
        let cell2 = row.insertCell(1);
        cell2.innerText = course.dept;
        let cell3 = row.insertCell(2);
        cell3.innerText = course.courseNum;
        let cell4 = row.insertCell(3);
        cell4.innerText = course.courseName;
        let cell5 = row.insertCell(4);
        cell5.innerText = course.instructor;
        let cell6 = row.insertCell(5);
        cell6.innerText = course.startDate;
        let cell7 = row.insertCell(6);
        cell7.innerText = course.numDays;
        
      }
     )}
};

displayCourse();
