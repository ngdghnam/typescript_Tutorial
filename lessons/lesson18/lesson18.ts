// union ~ join

function addTwoNumbersOrString(a: number | string, b: number | string) {
  //Bao nhiêu kiểu union cũng được
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a.concat(b);
  throw new Error("Parameters must be numbers or strings");
}

// Lỗi khi running
// Lỗi khi dịch code có liên quan đến UX nhằm tăng trải nghiệm người dùng
// console.log(">>> Check: ", addTwoNumbersOrString(true, [1, 2, 4])); //Ko lỗi nhưng khi chạy sẽ throw error
console.log(">>> Check: ", addTwoNumbersOrString(3, 2));
console.log(">>> Check: ", addTwoNumbersOrString("Hello", " Hoai Nam"));
