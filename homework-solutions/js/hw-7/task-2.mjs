/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  return typeof word === 'string' && word.trim().toLowerCase() === word.trim().toLowerCase().split('').reverse().join('');

  /* 
    if (typeof word !== 'string') {
    return false;
  }

  word = word.trim().toLowerCase()
  const newWord = word.split('').reverse().join('');

  if (word === newWord) {
    return true;
  } else {
    return false;
  }
  */
}


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

// function findLongestWords(sentence) {
//   if(typeof sentence !== 'string' || sentence.trim() === '') {
//     return [];
//   }

//   let words = sentence.trim().split(' ');
//   let longestWord = [];
//   let maxLength = 0;

//     for (let i = 0; i < words.length; i++) {
//       if(words[i].length > maxLength) {
//         maxLength = words[i].length;
//         longestWord = [words[i]];
//       }
//       else if(words[i].length === maxLength) {
//         longestWord.push(words[i]);
//       }
//     } return longestWord;

// } 


function findLongestWords(sentence) { 
    if(typeof sentence !== 'string' || sentence.trim() === '') {
        return [];
      }

      let words = sentence.trim().split(' ').filter(word => word !== '');
      let maxLength = 0;
      
      words.map(word => {
        if(word.length > maxLength) {
          maxLength = word.length
        }
      });
      return words.filter(word => word.length === maxLength);

      }

  console.log(findLongestWords('i am try to write a function and function'))

export { isPalindrom, findLongestWords };
