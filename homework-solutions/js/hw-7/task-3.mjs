/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {

  

    if(number < 0 || typeof(number) === 'string' || number === ' ') {
      return false;
    } 
    if(number >= 0 && number <= 9) {
      return number;
    } 

    if (number > 9) {
      const digits = String(number).split('').map(Number);
        let sum = 0;
      for(let i = 0; i < digits.length; i++) {
        sum += digits[i]
      }
      
      if (sum > 9) {
        return digitalRoot(sum);
      } else {
        return sum;
      }
    } return sum;
}

// console.log(digitalRoot(2))
// console.log(digitalRoot(0))
// console.log(digitalRoot(-1))
// console.log(digitalRoot(' '))
// console.log(digitalRoot('bdjhbcdjic'))
// console.log(digitalRoot(110787677))

export { digitalRoot };
