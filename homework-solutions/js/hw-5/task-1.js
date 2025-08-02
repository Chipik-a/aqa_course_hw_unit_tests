/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */
function getEvenNumbers() {
  let result = '';
  for (let i = 10; i >= 0; i--) {
    if (i % 2 === 0) {
      result += i;
      if (i > 0) {
        result += '-';
      }
    }
  }
  return result;
}

console.log(evenNumbersResult);
console.log(typeof(evenNumbersResult));

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

function generateSmilePattern() {
    let result = '';
    for (let i =1; i <= 5; i++) {
        result += ':)'.repeat(i);
        if (i < 5) {
            result += '\n';
        }
    } return result
}

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */

function replaceSpacesWithOne() {
  const text = 'Hello! I am a JS student!';
  return text.replaceAll(' ', '1');
}

const evenNumbersResult = getEvenNumbers();
const smilePatternResult = generateSmilePattern();
const replaceSpacesWithOneResult = replaceSpacesWithOne();

module.exports = { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
