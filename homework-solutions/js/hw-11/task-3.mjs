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
    if (typeof value !== 'string') throw new Error('Invalid profession');
    this._profession = value;
  }

  get salary() { return this.#salary; }
    set salary(value) {
      if (
        typeof value !== 'number' ||
        Number.isNaN(value) ||
        value <= 0 ||
        value >= 100000
      ) {
          throw new Error('Invalid salary');
        } 
      this.#salary = value;
    }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, 'Developer', salary);
    this.programmingLanguages = programmingLanguages;
  }

  addProgrammingLanguage(language) {
  if(typeof language !== 'string' || language.trim() === '') {
    throw new Error('This is invalid data');
  }
  if (this.programmingLanguages.includes(language)) {
    throw new Error('This language has already been added');
  }
    this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, 'Manager', salary);
    this.teamSize = teamSize;
  }
    increaseTeamSize() {
      this.teamSize += 1;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools) {
    super(firstName, lastName, 'Designer', salary);
    this.designTools =  Array.isArray(designTools) ? designTools : [designTools];
  }
  addDesignTool(tool) {
    if (typeof tool !== 'string' || tool.trim() === '') {
    throw new Error('This is invalid data');
  }
    if(this.designTools.includes(tool)) {
      throw new Error ('This tool has already been added');
    }
    this.designTools.push(tool);
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
      if (!(employee instanceof Employee)) {
        throw new Error("Invalid data: must be an Employee instance");
      }
      if (this.#employees.some(emp => emp.getFullName() === employee.getFullName())) {
        throw new Error("Employee with the same full name already exists");
      }
      this.#employees.push(employee);
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
  
    getEmployeesByProfession(profession) {
      const result = this.#employees.filter((emp) => emp.profession === profession);
      // if(result.length === 0) {
      //   throw new Error (`No employees found with profession: ${profession}`);
      // };
    return result;
}
}

export { Employee, Company, Designer, Developer, Manager };
