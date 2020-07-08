class Department {
  constructor(n: string) {
    this.name = n;
  }

  name: string;

}

const accounting = new Department('Accounting');

console.log(accounting);