// Lesson 20
let age: number = 25;
// Truthy và falsy của js, giống js
if (age > 18) {
  console.log("Đủ tuổi đăng ký kết hôn");
} else {
  console.log("Chưa đủ đâu mày");
}

// ternnary operators
// const age: number = 19;
const checkAge = age > 18 ? "Trưởng thành" : "Con nít";
console.log(">>>", checkAge);

// Switch case
switch (age) {
  case 25:
    console.log("Đã đi làm ");
    break;
  case 19:
  case 20:
    console.log("Sinh vien");
    break;
  default:
    console.log("SV");
}

// Xài SC khi if else cồng kềnh, ko tường minh
// Trong TH
let n: number = 15;

// Ko cần có KW number ở init
for (let i: number = 0; i < n; i++) {
  console.log(i, "\t");
}

// Bai 23
// let n: number = 15;
let counter: number = 0;
let odd: number[] = [];
let even: number[] = [];

while (counter <= n) {
  if (counter % 2 === 0) {
    even.push(counter);
  } else {
    odd.push(counter);
  }
  counter++;
}

console.log(">>> ODD:", odd);
console.log(">>> EVEN:", even);

// Do while - bai 24
let counter2: number = 0;
do {
  console.log("Counter:", counter2);
  if (counter2 % 2 === 1) {
    break;
  }
  counter2++;
} while (counter2 < 5);

// Bai 25
let products = [
  { name: "phone", price: 7000 },
  { name: "tablet", price: 9000 },
  { name: "laptop", price: 12000 },
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price === 9000) {
    break;
  }
  console.log(products[i]);
}

// Bai 27 - Function
// Phải định nghĩa kiểu giá trị cho para với giá trị trả về
function sum(a: number, b: number): number {
  return a + b;
}

// Bản chất của arrow ffunction là anoymous function
const sum2 = (a: number, b: number): number => {
  return a + b;
};

// 1: phải định nghĩa kiểu giá trị cuả biến
//  2: phải đinhj nghĩa kiểu giá trị trả về (Thường sẽ ko làm)

// Bài 29: Optional Parameters
// Trong js, dù có truyền vào đối số hay ko thì cũng ko báo lỗi
//  Khi ko truyền vào sẽ cộng số nguyên và 1 giá trị đặc biệt
let sum4 = (x: number, y: number, z?: number) => {
  //Tham so z co the co hoac ko co gia tri
  if (z) {
    return x + y + z;
  }
  return x + y;
};

console.log(">>> Check sum:", sum4(5, 6), sum4(4, 5, 6));

// bài 30: Default Parameters
const sum6 = (x: number, y: number, z = false) => {
  if (z === false) {
    return x + y;
  }
  if (z) {
    return x - y;
  }
};
// console.log(">>> Check sum: ", sum6(1,2,3)) //Error
console.log(">>> Check sum: ", sum6(1, 2, true));

// Bài 31: REST PARAMETERS
// 1 func chỉ có 1 tham số REST duy nhất
// Phải là tham số cuối cùng trong danh sách tham số
// Phải sử dụng với array types
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((number) => (total += number));
  return total;
}

console.log(getTotal()); //0
console.log(getTotal(10, 20)); //30
console.log(getTotal(10, 20, 30)); //60
// Dù khai báo kiểu arr nhưng khi truyền đối số ko cần phải khai báo kiểu arr

function multiply(n: number, ...m: number[]) {
  let a = m.map((x) => {
    console.log(x);
    n * x;
  });
  console.log(a);
  // return m.map((x) => n * x);
  return a;
}

// const a = multiply(10, 1, 2, 3, 4);
// console.log(a);

function greet(greeting: string, ...names: string[]) {
  return `${greeting} ${names.join(", ")}!`;
}

console.log(greet("Hello", "Nam", "Gray"));
