// ============================================
// JAVASCRIPT EXECUTION CONTEXT & CALL STACK
// (INTERMEDIATE → ADVANCE)
// ============================================


// ============================================
// 1) GLOBAL EXECUTION CONTEXT
// ============================================

// sabse pehle:
// Global Execution Context banta hai


// browser me:

// global object
// = window


console.log(window);



// ============================================
// 2) MEMORY PHASE
// ============================================

// pehle phase me:

// variables = undefined

// functions = complete store


console.log(a);

var a = 10;


// internally:

// a = undefined

// phir:

// a = 10


// ============================================
// 3) FUNCTION MEMORY PHASE
// ============================================

function greet() {

  console.log("Hello");

}

greet();


// function
// memory me pura store hota hai


// ============================================
// 4) EXECUTION PHASE
// ============================================

// second phase me:

// code line by line run hota hai


let username = "Qasim";

console.log(username);


// ============================================
// 5) NEW EXECUTION CONTEXT
// ============================================

// har function call par
// new execution context banta hai


function add(a, b) {

  let total = a + b;

  return total;

}

console.log(add(2, 3));


// add()
// ka apna execution context bana



// ============================================
// 6) CALL STACK FLOW
// ============================================

function one() {

  console.log("one");

  two();

}

function two() {

  console.log("two");

  three();

}

function three() {

  console.log("three");

}

one();


// stack flow:

// Global()
// one()
// two()
// three()


// ============================================
// 7) STACK REMOVE FLOW
// ============================================

// function finish hone par
// stack se remove hota hai


// remove order:

// three()
// two()
// one()


// ============================================
// 8) STACK OVERFLOW
// ============================================

// bohat zyada function calls
// = stack overflow


function test() {

  test();

}

// test(); ❌


// error:

// Maximum call stack size exceeded


// ============================================
// 9) SYNCHRONOUS EXECUTION
// ============================================

// JS
// line by line code run karta hai


console.log("1");

console.log("2");

console.log("3");


// output:

// 1
// 2
// 3


// ============================================
// 10) ASYNCHRONOUS BEHAVIOR
// ============================================

// setTimeout
// browser handle karta hai


console.log("Start");


setTimeout(() => {

  console.log("Inside Timeout");

}, 2000);

console.log("End");


// output:

// Start
// End
// Inside Timeout


// ============================================
// 11) EVENT LOOP BASIC IDEA
// ============================================

// async code
// direct call stack me nahi aata


// browser APIs
// async task handle karti hain


// phir:

// callback queue

// phir:

// event loop

// phir:

// call stack


// ============================================
// FINAL SUMMARY
// ============================================

// Global Execution Context
// = sabse pehla context


// Memory Phase
// = variables undefined


// Execution Phase
// = code run


// Call Stack
// = function tracking


// Stack Overflow
// = bohat zyada calls


// Event Loop
// = async code handling