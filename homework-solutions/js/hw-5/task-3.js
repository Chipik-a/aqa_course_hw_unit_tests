/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */

const word = 'hello';

function letterIndices(word) {
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxz';
    const lowerCaseWord = word.toLowerCase();

    let vowelsCount = 0;
    let consonantsCount = 0;

    for (let i = 0; i < lowerCaseWord.length; i++){
        if(vowels.includes(lowerCaseWord[i])) {
            vowelsCount++;
        } else if (consonants.includes(lowerCaseWord[i])){
            consonantsCount++;
        }
    }
    return `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
}

let vowelsAndConsonantsResult = letterIndices(word);

export { vowelsAndConsonantsResult };
