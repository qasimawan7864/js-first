// ============================================
// JAVASCRIPT EXECUTION CONTEXT & CALL STACK
// (BEGINNER FOUNDATION)
// ============================================


// ============================================
// 1) JAVASCRIPT CODE KAISE CHALTA HAI?
// ============================================

// JavaScript code ko
// line by line run karta hai

// lekin internally:
// JS kuch steps follow karta hai


// ============================================
// 2) EXECUTION CONTEXT
// ============================================

// Execution Context
// = environment jahan JS code run hota hai


// simple words:

// JS ka working area


// ============================================
// 3) GLOBAL EXECUTION CONTEXT
// ============================================

// sabse pehle:
// Global Execution Context banta hai


// browser me:

// global object
// = window object

console.log("Hello");

// JS internally:

// pehle execution context banata hai
// phir code run karta hai


// ============================================
// 4) EXECUTION CONTEXT KE 2 PHASES
// ============================================

// 1) Memory Creation Phase

// 2) Execution Phase



// ============================================
// 5) MEMORY CREATION PHASE
// ============================================

// is phase me:

// variables ke liye memory reserve hoti hai

// functions memory me store hote hain


let username = "Qasim";


function greet() {

  console.log("Hello");

}


// internally memory phase:

// username = undefined

// greet = function



// ============================================
// 6) EXECUTION PHASE
// ============================================

// is phase me:

// actual code run hota hai

let age = 25;

console.log(age);

// output:

// 25

// pehle:

// age = undefined

// phir:

// age = 25


// ============================================
// 7) FUNCTION EXECUTION CONTEXT
// ============================================

// jab function call hota hai
// to new execution context banta hai

function add(a, b) {

  return a + b;

}

console.log(add(2, 3));

// function ke liye:

// new memory phase

// new execution phase


// ============================================
// 8) CALL STACK
// ============================================

// Call Stack
// = JS functions ko track karta hai


// konsa function chal raha hai

// konsa finish hua


// ============================================
// 9) CALL STACK EXAMPLE
// ============================================

function one() {

  two();

}

function two() {

  three();

}

function three() {

  console.log("Hello");

}

one();

// stack flow:

// one()
// two()
// three()


// phir reverse me remove:

// three()
// two()
// one()


// ============================================
// 10) STACK RULE
// ============================================

// Last In First Out

// yani:

// jo last me aaya
// pehle bahar jayega

// LIFO


// ============================================
// 11) REAL LIFE EXAMPLE
// ============================================

// books ka stack

// jo book last me rakho
// wahi pehle niklegi


// ============================================
// FINAL SUMMARY
// ============================================

// Execution Context
// = JS ka working area


// Memory Phase
// = memory allocate hoti hai


// Execution Phase
// = code run hota hai


// Function Execution Context
// = function ka apna context


// Call Stack
// = function tracking system


// LIFO
// = Last In First Out
