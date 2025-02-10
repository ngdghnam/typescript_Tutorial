// Normal Array
let skills: (string | number)[] = ["Hello World", 25];
skills.push("Hi");
skills.push(69);
console.log(">>> Check array: ", skills);

// Tuples: datatypes/size/order
let skills2: [string, number] = ["degrayhnam", 25];

let skills3: [boolean, string, number];

skills3 = [true, "hi", 33];

// skills3 = ["hii", true, 33] //--> Error

// optional: có thể xuất hiện hoặc ko
// Cho thêm dấu chấm hỏi
let skills4: [string, number, boolean?]; // Optional phai dung cuoi
skills4 = ["Nam", 33];
// skills4 = ["Hai", 10, "heello"] //Error
