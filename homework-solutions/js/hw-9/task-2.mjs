const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];
// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. Объект должен иметь поля name (string) и age (number)
function addCharacter(character) {
  if (!character || typeof character.name !== 'string' || typeof character.age !== 'number') {
    throw new Error('Invalid input');
  }

  characters.push(character);
  return character;
} 
addCharacter({ name: 'Alice', age: 28 }); 
console.log(characters);

// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
function getCharacter(name) {
    // for (let i = 0; i < characters.length; i++) {
    //   const currentName = characters[i];
    //   if (currentName.name === name) {
    //      return currentName;
    //   }
    // }
    //return characters.filter((i) => i.name === name); //filter вщзвращает массив
    return characters.find((i) => i.name === name);
  } console.log(getCharacter('Barney'));

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
function getCharactersByAge(minAge) {
  // for (let i = 0; i < characters.length; i++) {
  //   const currentAge = characters[i];
  //   if (currentAge.age >= minAge) {
  //     return currentAge;
  //   }
  // }
  if (!minAge || typeof minAge !== 'number') {
     throw new Error('Invalid input');
  }
  return characters.filter((i) => i.age >= minAge);
}
console.log(getCharactersByAge(40));

// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
function updateCharacter(name, newCharacter) {
  const character = getCharacter(name);
  if (!character) {
    throw new Error('Character is not found');
  }
    Object.assign(character, newCharacter);
    return character;
  }

console.log(updateCharacter('Barney', { age: 31, city: 'New York'}))

// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
function removeCharacter(name) {
  const index = characters.findIndex(i => i.name === name);

  if (index === -1) {
    throw new Error('Character not found'); // ошибка, если персонаж не найден
  }

  const removedCharacter = characters[index]; 
  characters.splice(index, 1);               
  return removedCharacter;                   
}


export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
