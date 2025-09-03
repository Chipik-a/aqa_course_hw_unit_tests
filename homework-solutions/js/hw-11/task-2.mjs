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
    if (
      typeof value !== 'string' ||
      value.length < 2 || value.length > 50 ||
      !value.split('').every(ch => (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
    ) {
      throw new Error('Invalid firstName');
    }
      this._firstName = value;
  }
  get lastName() { return this._lastName; }
  set lastName(value) {
  if (
    typeof value !== 'string' ||
    value.length < 2 ||
    value.length > 50 ||
    ![...value].every(ch => (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))
  ) {
    throw new Error('Invalid lastName');
  }
  this._lastName = value;
}

  get profession() { return this._profession; }
  set profession(value) {
  if (
    typeof value !== 'string' || 
    value.trim() === '' || 
    ![...value].every(ch => 
      (ch >= 'A' && ch <= 'Z') || 
      (ch >= 'a' && ch <= 'z') || 
      ch === ' ' 
    )
  ) {
      throw new Error('Invalid profession');
    }
    this._profession = value;
  }

  get salary() { return this.#salary; }
  set salary(value) {
    if (
      typeof value !== 'number' ||
      Number.isNaN(value) ||
      value <= 0 ||
      value >= 10000
    ) {
        throw new Error('Invalid salary');
      } 
    this.#salary = value;
  }

  //   - salary — число, должно быть больше 0 и меньше 10000.

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Company {
  #employees = [];

   #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((emp) => emp.firstName === firstName);
   }

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
    return `Компания: ${this._title}\nАдресс: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((empl) => empl.firstName === firstName);
    if(!employee) {
      throw new Error("The employee wasn't found");
    }
    return employee;
  }

  removeEmployee(firstName) {
     const index = this.#getEmployeeIndex(firstName);
      if (index === -1) {
        throw new Error ('Employee not found');
     } 
     this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    const totalSale = this.#employees.reduce((acc, emp) => acc + emp.salary, 0);
    return totalSale;
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

//console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]
console.log(company.getTotalSalary());



export { Employee, Company };
