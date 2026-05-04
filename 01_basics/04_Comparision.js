/*
========================================
        COMPARISON 
========================================
*/

// Comparison = compare values → result (true/false)


// 1) BASIC COMPARISON
console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(10 >= 10); // true
console.log(10 <= 5);  // false


// 2) LOOSE EQUALITY (==)
// checks value only (type ignore)
console.log(10 == "10"); // true


// 3) STRICT EQUALITY (===)
// checks value + type
console.log(10 === "10"); // false


// 4) NOT EQUAL
console.log(10 != "10");  // false
console.log(10 !== "10"); // true


// 5) CONFUSING CASES (IMPORTANT)
console.log(null == 0);   // false
console.log(null > 0);    // false
console.log(null >= 0);   // true 😨

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false


// BEST PRACTICE
// always use === (strict)