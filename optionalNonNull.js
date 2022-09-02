"use strict";
/* OPTIONAL AND NON NULL */
const add = (a, b) => (b ? a + b : a);
console.log(add(1, 2));
console.log(add(3));
const addNonNull = (a, b) => a + b;
console.log(addNonNull(3, 4));
console.log(addNonNull(3));
