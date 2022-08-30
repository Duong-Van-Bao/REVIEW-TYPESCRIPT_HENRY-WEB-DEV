/*FUNCTION SIGNATURE*/
/*
 chữ ký của function
*/
// let greet: Function;
var printStudent;
printStudent = function (myStudent) {
    console.log("".concat(myStudent.name, " is ").concat(myStudent.age, " years old"));
};
printStudent({ name: "henry", age: 30 });
var nam = {
    name: "name",
    age: 25
};
printStudent(nam);
