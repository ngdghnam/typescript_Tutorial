const sum3 = (x: number, y: number) => {
  return x + y;
};

//no error
console.log(">>> check sum3 = ", sum3(5, 10)); //15

//error
// console.log(">>> check sum3 = ", sum3(5, "10")); //15
let message: string = "Heelloo World";

let logOutMessage = (message: string) => {
  console.log(message);
};

logOutMessage(message);
