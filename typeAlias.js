"use strict";
const studentDetails = (id, studentName) => {
    console.log(`Student ${studentName} has is: ${id}`);
};
// studentDetails(123, "henry");
// studentDetails("456", "son");
const greet = (user) => console.log(`${user.name} with id ${user.id} says hello`);
greet({ name: "henry", id: "456" });
