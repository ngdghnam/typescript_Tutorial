// never
// Sử dụng khi làm việc với các thư viện
// Hiếm khi sử dụng với các TH bình thường
// Tương tự với void, thường dùng cho các function
// Thường dùng để trình compiler đọc
// 1 function handle error
function handleException(errorMessage: string): never {
  throw Error(errorMessage);
}

handleException("Can not run error");
// 1 function chạy ko có hồi kết

function runInfinity(): never {
  while (true) {
    console.log("running");
  }
}

// ==> Đang ko tường minh giữa việc dùng void hay dùng never
// Mục đích của never để báo compiler rằng ko nên trả ra kết quả
// TH nữa là đôi khi mới thực thi function thôi lại gán vào 1 biến thì để ktra
//

function handleException22(errorMessage: string): never {
  throw Error(errorMessage);
}

function runInfinity2(): void {
  // while (true) {
  //     // console.log("running...")
  // }
}

// handleException("just a test error");

let a = handleException("just a test error");
console.log(">> check a= ", a);
