//1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
}

//2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
const QA: IEmployee = {
    name: 'John',
    salary: 3000,
    isManager: false
}

//3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
type EmployeeKeys = keyof IEmployee; // 'name' | 'salary' | 'isManager'
type QaKeys = keyof typeof QA; // 'name' | 'salary' | 'isManager'

//4. Создайте тип UserType из объекта QA (используйте typeof)
type UserType = typeof QA; //{ name: string; salary: number; isManager: boolean }

//5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
type PartialEmployee = Partial<IEmployee>; //тип делает все поля необязательными = { name?: string; salary?: number; isManager?: boolean;}
const partial: PartialEmployee = {}; 

//6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
type NameAndSalary = Pick<IEmployee, 'name' | 'salary'>;

//7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
type IEmployeeWithoutIsManager = Omit<IEmployee, 'isManager' >;

//8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
// type ReadonlyIEmployee = Readonly<IEmployee>;
// const readonlyEmployee: ReadonlyIEmployee = { name: 'John', salary: 3000, isManager: false}
const readonlyEmployee: Readonly<IEmployee> = {name: 'John', salary: 3000, isManager: false};

//9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)*/
const qaRecord: Record<string, QaKeys> = {
    nameRecord: 'name',
    salaryRecord: 'salary',
    isManagerRecord: 'isManager'
}


//1. Создайте интерфейс IVehicle:
interface IVehicle {
    getDetails(): string;
    start(): string;
}
//2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
abstract class Vehicle implements IVehicle{
    constructor(
        public make: string,
        public model: string
    ) {}

    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting`;
    }
    abstract getDetails(): string;
}
//3. Создайте класс Car, который наследует Vehicle:
class Car extends Vehicle{
    constructor(
        make: string,
        model: string,
        public year: number
    )
    {
        super(make, model);
    }
    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}
//4. Создайте объект класса Car и проверьте работоспособность
const myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.start());
console.log(myCar.getDetails());

/*task 1-2
Необходимо создать классовую структуру
1. Создайте интерфейс IVehicle:
  Методы:
    - getDetails(): string — возвращает информацию о транспортном средстве.
    - start(): string — возвращает строку "The vehicle is starting".

2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
  Реализуйте конструктор с полями:
    - make (строка)
    - model (строка)
  Добавьте методы:
    - start, возвращающего строку: "The vehicle {make} {model} is starting.".
    - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

3. Создайте класс Car, который наследует Vehicle:
    - Добавляет поле year (число).
    - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
4. Создайте объект класса Car и проверьте работоспособность */