/*
========================================
        DATA TYPES SUMMARY
========================================
*/

// Data Type = type of data (what kind of value)


// 1) PRIMITIVE DATA TYPES
// (single value, stored directly)

let name = "Qasim";        // string (text inside "" or '')
let age = 25;             // number (integer/decimal)
let isLoggedIn = true;    // boolean (true/false)
let state = null;         // null (intentional empty value)
let city;                 // undefined (no value assigned)
let big = 123456789n;     // bigint (very large number, end with n)
let id = Symbol("id");    // symbol (unique value)

console.log(typeof name); // string
console.log(typeof age);  // number
console.log(typeof null); // object (JS bug)


// 2) NON-PRIMITIVE (REFERENCE)
// (multiple values, stored by reference)


// 🔹 OBJECT
// key-value pairs, inside { }
let person = {
  name: "Qasim",
  age: 25
}; // object

// 🔹 ARRAY
// list of values, inside [ ]
let numbers = [1, 2, 3]; // array

// 🔹 FUNCTION
// block of code, runs when called
function greet() {
  console.log("Hello");
} // function


console.log(typeof person);   // object
console.log(typeof numbers);  // object
console.log(typeof greet);    // function



/*
==================================================================
            MEMORY  (STACK (Primitive)-HEAP (Non-Primitive))
==================================================================
*/

// Memory = where variables are stored


// 🔹 STACK (Primitive)
// copy of value, no effect on original

let a = 10;
let b = a;   // copy

b = 20;

console.log(a); // 10 (no change)
console.log(b); // 20


// 🔹 HEAP (Non-Primitive)
// reference (same address), change affects both

let obj1 = {
  name: "Qasim"
};

let obj2 = obj1; // reference

obj2.name = "Ali";

console.log(obj1.name); // Ali
console.log(obj2.name); // Ali


// 🔹 SUMMARY
// Stack → copy
// Heap  → reference