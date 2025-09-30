/*Реализовать на классах структуру и методы, что были у нас на практике по объектам.
Помимо описанных в файле методов - продумайте также методы необходимые для комфортной работы с данной структурой, приватные хелперы и так далее если увидите в них необходимость. Короче - ваш полет фантазии и удобство использования)

Сразу уточняю, тут НЕ ОДИН класс!

Жду интерфейсы/абстракции где вам покажутся уместными
Реализация строго на TS


// Task 3. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия, чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО! */

interface IDepartment {
  id: number;
  name: string;
  employeesCount: number;


editName(newName: string): void; //ничего не возвращает
addEmployees(count: number): void;
removeEmployees(count: number): void;
get hasEmployees(): boolean; //геттер
}
class Department implements IDepartment {
    id: number;
    name: string;
    employeesCount: number;

  constructor(id: number, name: string, employeesCount: number = 0) {
      this.id = id;
      this.name = name;
      this.employeesCount = employeesCount;
  }

  editName(newName: string): void {
    if(newName === '') throw new Error ('Invalid Name');
    this.name = newName;
  }
  addEmployees(count: number): void {
    if(count < 0) throw new Error('Count should be positive');
    this.employeesCount += count;
  }
  removeEmployees(count: number): void {
    if(count < 0) throw new Error('Count should be positive');
    if(count > this.employeesCount) throw new Error(' Not enough employees');
    this.employeesCount -= count;
  }
  get hasEmployees(): boolean {
    return this.employeesCount > 0;
  }
}

interface IEnterprise {
  id: number;
  name: string;
  departments: Department[];


addDepartment(name: string): void;
findDepartment(idOrNumber: number | string): Department | undefined;
deleteDepartment(id: number): void;
getTotalEmployees(): number;
moveEmployees(fromId: number, toId: number): void;
}

class Enterprise implements IEnterprise{
  id: number;
  name: string;
  departments: Department[];

constructor(id: number, name: string, departments: Department[]) {
  this.id = id;
  this.name = name;
  this.departments = departments;
}

addDepartment(name: string): void {
  if(name === '') throw new Error('Invalid Name');
  const newId = this.generateDepartmentId();
  this.departments.push(new Department(newId, name));
}
  private generateDepartmentId(): number {
    return this.departments.length > 0 ?
      Math.max(...this.departments.map(d => d.id)) + 1 :
      1;
  }

findDepartment(idOrNumber: number | string): Department | undefined {
  if(idOrNumber === '') throw new Error ('Invalid data');
  const dept = this.departments.find(d => 
    typeof idOrNumber === 'number' ?
    d.id === idOrNumber :
    d.name === idOrNumber
  );
  return dept;
}

deleteDepartment(id: number): void {
  const dept = this.departments.find(d => d.id === id);

     if(!dept) throw new Error('Department not found');
     if(dept.hasEmployees) throw new Error('Can\'t delete department with employees');

     this.departments = this.departments.filter(d => d.id !== id);
}

getTotalEmployees(): number {
  return this.departments.reduce((total, dept) => total + dept.employeesCount, 0)
}

moveEmployees(fromId: number, toId: number): void {
  const fromDept = this.departments.find(d => d.id === fromId);
  const toDept = this.departments.find(d => d.id === toId);

  if(!fromDept || !toDept) throw new Error('Department not found');
  if(!fromDept.hasEmployees) throw new Error('No employees to move');

  toDept.addEmployees(fromDept.employeesCount);
  fromDept.removeEmployees(fromDept.employeesCount);
}
}

interface IEnterpriseManager {
  enterprises: Enterprise[];

addEnterprise(name: string): void;
deleteEnterprise(id: number): void;
findEnterprise(id: number): Enterprise | undefined;
getEnterpriseByDepartment(idOrName: number | string): Enterprise | undefined;
printStructure(): void;
}

class EnterpriseManager implements IEnterpriseManager{
  enterprises: Enterprise[];

  constructor (enterprises: Enterprise[]) {
    this.enterprises = enterprises;
  }

  addEnterprise(name: string): void {
    if(name === '') throw new Error('Invalid Name');

    const newId = this.generateEnterpriseId();
    const newEnterprise = new Enterprise(newId, name, []);

    this.enterprises.push(newEnterprise);
  }

  private generateEnterpriseId(): number {
    return this.enterprises.length > 0 ?
      Math.max(...this.enterprises.map(e => e.id)) + 1 :
      1;
  }

  deleteEnterprise(id: number): void {
    const ent = this.enterprises.find(e => e.id === id);
    
    if(!ent) throw new Error('Enterprise not found');
    this.enterprises = this.enterprises.filter(e => e.id !== id);
  }

  findEnterprise(id: number): Enterprise | undefined {
    const ent = this.enterprises.find(e => e.id === id);
    if(!ent) throw new Error('Enterprise not found');
    return ent;
  }
  getEnterpriseByDepartment(idOrName: number | string): Enterprise | undefined {
    if(idOrName === '') throw new Error('Invalid data');
    const ent = this.enterprises.find(e => 
      e.departments.some(d =>
      typeof idOrName === 'number' ?
      d.id === idOrName :
      d.name === idOrName)
    );
    return ent;
  }
  printStructure(): void {
    this.enterprises.forEach(ent => {
      const totalEmployees = ent.getTotalEmployees();
      const empText = totalEmployees > 0 ? `${totalEmployees} сотрудников` : 'нет сотрудников';
      
      console.log(`${ent.name} (${empText})`);
      
      ent.departments.forEach(dep => {
        const depText = dep.employeesCount > 0 ? `${dep.employeesCount} сотрудников` : 'нет сотрудников';
        console.log(`- ${dep.name} (${depText})`);
      });
    });
  }
}



const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];


const manager = new EnterpriseManager(
  enterprises.map(ent => new Enterprise(
    ent.id,
    ent.name,
    ent.departments.map(dep => new Department(dep.id, dep.name, dep.employees_count))
  ))
);

console.log("=== 1. Вывести все предприятия и отделы ===");
manager.printStructure();

console.log("\n=== 2. Найти предприятие по id или имени отдела ===");
const deptId = 4;
console.log(`Предприятие для отдела с id=${deptId}:`, manager.getEnterpriseByDepartment(deptId)?.name);

const deptName = "Отдел маркетинга";
console.log(`Предприятие для отдела с именем='${deptName}':`, manager.getEnterpriseByDepartment(deptName)?.name);

console.log("\n=== 3. Добавить новое предприятие ===");
manager.addEnterprise("Название нового предприятия");
manager.printStructure();

console.log("\n=== 4. Добавить новый отдел в предприятие 1 ===");
manager.findEnterprise(1)?.addDepartment("Название нового отдела");
manager.printStructure();

console.log("\n=== 5. Редактировать имя предприятия ===");
const ent1 = manager.findEnterprise(1);
if (ent1) ent1.name = "Новое название предприятия"; 
manager.printStructure();

console.log("\n=== 6. Редактировать имя отдела ===");
const dep = manager.findEnterprise(1)?.findDepartment(2);
dep?.editName("Новое название отдела");
manager.printStructure();

console.log("\n=== 7. Удалить предприятие ===");
manager.deleteEnterprise(5);
manager.printStructure();

console.log("\n=== 8. Удалить отдел (только если нет сотрудников) ===");
manager.findEnterprise(9)?.deleteDepartment(10);
manager.printStructure();

console.log("\n=== 9. Перенос сотрудников между отделами одного предприятия ===");
manager.findEnterprise(1)?.moveEmployees(2, 3);
manager.printStructure();


// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).

// Пример:
// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)
