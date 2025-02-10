// Bai 32: Function overloading
// Overloading ko the dinh nghia voi arrow function
// Các hàm có tên giống nhau được gọi là overloading
// Bắt buộc phải định nghĩa hàm có tham số giống nhau
// Bắt buộc có 1 hàm return, hàm tổng
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any): any {
  return a + b;
}

// console.log(
//   ">>> Check addNew:",
//   addNew(6, 9),
//   addNew("De Gray Hnam", "Data Engineer")
// );

class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = [];
      for (let start = this.current; start < target; start++) {
        values.push(start);
      }
      return values;
    }
    return ++this.current;
  }
}

let counter111 = new Counter();

console.log(counter111.count());
console.log(counter111.count(20));
