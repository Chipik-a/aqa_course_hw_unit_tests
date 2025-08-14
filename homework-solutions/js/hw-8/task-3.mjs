/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
return (numbers.length + 1) * (numbers.length + 2) / 2 - numbers.reduce((a, b) => a + b, 0);
} 

    // const maxNumber = numbers.length + 1;
    // const sumTotal = maxNumber * (maxNumber + 1) / 2;
    // const sumArr = numbers.reduce((a, b) => a + b, 0);
    // return sumTotal - sumArr;


// const maxNumber = numbers.length + 1;
// const sumTotal = maxNumber * (maxNumber + 1) / 2;
  
// let sumArr = 0;
//   for (let num of numbers) {
//     sumArr += num;
//   } return sumTotal - sumArr;

  // console.log(findMissingNumber([5,2,7,3,8,1,6] ));

export { findMissingNumber };
