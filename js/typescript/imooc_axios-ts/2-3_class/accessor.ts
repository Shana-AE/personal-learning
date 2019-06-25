let passCode = 'secret1 pass code';

class Employee {
  private _fullName: string;
  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if(passCode && passCode == 'secret pass code') {
      this._fullName =newName;
    } else {
      console.log('Error: Unauthorized update of employee!!')
    }
  }
}

let employee = new Employee();
employee.fullName = 'Bob Smith';
if (employee.fullName) {
  console.log(employee.fullName);
}
