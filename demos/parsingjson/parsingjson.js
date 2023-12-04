let str = `{"title" : "Web Designer",
 "startDate" : "October 2022",
 "company" : "AT&T",
 "minSalary" : 52000,
 "maxSalary" : 86000 
 }`;
let job = JSON.parse(str);
//can call or log specific properties just like in an array of objects
console.log(job.title);
console.log(job.company);
