/*
========================================
 CONVERSION OPERATIONS 
========================================
*/

// 1) STRING → NUMBER
// وجہ: user input اکثر string ہوتا ہے، اسے number میں بدلنا پڑتا ہے
let score = "33";

let valueInNumber = Number(score);
console.log(valueInNumber);      // 33
console.log(typeof valueInNumber); // number


//  اگر string number نہ ہو
let score2 = "33abc";

let value2 = Number(score2);
console.log(value2); // NaN (Not a Number)


// 2) NUMBER → STRING
// وجہ: display یا concatenation کے لیے string چاہیے ہوتی ہے
let num = 123;

let valueInString = String(num);
console.log(valueInString); // "123"
console.log(typeof valueInString); // string


// 3) NUMBER → BOOLEAN
// وجہ: conditions میں use ہوتا ہے
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
