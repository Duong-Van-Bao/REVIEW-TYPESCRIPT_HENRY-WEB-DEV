"use strict";
/*FUNCTION SIGNATURE*/
/*
 chữ ký của function
*/
// let greet: Function;
let printStudent;
printStudent = (myStudent) => {
    console.log(`${myStudent.name} is ${myStudent.age} years old`);
};
printStudent({ name: "henry", age: 30 });
const nam = {
    name: "name",
    age: 25,
};
printStudent(nam);
