/*

 - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше
  */
'use strict'

//IF, ELSE
// let salary = 1000;
// let grade;

// if (salary >= 1000) {
//     grade = "middle";
// } else {
//         grade = "junior";
//     }

// console.log("grade:", grade);

//TERNARY OPERATOR

let salary = 1000;
let grade = (salary >= 1000) ? 'middle' : 'junior';
console.log(grade);
