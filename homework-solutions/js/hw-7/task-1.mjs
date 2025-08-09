/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  const newMergeArrays = [].concat(...arrays);
  //return [].concat(...mergeArrays)
  return newMergeArrays;
} 

const result = mergeArrays([1,2], [3,4], [5,6])
//console.log(result);

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {

  if(!sentence.trim()) return ''; 

  const words = sentence.trim().split(' ').filter(word => word !== ''); //[ 'I', 'am', 'super', 'engineer' ]
  const transformed = words.map((word, index) => {
      return index === 0 
      ? word[0].toLowerCase() + word.slice(1).toLowerCase() 
      : word[0].toUpperCase() + word.slice(1).toLowerCase();

    // if(index === 0) {
    //   return word[0].toLowerCase() + word.slice(1);
    // } else {
    //   return word[0].toUpperCase() + word.slice(1);
    // }
  }); return transformed.join('_');
  }
    
//console.log(devideBy('I am super engineer'))

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {

  if (n < 0) {
    throw new Error('n must be a positive number');
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // if (n < 0) 
  //   {
  //     throw new Error('n must be a positive number');
  //   }
  // if (n === 0) return 0;
  // if (n === 1) return 1;

  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];

  //return fibonacci(n - 1) + fibonacci(n - 2)
}


export { mergeArrays, fibonacci, devideBy };
