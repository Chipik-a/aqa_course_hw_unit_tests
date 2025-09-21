/* Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта */

function getKeyByValue<T extends object, U> (
    obj: T,
    value: U 
): keyof T | undefined {
    for (const key in obj) {
        if (obj[key as keyof T] === value) {
            return key;
        }
    }
    return undefined;
}

interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
}

const QA: IEmployee = {
    name: 'John',
    salary: 3000,
    isManager: false
};

const key1 = getKeyByValue(QA, 3000);
console.log(key1);

const key2 = getKeyByValue(QA, true);
console.log(key2);
