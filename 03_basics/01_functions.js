// ============================================
// FUNCTIONS IN JAVASCRIPT - PART 1
// (BASIC FOUNDATION)
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

// function = JS keyword

// greetUser = function ka naam

// ( ) = parameters ki jagah

// { } = function body


function greetUser() {

  console.log("Welcome");

}


// ============================================
// 4) FUNCTION CALL
// ============================================

// function chalane ko
// function call kehte hain


greetUser();


// function call:
// greetUser();



// ============================================
// 5) PARAMETERS
// ============================================

// parameter = function ke andar variable


function userName(name) {

  console.log("Hello " + name);

}


// yahan:
// name = parameter



// ============================================
// 6) ARGUMENTS
// ============================================

// argument = actual value


userName("Qasim");
userName("Ali");


// "Qasim"
// = argument

// "Ali"
// = argument



// ============================================
// 7) PARAMETERS vs ARGUMENTS
// ============================================

function add(a, b) {

  console.log(a + b);

}


add(2, 3);


// a,b
// = parameters

// 2,3
// = arguments



// ============================================
// 8) RETURN
// ============================================

// return = value wapas bhejna


function sum(num1, num2) {

  return num1 + num2;

}


let result = sum(5, 3);

console.log(result);


// output:
// 8



// ============================================
// 9) console.log vs RETURN
// ============================================

// console.log
// = sirf screen par dikhata hai

// return
// = value wapas deta hai



// console.log example

function test1() {

  console.log("Hello");

}


let x = test1();

console.log(x);


// output:

// Hello
// undefined


// kyun?

// kyun ke:
// function ne kuch return nahi kiya


// return example

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


// function call
// = function chalana


// parameter
// = function ka variable


// argument
// = actual value


// return
// = value wapas bhejna


// console.log
// = screen par dikhana