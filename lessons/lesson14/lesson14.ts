// Enum: enumerated - liệt kê one by one 1 nhóm các giá trị hằng số (constant)
enum API_STATUS {
  PENDING = "PENDING",
  FULLFILLED = "FULLFILLED",
  REJECTED = "REJECTED", //PROMISE
}

// Nếu ko định nghĩa value thì sẽ log ra vị trí index
// Ngược lại thì là value
let a = API_STATUS.PENDING;
let a1 = API_STATUS.FULLFILLED;
console.log(">>> Check enums:", a, a1);

//Neu enums dung o FE: Đồng bộ hóa cú pháp
// 'PENDING' => API_STATUS.PENDING
