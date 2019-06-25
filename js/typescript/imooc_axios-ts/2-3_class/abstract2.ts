abstract class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printName(): void {
    console.log('Department name ' + this.name);
  }

  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing');
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department;
// error, we cannot directly use the abstract class.
// department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// error, we cannot use this method because the abstract class doesn't have the method.
// department.generateReports();