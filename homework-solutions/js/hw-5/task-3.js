/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */

const word = 'hello';

function letterIndices(word) {
    const vowels = 'aeiouAEIOU';

    let vowelsCount = 0;
    let consonantsCount = 0;

    for (let i = 0; i < word.length; i++){
        if (word[i].toLowerCase() === word[i].toUpperCase()) {
            continue;
        }
        if(vowels.includes(word[i])) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }
    return `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
}

let vowelsAndConsonantsResult = letterIndices(word);

module.exports = { vowelsAndConsonantsResult };
