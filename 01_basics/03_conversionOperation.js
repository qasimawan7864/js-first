/*
========================================
       CONVERSION OPERATIONS 
========================================
*/
// Conversion = change one data type into another

// 1) STRING → NUMBER
// Reason: user input is usually string, so we convert to number
let score = "33";

let valueInNumber = Number(score);
console.log(valueInNumber);        // 33
console.log(typeof valueInNumber); // number


// If string is not a valid number
let score2 = "33abc";

let value2 = Number(score2);
console.log(value2); // NaN (Not a Number)


// 2) NUMBER → STRING
// Reason: used for display or text operations
let num = 123;

let valueInString = String(num);
console.log(valueInString);        // "123"
console.log(typeof valueInString); // string


// 3) NUMBER → BOOLEAN
// Reason: used in conditions (true/false)
let isLoggedIn = 1;

let booleanValue = Boolean(isLoggedIn);
console.log(booleanValue); // true

// 0 => false
// 1 => true


// 4) STRING → BOOLEAN
let name = "Qasim";

let boolName = Boolean(name);
console.log(boolName); // true

// "" (empty string) => false
// "Qasim" => true



/*
========================================
           OPERATIONS 
========================================
*/

// Operation = perform action on values to get result


// 1) ARITHMETIC OPERATIONS (Math)
let a = 10;
let b = 5;

console.log(a + b); // 15  (add)
console.log(a - b); // 5   (subtract)
console.log(a * b); // 50  (multiply)
console.log(a / b); // 2   (divide)
console.log(a % b); // 0   (remainder)


// 2) ASSIGNMENT OPERATIONS
let x = 10;

x += 5; // x = x + 5 → 15
x -= 2; // x = x - 2 → 13


// 3) COMPARISON OPERATIONS (true/false)
console.log(10 == "10");   // true  (value check)
console.log(10 === "10");  // false (value + type)
console.log(10 > 5);       // true
console.log(10 < 5);       // false


// 4) LOGICAL OPERATIONS
console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)


//  IMPORTANT (String + Number)
console.log("1" + 2); // "12" (string join)
console.log(1 + "2"); // "12"