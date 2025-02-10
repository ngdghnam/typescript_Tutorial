// void đối ngược any
// Khi ko muốn trả về 1 cái gì cả

// Định nghĩa 1 function và quy định kiểu giá trị trả về cho nó
const sum = (a: number, b: number): number => {
  return a + b;
};

// Tuy nhiên đôi khi có các func ko muốn trả về giá trị
// Ko return về gì thì sẽ tự định nghĩa về void
// Cách viết dưới đây là các viết tường minh
const handleLogs = (msg: string): void => {
  console.log(">>> Messenger:", msg);
};

// Void thường được dùng với function thôi, ít khi nào xài với biến
handleLogs("Hello World, my name is Gray");
