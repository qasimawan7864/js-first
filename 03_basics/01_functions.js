// ============================================
// FUNCTIONS IN JAVASCRIPT - PART 1
// (BEGINNER FOUNDATION)
// ============================================


// ============================================
// 1) FUNCTION KYA HAI?
// ============================================

// Function = reusable code

// ek baar code likho
// baar baar use karo


function greet() {

  console.log("Hello");

}

greet();
greet();

// same function
// multiple baar use ho raha hai



// ============================================
// 2) FUNCTION KYUN USE KARTE HAIN?
// ============================================

// code repeat hone se bachane ke liye


// bina function:

console.log("Hello Qasim");
console.log("Hello Ali");
console.log("Hello Ahmed");


// function ke sath:

function sayHello(name) {

  console.log("Hello " + name);

}

sayHello("Qasim");
sayHello("Ali");
sayHello("Ahmed");

// code clean aur reusable ho gaya



// ============================================
// 3) FUNCTION SYNTAX
// ============================================

// function
// = JS keyword

// sayHi
// = function ka naam

// ( )
// = parameters ki jagah

// { }
// = function body


function sayHi() {

  console.log("Hi");

}



// ============================================
// 4) FUNCTION CALL
// ============================================

// function chalane ko
// function call kehte hain

sayHi();



// ============================================
// 5) PARAMETERS
// ============================================

// parameter
// = function ke andar variable

function userName(name) {

  console.log("Hello " + name);

}


// name
// = parameter


// ============================================
// 6) ARGUMENTS
// ============================================

// argument
// = actual value

userName("Qasim");
userName("Ali");

// "Qasim"
// = argument

// "Ali"
// = argument



// ============================================
// 7) RETURN
// ============================================

// return
// = value wapas bhejna

function add(a, b) {

  return a + b;

}

let result = add(2, 3);

console.log(result);


// output:

// 5


// ============================================
// 8) console.log vs RETURN
// ============================================

// console.log
// = sirf screen par dikhata hai

// return
// = value wapas deta hai

function test1() {

  console.log("Hello");

}

let x = test1();

console.log(x);

// output:

// Hello
// undefined

function test2() {

  return "Hello";

}

let y = test2();

console.log(y);

// output:

// Hello



// ============================================
// FINAL SUMMARY
// ============================================

// Function
// = reusable code


// parameter
// = function variable


// argument
// = actual value


// return
// = value wapas bhejna