export { };
'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: - how many candies are owned by students

function candyTotal(list: any[]): void {
  let candyTotal: number = 0;
  list.forEach(function (student) { // student => { ... }  =  function (student) { ... }
    candyTotal += student.candies;
  });
 console.log("sum of candies in the classroom: ", candyTotal);
} 
candyTotal(students);

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function ageTotal(list: any[]): void {
  let ageTotal: number = 0;
  /*for (let i = 0; i < list.length; i++) {
    if (list[i].candies < 5) {ageTotal += list[i].age;}
  }*/
  list.forEach(function (student) { // student => { ... }  =  function (student) { ... }
    if (student.candies < 5) {
      ageTotal += student.age;
    }
  });

 console.log(`The kids arent alright `, ageTotal);
} 
ageTotal(students);