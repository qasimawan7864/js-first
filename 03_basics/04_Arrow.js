// ============================================
// ARROW FUNCTIONS IN JAVASCRIPT
// (BASIC NOTES)
// ============================================


// ============================================
// 1) ARROW FUNCTION KYA HAI?
// ============================================

// Arrow Function
// = function likhne ka short tareeqa

// arrow:

// =>


// ============================================
// 2) NORMAL FUNCTION
// ============================================

function add(a, b) {

  return a + b;

}

console.log(add(2, 3));

// output:
// 5


// ============================================
// 3) ARROW FUNCTION
// ============================================

const add2 = (a, b) => {

  return a + b;

};

console.log(add2(2, 3));

// output:
// 5



// ============================================
// 4) BREAKDOWN
// ============================================

const sum = (a, b) => {

  return a + b;

};


// sum
// = function variable

// (a,b)
// = parameters

// =>
// = arrow function

// { }
// = function body


// ============================================
// 5) SHORT ARROW FUNCTION
// ============================================

// agar ek line ho
// to return likhna zarori nahi


const multiply = (a, b) => a * b;


console.log(multiply(2, 4));

// output:
// 8


// ============================================
// 6) SINGLE PARAMETER
// ============================================

// ek parameter ho
// to ( ) optional hain


const greet = name => {

  console.log("Hello " + name);

};


greet("Qasim");

// output:
// Hello Qasim


// ============================================
// 7) NO PARAMETERS
// ============================================

// agar parameter na ho
// to empty ( ) likhenge


const sayHi = () => {

  console.log("Hi");

};

sayHi();

// output:
// Hi



// ============================================
// 8) REAL LIFE EXAMPLE
// ============================================

// calculator function


const divide = (a, b) => {

  return a / b;

};


console.log(divide(10, 2));

// output:
// 5


// ============================================
// FINAL SUMMARY
// ============================================

// Arrow Function
// = short function syntax


// =>
// = arrow


// short arrow function
// = return likhna zarori nahi


// modern JavaScript me
// bohat use hota hai