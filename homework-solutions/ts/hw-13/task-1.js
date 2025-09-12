/*1. Объявите переменные для каждого из следующих типов данных с явным указанием типа после символв "двоеточие":
    - Число: переменная num1, значение 42.
    - Строка: переменная str, значение "Hello, TypeScript!".
    - Булево: переменная isComplete, значение true.
    - Массив чисел: переменная numbers, значения [1, 2, 3, 4, 5].
    - Массив строк: переменная cities, значения ["Minsk", "Warsaw", "London"].
    - Объект: переменная person, объект с полями name: "Alice", age: 30, city: "Minsk".*/
var num1 = 42;
var str = 'Hello, TypeScript!';
var isComplete = true;
var numbers = [1, 2, 3, 4, 5];
var cities = ["Minsk", "Warsaw", "London"];
var person = {
    name: 'Alice',
    age: 30,
    city: 'Minsk'
};
var car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
};
var oldCar = {
    brand: 'Chevrolet',
    model: 'Bel Air',
};
/*6. Создайте функцию calculateDiscount, которая принимает объект типа DiscountedProduct и возвращает итоговую цену с учетом скидки.
   Затипизировать явно и входные и выходные данные. Используйте следующие данные:

   const product: DiscountedProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
  };
  console.log(calculateDiscount(product)); // Ожидается: 900*/
function calculateDiscount(product) {
    return product.price - (product.price * product.discount) / 100;
}
var product = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
};
console.log(calculateDiscount(product));
