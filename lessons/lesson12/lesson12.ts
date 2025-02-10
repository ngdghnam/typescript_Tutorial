let testArray: string[] = ["HoaiNam"];
// Luu tru nhieu kieu du lieu
let testArray2: (string | number)[] = ["Cc", 4];
// Dùng mixtype khi và chỉ khi chứa nhiều loại dữ liệu
// Do ko biết trước được array chứa những gì

let testArray3 = ["heeloo world", 333]; //IDE tu hieu --> han che

testArray.push("Hello");
testArray2.push(4);
testArray2.push("Hello World");

console.log(">>> check Array: ", testArray);
console.log(">>> check Array: ", testArray2);
