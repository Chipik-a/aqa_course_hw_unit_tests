'use strict'

let n = 5;
let a = String(n) + String(n);
let b = String(n) + String(n) + String(n);
let result = n + Number(a) + Number(b);

console.log(result) // 5 + 55 + 555 = 615
/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
