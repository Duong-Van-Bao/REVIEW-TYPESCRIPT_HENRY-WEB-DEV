"use strict";
/* EXPLICIT TYPES */
let myName;
let age;
let isAuthenticated;
myName = "henry";
// myName = 30
// age = 'henry'
age = 30;
// isAuthenticated = 50
isAuthenticated = false;
// array
let students = ["name", "hung"];
// students.push(5)
students.push("lan");
// union
let mixed;
mixed = ["henry", 5, true];
mixed.push(6);
mixed.push("lan");
mixed.push(false);
let id;
id = "123";
id = 123;
let hobby;
hobby = "book";
// hobby = 'cooking'
// objects
let person;
person = {
    name: "henry",
    age: 30,
};
person = [];
let student;
student = {
    name: "henry",
    age: 50,
    isGood: false,
};
