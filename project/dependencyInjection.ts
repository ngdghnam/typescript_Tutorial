class Student {
  public studentID: string;
  public firstName: string;
  public lastName: string;
  public address: string;

  constructor(
    studentID: string,
    firstName: string,
    lastName: string,
    address: string
  ) {
    this.studentID = studentID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }

  hello() {
    return `${this.firstName} ${this.lastName} hello World`;
  }
}
