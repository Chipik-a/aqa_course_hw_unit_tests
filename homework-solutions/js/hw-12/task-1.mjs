//1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
};
delayTwoSeconds(() => {
  console.log("Прошло 2 секунды!");
});

//2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат его резолва в консоль

const promiseResolve = new Promise((resolve, reject) => {
  resolve (1);
})
promiseResolve.then((result) => {
  console.log(result);
});

//3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". Обработайте промис методом .catch и выведите результат его резолва в консоль

const promiseReject = new Promise ((resolve, reject) => {
  reject('Promise failed');
});
promiseReject.catch((error) => {
  console.error(error);
});

//4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(number) {
   const promiseNum = new Promise ((resolve, reject) => {
    resolve (number);
   });
   return promiseNum; 
};
//console.log(promiseNumber(5)) // Promise { 5 }
  promiseNumber(5).then((result) => {
    console.log(result);
  });

//5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    results.forEach((value) => {
      console.log(value);
    });
  });

//6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    results.forEach((result) => {
      if(result.status === 'fulfilled') {
        console.log('Fulfilled:', result.value);
      } else {
        console.log('Rejected:', result.reason);
      }
    });
  });

//7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch*/

async function runAll(number) {
  try {
    const result = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    result.forEach((value) => console.log(value));
  }
  catch (error) {
    console.log(error);
  }
}
runAll();

async function runAllSettled(number) {
  try {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result) => {
      if(result.status === 'fulfilled') {
        console.log('Fulfilled:', result.value);
      } else {
        console.log('Rejected:', result.reason);
      }
    });
  }
  catch (error) {
    console.log('Rejected:', result.reason)
  }
  
}

runAllSettled()







