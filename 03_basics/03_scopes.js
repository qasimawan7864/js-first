// ============================================
// SCOPE IN JAVASCRIPT - PART 1
// (BASIC FOUNDATION)
// ============================================


// ============================================
// 1) SCOPE KYA HAI?
// ============================================

// Scope = variable kahan tak accessible hai

// simple words:

// variable ko
// kahan use kar sakte hain
// aur kahan nahi



// ============================================
// 2) GLOBAL SCOPE
// ============================================

// global scope
// = har jagah accessible


let username = "Qasim";


function greet() {

  console.log(username);

}


greet();

console.log(username);


// output:

// Qasim
// Qasim



// kyun?

// kyun ke:
// username function ke bahar bana hai

// is liye:
// har jagah accessible hai



// ============================================
// 3) LOCAL / FUNCTION SCOPE
// ============================================

// function ke andar bana variable
// sirf function ke andar accessible hota hai


function test() {

  let age = 25;

  console.log(age);

}

test();

// output:
// 25



// function ke bahar:

// console.log(age); ❌ error


// kyun?

// kyun ke:
// age sirf function ke andar tha



// ============================================
// 4) BLOCK SCOPE
// ============================================

// { } ke andar bana variable
// sirf us block ke andar accessible hota hai


if (true) {

  let city = "Lahore";

  console.log(city);

}


// output:
// Lahore



// block ke bahar:

// console.log(city); ❌ error


// kyun?

// kyun ke:
// city block ke andar tha



// ============================================
// 5) var
// ============================================

// var block scope follow nahi karta


if (true) {

  var a = 10;

}


console.log(a);

// output:
// 10


// kyun?

// kyun ke:
// var block ke bahar bhi accessible hota hai



// ============================================
// 6) let
// ============================================

// let block scope follow karta hai


if (true) {

  let b = 20;

}

// console.log(b); ❌ error


// kyun?

// kyun ke:
// let sirf block ke andar accessible hai



// ============================================
// 7) const
// ============================================

// const bhi block scope follow karta hai


if (true) {

  const c = 30;

}

// console.log(c); ❌ error



// ============================================
// 8) var vs let vs const
// ============================================

// var
// = function scope

// let
// = block scope

// const
// = block scope



// ============================================
// 9) BEST PRACTICE
// ============================================

// const use karo
// agar value change nahi karni

// let use karo
// agar value change karni hai

// var avoid karo



// ============================================
// FINAL SUMMARY
// ============================================

// Scope
// = variable kahan accessible hai


// global scope
// = har jagah accessible


// local scope
// = sirf function ke andar


// block scope
// = sirf { } ke andar


// var
// = function scope


// let,const
// = block scope