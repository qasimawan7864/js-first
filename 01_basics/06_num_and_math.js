// ============================================
// Numbers (Beginner Friendly Notes + Output)
// ============================================

// Number = numeric value (simple numbers)
// (integer + decimal dono number hote hain)

let score = 100;     // integer
let price = 99.99;  // decimal

console.log("Score:", score);   // 100
console.log("Price:", price);   // 99.99
console.log("Type:", typeof score); // number



// ============================================
// Number Object (Important Note)
// ============================================

// JavaScript me number 2 tarah ke hote hain:
// 1) simple number (recommended)
// 2) object number (rarely used ❌)

let balance = new Number(100);

console.log("Balance:", balance);  
console.log("Type:", typeof balance); // object

// Note: real projects me simple number hi use karein



// ============================================
// toString() => number ko string me convert karta hai
// ============================================

let num1 = 200;

console.log("Before:", num1);              // 200
console.log("After:", num1.toString());   // "200"
console.log("Type:", typeof num1.toString()); // string



// ============================================
// toFixed(n) => decimal fix karta hai + rounding
// ============================================

let num2 = 123.456;

console.log("Original:", num2);        // 123.456
console.log("toFixed(2):", num2.toFixed(2)); // 123.46

// Note: n = kitne decimal chahiye



// ============================================
// toPrecision(n) => total digits control karta hai
// ============================================

let num3 = 123.8966;

console.log("Original:", num3);  
console.log("toPrecision(4):", num3.toPrecision(4)); // 123.9

// Note: total digits count hoti hain (decimal + integer)



// ============================================
// toLocaleString() => number ko readable banata hai
// ============================================

let num4 = 1000000;

console.log("US Format:", num4.toLocaleString());        // 1,000,000
console.log("Pakistan Format:", num4.toLocaleString('en-PK')); // 10,00,000

// Use: jab large numbers ko asani se read karna ho

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ============================================
// Math Object (Built-in)
// ============================================

// Math = JavaScript ka built-in object for calculations
// ref: :contentReference[oaicite:0]{index=0}



// ============================================
// Math.abs() => negative ko positive banata hai
// ============================================

console.log("abs(-10):", Math.abs(-10)); // 10



// ============================================
// Math.round() => nearest value deta hai
// ============================================

console.log("round(4.6):", Math.round(4.6)); // 5
console.log("round(4.4):", Math.round(4.4)); // 4

// Rule:
// 0.5 ya zyada → upar
// kam → neeche



// ============================================
// Math.ceil() => hamesha upar round karta hai
// ============================================

console.log("ceil(4.1):", Math.ceil(4.1)); // 5



// ============================================
// Math.floor() => hamesha neeche round karta hai
// ============================================

console.log("floor(4.9):", Math.floor(4.9)); // 4



// ============================================
// Math.min() => sab se chhota number deta hai
// ============================================

console.log("min:", Math.min(2, 5, 1, 9)); // 1



// ============================================
// Math.max() => sab se bara number deta hai
// ============================================

console.log("max:", Math.max(2, 5, 1, 9)); // 9



// ============================================
// Math.random() => random number (0 se 1 ke beech)
// ============================================

console.log("random:", Math.random());



// ============================================
// Random Number in Range (IMPORTANT ⭐)
// ============================================

// Formula:
// Math.floor(Math.random() * (max - min + 1)) + min

let min = 10;
let max = 20;

let randomNumber =
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log("Random (10-20):", randomNumber);

// Use:
// OTP, dice game, random values



// ============================================
// FINAL QUICK REVISION
// ============================================

// toString()     => string me convert
// toFixed()      => decimal fix
// toPrecision()  => total digits
// toLocaleString() => readable number

// Math.abs()     => positive
// Math.round()   => nearest
// Math.ceil()    => up
// Math.floor()   => down
// Math.min()     => smallest
// Math.max()     => largest
// Math.random()  => random