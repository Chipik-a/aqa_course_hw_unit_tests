/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
'use strict'

  const minAge = 18;
  const maxAge = 60;
  let age = "10";

  if (typeof age === "string" && /^\d+$/.test(age)) {
      age = Number(age);
      console.log(typeof(age));
    }
  
  if (age < minAge) {
    console.log("You don't have access cause your are is " + age + " It's less then");
  } else if (age >= minAge && age < maxAge) {
    console.log("Welcome!")
  } else if (age > maxAge) {
    console.log("Keep calm and look Culture channel")
  } else {
    console.log("Technical work")
  }