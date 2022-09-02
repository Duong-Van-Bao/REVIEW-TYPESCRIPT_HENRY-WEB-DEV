"use strict";
const henry = {
    name: "henry",
    age: 30,
    speak: (text) => {
        console.log(text);
    },
    spend(amt) {
        return amt;
    },
};
// console.log(henry);
const helloPerson = (onePerson) => console.log(`hello ${onePerson.name}`);
helloPerson(henry);
