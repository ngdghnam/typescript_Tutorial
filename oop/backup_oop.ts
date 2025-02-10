// Bai 33
class Person {
  public ssn: string;
  public firstName: string;
  public lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let hoaiNam = new Person("001204009840", "Nam", "Nguyen");
console.log(">>> check new person:", hoaiNam);
console.log(">>> check new person:", hoaiNam.getFullName());

// bài 34
// Access Modifiers
// Public
// Private
// Protected
// Nếu ko khai báo phạm vi sử dụng thì TS assummed sẽ là public
class Employee {
  // Để cho 1 biến ko bị sửa đổi thì sẽ đổi thành private
  // để truuy cập thì sẽ có khái niệm getter và setter

  // Protected giống private nhưng lớp con (kế thừa) sẽ ko thể truy cập được
  private empCode: string;
  private empName: string;

  constructor(empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
}

let emp = new Employee("aaa", "bbb");
// emp.empCode = "123";
// emp.empName = "HoaiNam"; //Error lieefn

console.log(">>> check emp:", emp);

// bài 35
// Readonly
// readony dùng để đánh dấu 1 thuộc tính ko bao giờ thay đổi được
// Dùng với class hay interface
class Person2 {
  public readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let emp2 = new Person2(new Date(1990, 12, 25));
console.log(">>> check Person:", emp2);
// emp2.birthDate = new Date(1991, 12, 25); //errror

// Bài 36
// Getter và setter
class Person3 {
  private _age: number;
  public firstName: string;
  public lastName: string;

  constructor(_age: number, firstName: string, lastName: string) {
    this._age = _age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Khi định nghĩa 1 medthod ko cần có function đứng ở đầu
  // getter
  get age() {
    return this._age;
  }

  // setter
  set age(newAge: number) {
    if (newAge < 0 || newAge > 150) {
      throw Error("Invalid age");
    }
    this._age = newAge;
  }
}

let person3 = new Person3(21, "Hoai Nam", "Nguyen");
person3.age = 40; //Setter --> Day moi dung
// person3.setAge(69);
console.log(">>> Check age: ", person3); //getter

// bài 37
class Person4 {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `this is ${this.firstName} ${this.lastName}`;
  }
}

class Empolyee1 extends Person4 {
  private jobTitle;

  constructor(firstName: string, lastName: string, jobTitle: string) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }

  // overdrive
  describe(): string {
    return `${super.describe()} from parent employee`;
  }
}

let emp3 = new Empolyee1("Nam", "Nguyen", "Data engineer");
console.log(emp3.describe());
console.log(emp3.getFullName());

class Circle {
  static pi: number = 3.14;
  public test: number = 60;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}
console.log(">>> Check pi:", Circle.calculateArea(10));
// console.log(">>> Check pi:", Circle.test); //Error

let t = new Circle();
console.log(">>> check t:", t.test);

// Lesson 39
// Abstract class - trừu tượng
// Định nghĩa 1 khung và bắt tuân theo khung đấy
// như 1 hình mẫu để các class kkhác phải noi theo
// Cú pháp abstract class .. .
// 1 abstract class có thể chứa 1 hoặc nhiều normal method
// 1 hoặc nhiều abstract method: đối với loại này, ko chứa phần body, chỉ định nghĩa tên method
abstract class Employee2 {
  constructor(private firstName: string, private lastName: string) {}

  abstract getSalary(): number; //abstract method

  // normal method
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()}$  a month`;
  }
}

// const emp4 = new Employee2("Eric", "HoiDanIT"); //ERror

class FullTimeEmployee extends Employee2 {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  // Cần viết method này vì nó đã đuọcw khai báo trong abstract classs
  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Employee2 {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }

  // Cần viết method này vì nó đã đuọcw khai báo trong abstract classs
  getSalary(): number {
    return this.rate * this.hours;
  }
}

const emp5 = new FullTimeEmployee("Nam", "Nguyen", 12000);
console.log(">>>", emp5.getSalary());
