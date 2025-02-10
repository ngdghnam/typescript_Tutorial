// Interface
// Định nghĩa 1 interface là định nghĩa 1 cấu trúc dữ liệu
interface iHuman {
  readonly firstName: string; //Immutable
  lastName: string;
  address?: string; //Optional
}

type Human41 = {
  firstName: string;
  lastName: string;
};

function getFullName(person: iHuman) {
  return `${person.firstName} ${person.lastName}`;
}

function getFullName2(person: Human41) {
  return `${person.firstName} ${person.lastName}`;
}
