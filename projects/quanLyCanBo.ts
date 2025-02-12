class CanBo {
  private _age: number;
  private _firstName: string;
  private _lastName: string;
  private _address: string;
  private _gender: string;

  constructor(
    _age: number,
    _firstName: string,
    _lastName: string,
    _address: string,
    _gender: string
  ) {
    this._age = _age;
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._address = _address;
    this._gender = _gender;
  }
  // Getter
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get showFullInfo() {
    let fullInfo = `${this.fullName} - ${this._age} - ${this._gender} - ${this._address}`;
    return fullInfo;
  }

  get age() {
    return this._age;
  }

  // Setters
  set age(newAge: number) {
    if (newAge > 80 || newAge < 18) {
      throw Error("Invalid age");
    }
    this._age = newAge;
  }

  set gender(newGender: string) {
    this._gender = newGender;
  }

  set address(newAddress: string) {
    this._address = newAddress;
  }

  set lastName(newLastName: string) {
    this._lastName = newLastName;
  }

  set firstName(newFirstName: string) {
    this._firstName = newFirstName;
  }
}

// Cong Nhan
class CongNhan extends CanBo {
  private _level: number;

  constructor(
    _age: number,
    _firstName: string,
    _lastName: string,
    _address: string,
    _gender: string,
    _level: number
  ) {
    super(_age, _firstName, _lastName, _address, _gender);
    this._level = _level;
  }

  get showFullInfo() {
    return `${super.showFullInfo} - ${this._level}`;
  }

  set level(newLevel: number) {
    if (newLevel < 1 || newLevel > 10) {
      throw Error("Invalid Level");
    }
    this._level = newLevel;
  }
}

// Ky Sy
class KySu extends CanBo {
  private major: string;

  constructor(
    _age: number,
    _firstName: string,
    _lastName: string,
    _address: string,
    _gender: string,
    major: string
  ) {
    super(_age, _firstName, _lastName, _address, _gender);
    this.major = major;
  }

  get showFullInfo() {
    return `${super.showFullInfo} - ${this.major}`;
  }
}

// Nhan Vien
class NhanVien extends CanBo {
  private _job: string;

  constructor(
    _age: number,
    _firstName: string,
    _lastName: string,
    _address: string,
    _gender: string,
    _job: string
  ) {
    super(_age, _firstName, _lastName, _address, _gender);
    this._job = _job;
  }

  get showFullInfo() {
    return `${super.showFullInfo} - ${this._job}`;
  }
}

class QLCB {
  private danhSachCanBo: CanBo[];

  constructor() {
    this.danhSachCanBo = [];
  }

  // Thêm mới cán bộ
  themMoiCanBo(canBo: CanBo) {
    this.danhSachCanBo.push(canBo);
    console.log(`Đã thêm mới cán bộ: ${canBo.fullName}`);
  }

  // Tìm kiếm cán bộ theo họ tên
  timKiemTheoTen(ten: string) {
    const ketQua = this.danhSachCanBo.filter((cb) =>
      cb.fullName.toLowerCase().includes(ten.toLowerCase())
    );

    if (ketQua.length > 0) {
      console.log("Kết quả tìm kiếm:");
      ketQua.forEach((cb) => console.log(cb.showFullInfo));
    } else {
      console.log("Không tìm thấy cán bộ nào.");
    }
  }

  // Hiển thị danh sách cán bộ
  hienThiDanhSach() {
    if (this.danhSachCanBo.length === 0) {
      console.log("Danh sách cán bộ trống.");
      return;
    }
    console.log("Danh sách cán bộ:");
    this.danhSachCanBo.forEach((cb) => console.log(cb.showFullInfo));
  }
}

let congNhan = new CongNhan(
  20,
  "Hoai",
  "Hoai",
  "81 Street 8, Ward 13, District 6",
  "Male",
  1
);

let kySu = new KySu(
  20,
  "Hai",
  "Hoai",
  "81 Street 8, Ward 13, District 6",
  "Male",
  "Software Engineer"
);

let nhanVien = new NhanVien(
  20,
  "Nhan",
  "Hoai",
  "81 Street 8, Ward 13, District 6",
  "Male",
  "Solution Architect"
);

// console.log(">>> Công Nhân:", congNhan);
// console.log(">>> Kỹ sư:", kySu);
// console.log(">>> Nhân viên:", nhanVien);

// const qlcb = new QLCB();

// Thêm cán bộ vào danh sách
// qlcb.themMoiCanBo(congNhan);
// qlcb.themMoiCanBo(kySu);
// qlcb.themMoiCanBo(nhanVien);

// Hiển thị danh sách cán bộ
// qlcb.hienThiDanhSach();

// Tìm kiếm cán bộ theo tên
// qlcb.timKiemTheoTen("Nam");

let kySu2 = new KySu(
  20,
  "Luong",
  "Nguyen",
  "Ward 113 District Thu Duc",
  "Male",
  "Data engineer"
);

console.log(">>> Age Ky Su 2 before changed: ", kySu2.age);

let newKySu2Age = 35;
kySu2.age = newKySu2Age;

console.log(">>> Ky Su 2: ", kySu2.fullName);
console.log(">>> Ky Su 2: ", kySu2.showFullInfo);
console.log(">>> Age Ky Su 2 after changed: ", kySu2.age);

export default {
  CanBo,
  CongNhan,
  KySu,
  NhanVien,
  QLCB,
};
