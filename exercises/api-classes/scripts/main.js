"use strict";

let coursesTable = document.querySelector("#courses-table");

function loadCourseData() {
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((data) => {
      for (let course of data) {
        let row = coursesTable.insertRow();
        let cell1 = row.insertCell(0);
        cell1.innerText = course.courseName;
        let cell2 = row.insertCell(1);
        cell2.innerText = course.courseNum;
        let cell3 = row.insertCell(2);
        cell3.innerText = course.dept;
        let cell4 = row.insertCell(3)
        let anchor = document.createElement("a");
        anchor.href = `details.html?courseid=${course.id}`;
        anchor.text = "See details";
        cell4.appendChild(anchor);
      }
    });
}
loadCourseData();
