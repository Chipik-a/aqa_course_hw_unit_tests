class Employee {
  #salary = 0;

  constructor(firstName, lastName, profession, salary = 0) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.salary = salary; 
  }

  get firstName() { return this._firstName; }
  set firstName(value) {
    if (typeof value !== 'string') throw new Error('Invalid firstName');
    this._firstName = value;
  }

  get lastName() { return this._lastName; }
  set lastName(value) {
    if (typeof value !== 'string') throw new Error('Invalid lastName');
    this._lastName = value;
  }

  get profession() { return this._profession; }
  set profession(value) {
    if (typeof value !== 'string') throw new Error('Invalid profession');
    this._profession = value;
  }

  get salary() { return this.#salary; }
  set salary(value) {
    if (typeof value !== 'number' || value < 0) throw new Error('Invalid salary');
    this.#salary = value;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}
class Company {
  #employees = [];

  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  set title(value) {
    if(typeof value !== 'string' || value.trim() === '') {
      throw new Error('Invalid Title');
    }
  }

  set phone(value) {
    if(typeof value !== 'number' || isNaN(value)) {
      throw new Error('Invalid phone number');
    }
  }

  set address(value) {
    if(typeof value !== 'string' || value.trim() === '') {
      throw new Error('Invalid address');
    }
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error("Invalid data: must be an Employee instance");
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee();
emp1.firstName = 'John';
emp1.lastName = 'Doe';
emp1.profession = 'Developer';
emp1.salary = 3000;

const emp2 = new Employee();
emp2.firstName = 'Barbara';
emp2.lastName = 'Johnson';
emp2.profession = 'QA';
emp2.salary = 2500;

company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]
console.log(company.getInfo());

export { Employee, Company };
