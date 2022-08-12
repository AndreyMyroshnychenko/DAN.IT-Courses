class Employee {
    constructor(name, age, salary) {
      this._name = name;
      this._age = age;
      this._salary = salary;
    }
  
    get name() {
      return this._name;
    }
    set name(newValueName) {
      this._name = newValueName;
    }
  
    get age() {
      return this._age;
    }
    set age(newValueAge) {
      this._age = newValueAge;
    }
  
    get salary() {
      return this._salary;
    }
    set salary(newValueSalary) {
      this._salary = newValueSalary;
    }
  }
  
  class Programmer extends Employee {
    constructor(name, age, salary, lang) {
      super(name, age, salary);
      this._lang = lang;
    }
  
    get lang() {
      return this._lang;
    }
    set lang(newValueLang) {
      this._lang = newValueLang;
    }
    get salary() {
      return this._salary * 3;
    }
  }
  
  
  
  const clarkEmployee=new Employee("Clark", 19, 1500)
  const louiseProgrammer=new Programmer("Louise", 23, 2800, "C#")
  console.log(clarkEmployee);
  console.log(louiseProgrammer);