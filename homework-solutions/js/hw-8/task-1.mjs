import { isAccessor } from "typescript";

/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];
//  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
let forEach = [];

numbers.forEach((el) => {
  if (el % 3 === 0) {
    forEach.push(el);
  }
});

console.log(forEach);

//2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
let map = numbers.map((el, _i, array) => el - array.length);
console.log(map);

//3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
let filter = numbers.filter((el, i, array) => el > array[i - 1]);
console.log(filter);

//  4. find - присвойте элемент, равный своему индексу //2

let find = numbers.find((el, i, _array) => el === i) ;
console.log(find);

//  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
let sort = numbers.sort((a, b) => a - b);
console.log(sort);

//6. reduce - получите сумму всех чисел массива //466
let reduce = numbers.reduce((accumulator, value, _index) => accumulator + value);
console.log(reduce);

//  7. some - проверьте, есть ли в массиве элементы больше 90 //true
let some = numbers.some((el) => el > 90);
console.log(some);

  //8. every - проверьте, что все элементы массива двухзначные //false
let every = numbers.every((el) => (el >= 10) && (el <= 99));
console.log(every);



export { forEach, map, filter, find, sort, reduce, some, every };
