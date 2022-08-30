/* CLASS */

export class Employee {
  //   public name: string;
  //   private age: number;
  //   readonly male: boolean;

  //   constructor(n: string, a: number, m: boolean) {
  //     this.name = n;
  //     this.age = a;
  //     this.male = m;
  //   }

  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) {}

  print() {
    return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`;
  }
}

const henry = new Employee("henry", 30, true);
// console.log(henry.name);
// console.log(henry.age);
// console.log(henry.male);

// henry.name = "nam";
// henry.male = false;
// console.log(henry);

// console.log(henry.print());
const bob = new Employee("bob", 25, true);

let Employees: Employee[] = [];
Employees.push(henry);
Employees.push(bob);

Employees.forEach((Employee) =>
  console.log(Employee.name, Employee.male, Employee.print())
);
