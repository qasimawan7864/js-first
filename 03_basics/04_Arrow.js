// ============================================
// ARROW FUNCTIONS IN JAVASCRIPT - PART 1
// (BEGINNER FOUNDATION)
// ============================================


// ============================================
// 1) ARROW FUNCTION KYA HAI?
// ============================================

// Arrow Function
// = function likhne ka short tareeqa

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
// 5) SINGLE PARAMETER
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
// 6) NO PARAMETERS
// ============================================

// agar parameter na ho
// to empty ( ) likhenge

const sayHi = () => {

  console.log("Hi");

};

sayHi();

// output:

// Hi

// +++++++++++++++++++++++++++++PART 2++++++++++++++++++++++++++++++++++++++++++


// ============================================
// ARROW FUNCTIONS IN JAVASCRIPT - PART 2
// (INTERMEDIATE → ADVANCE)
// ============================================


// ============================================
// 1) SHORT ARROW FUNCTION
// ============================================

// ek line ho
// to return likhna zarori nahi

const multiply = (a, b) => a * b;


console.log(multiply(2, 4));

// output:

// 8


// ============================================
// 2) EXPLICIT RETURN
// ============================================

// khud return likhna


const add = (a, b) => {

  return a + b;

};

console.log(add(2, 3));



// ============================================
// 3) IMPLICIT RETURN
// ============================================

// automatic return

const subtract = (a, b) => a - b;

console.log(subtract(5, 2));

// output:

// 3


// ============================================
// 4) OBJECT RETURN
// ============================================

// object return karne ke liye
// ( ) zarori hain


const getUser = () => ({

  name: "Qasim"

});

console.log(getUser());


// ============================================
// 5) ARROW FUNCTION & this
// ============================================

// arrow function
// apna this nahi banata


const user = {

  name: "Qasim",

  greet: () => {

    console.log(this.name);

  }

};

user.greet();


// ============================================
// 6) NORMAL FUNCTION & this
// ============================================

const user2 = {

  name: "Ali",

  greet: function() {

    console.log(this.name);

  }

};

user2.greet();

// output:

// Ali


// ============================================
// FINAL SUMMARY
// ============================================

// Arrow Function
// = short function syntax

// =>
// = arrow

// implicit return
// = automatic return

// explicit return
// = return keyword

// arrow function
// apna this nahi banata