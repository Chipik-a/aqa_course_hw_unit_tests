/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  function countVowels(word){
    return word.split('').filter(letter => vowels.has(letter)).length;
  }
  return wordsArr.toSorted((a, b) => countVowels(a) - countVowels(b));

  
}
console.log(sortedByVowels(words));

export { sortedByVowels };



//   function countVowels(word) {
//     let count = 0;
//     for (let letter of word) {
//       if(vowels.has(letter)){
//         count++;
//       } 
//     } return count;

//   }
//   return wordsArr.toSorted((a, b) => countVowels(a) - countVowels(b));