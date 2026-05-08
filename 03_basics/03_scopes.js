// ============================================
// SCOPE IN JAVASCRIPT - PART 1
// (BEGINNER FOUNDATION)
// ============================================


// ============================================
// 1) SCOPE KYA HAI?
// ============================================

// Scope
// = variable ki limit


// ============================================
// 2) GLOBAL SCOPE
// ============================================

// function ke bahar bana variable
// global scope hota hai


let username = "Qasim";

function greet() {

  console.log(username);

}

greet();

console.log(username);

// output:

// Qasim
// Qasim


// ============================================
// 3) LOCAL / FUNCTION SCOPE
// ============================================

// function ke andar bana variable
// sirf function ke andar use hota hai


function test() {

  let age = 25;

  console.log(age);

}

test();

// console.log(age); ❌


// ============================================
// 4) BLOCK SCOPE
// ============================================

// { } ke andar bana variable
// sirf block ke andar use hota hai


if (true) {

  let city = "Lahore";

  console.log(city);

}


// console.log(city); ❌

// +++++++++++++++++++++++++++PART 2++++++++++++++++++++++++++++++++++++++++++++++

// ============================================
// SCOPE IN JAVASCRIPT- PART 2
// (INTERMEDIATE → ADVANCE)
// ============================================


// ============================================
// 1) var
// ============================================

// var
// = function scope

if (true) {

  var a = 10;

}

console.log(a);

// output:

// 10

// var
// block scope follow nahi karta


// ============================================
// 2) let
// ============================================

// let
// = block scope

if (true) {

  let b = 20;

}

// console.log(b); ❌


// ============================================
// 3) const
// ============================================

// const
// = block scope

if (true) {

  const c = 30;

}

// console.log(c); ❌


// ============================================
// 4) var vs let vs const
// ============================================

// var
// = function scope

// let
// = block scope

// const
// = block scope


// ============================================
// 5) NESTED SCOPE
// ============================================

function outer() {

  let username = "Qasim";

  function inner() {

    console.log(username);

  }

  inner();

}

outer();

// inner function
// outer variable use kar sakta hai


// ============================================
// 6) LEXICAL SCOPE
// ============================================

// inner function
// outer variable use kar sakta hai

function parent() {

  let money = 5000;

  function child() {

    console.log(money);

  }

  child();

}

parent();



// ============================================
// 7) SCOPE CHAIN
// ============================================

// JS variable ko
// nearest scope me dhondta hai

let country = "Pakistan";

function testScope() {

  console.log(country);

}

testScope();


// ============================================
// FINAL SUMMARY
// ============================================

// Scope
// = variable ki limit


// global scope
// = har jagah use


// local scope
// = sirf function ke andar


// block scope
// = sirf { } ke andar


// var
// = function scope


// let,const
// = block scope


// lexical scope
// = inner function outer variable use kare


// scope chain
// = JS variable dhondta hai