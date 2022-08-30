/* EXPLICIT TYPES */
let myName: string;
let age: number;
let isAuthenticated: boolean;

myName = "henry";
// myName = 30

// age = 'henry'
age = 30;

// isAuthenticated = 50
isAuthenticated = false;

// array
let students: string[] = ["name", "hung"];

// students.push(5)
students.push("lan");

// union
let mixed: (string | number | boolean)[];

mixed = ["henry", 5, true];
mixed.push(6);
mixed.push("lan");
mixed.push(false);

let id: string | number;
id = "123";
id = 123;

let hobby: "book" | "music";
hobby = "book";
// hobby = 'cooking'

// objects
let person: object;
person = {
  name: "henry",
  age: 30,
};

person = [];

let student: {
  name: string;
  age: number;
  isGood: boolean;
};

student = {
  name: "henry",
  age: 50,
  isGood: false,
};
