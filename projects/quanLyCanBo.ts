class CanBo {
  public _age: number;
  public _firstName: string;
  public _lastName: string;
  public _address: string;
  public _gender: string;

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
    let fullInfo = `${this.fullName} - ${this._age} - ${this._gender}`;
    return fullInfo;
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
}

// Cong Nhan
class CongNhan extends CanBo {
  public _level: number;

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
}

// Ky Sy
class KySu extends CanBo {
  public major: string;

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
}

// Nhan Vien
class NhanVien extends CanBo {
  public _job: string;

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
  "Nam",
  "Hoai",
  "81 Street 8, Ward 13, District 6",
  "Male",
  1
);

let kySu = new KySu(
  20,
  "Nam",
  "Hoai",
  "81 Street 8, Ward 13, District 6",
  "Male",
  "Software Engineer"
);

let nhanVien = new NhanVien(
  20,
  "Nam",
  "Hoai",
  "81 Street 8, Ward 13, District 6",
  "Male",
  "Solution Architect"
);

console.log(">>> Công Nhân:", congNhan);
console.log(">>> Kỹ sư:", kySu);
console.log(">>> Nhân viên:", nhanVien);

const qlcb = new QLCB();

// Thêm cán bộ vào danh sách
qlcb.themMoiCanBo(congNhan);
qlcb.themMoiCanBo(kySu);
qlcb.themMoiCanBo(nhanVien);

// Hiển thị danh sách cán bộ
qlcb.hienThiDanhSach();

// Tìm kiếm cán bộ theo tên
qlcb.timKiemTheoTen("Nam");
