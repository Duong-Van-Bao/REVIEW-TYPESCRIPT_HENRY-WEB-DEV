// GENERICS

import { Employee } from "./class";

type strArr = Array<string>;
type numArr = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);
// console.log(l1);
console.log(["a", "b"]);

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]);
const l4 = lastT(["a", "b"]);
const l5 = lastT<string>(["d", "e"]);

const makeArr = (x: number) => [x];

const m = makeArr(5);
// console.log(m);
// const m2 = makeArr('a');

const makeArrT = <T>(x: T) => [x];
const m3 = makeArrT("b");

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m4 = makeArrXY(5, 6);
const m5 = makeArrXY("a", "b");
const m6 = makeArrXY("a", 3);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m7 = makeTuple("x", 5);
const m8 = makeTuple("a", "b");
const m9 = makeTuple<string, number>("g", 23);
const m10 = makeTuple<string | null, number>("a", 3);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m11 = makeTupleWithDefault<string | null>("a", 3);

//GENERICS EXTENDS
const makeFullName = (obj) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const makeFullNameConstraint = (obj: {
  firstName: string;
  lastName: string;
}) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n1 = makeFullNameConstraint({ firstName: "henry", lastName: "web dev" });
// const n1 = makeFullNameConstraint({ firstName: "henry", lastName: "web dev", age: 30 });
const makeFullNameConstraintGenerics = <
  T extends { firstName: string; lastName: string }
>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n3 = makeFullNameConstraintGenerics({
  firstName: "henry",
  lastName: "web dev",
  age: 30,
  gender: "male",
});

const addNewEmployee = (Employee: object) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...Employee,
    uid,
  };
};

const empOne = addNewEmployee({ name: "henry", age: 30 });

console.log(empOne);
// console.log(empOne.name);

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empTwo = addNewEmployeeT({ name: "nam", age: 25, male: true });
console.log(empTwo);
console.log(empTwo.name);

const addNewEmployeeTWithConstraint = <T extends { name: string }>(
  employee: T
) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uid,
  };
};

const empThree = addNewEmployeeTWithConstraint({ name: "nam", age: 30 });

// GENERICS IN INTERFACE

interface Resource<T> {
  uid: number;
  name: string;
  data: T;
}

const resourceOne: Resource<string> = {
  uid: 1,
  name: "Person",
  data: "hello",
};

type NumberResource = Resource<number[]>;

const numbersResourceaasd: NumberResource = {
  uid: 2,
  name: "Numbers",
  data: [1, 2, 3],
};

const resourceTwo: Resource<object> = {
  uid: 1,
  name: "Person",
  data: { name: "Avenger" },
};

const resourceThree: Resource<string[]> = {
  uid: 1,
  name: "Person",
  data: ["css"],
};
