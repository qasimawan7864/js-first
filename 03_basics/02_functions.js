// ============================================
// FUNCTIONS IN JAVASCRIPT - PART 2
// (INTERMEDIATE CONCEPTS)
// ============================================


// ============================================
// 1) FUNCTION EXPRESSION
// ============================================

// function ko variable me store karna
// = function expression


const greet = function() {

  console.log("Hello");

};


greet();


// yahan:

// greet
// = variable

// function
// = variable me store hai



// ============================================
// 2) FUNCTION DECLARATION vs EXPRESSION
// ============================================

// function declaration

function sayHi() {

  console.log("Hi");

}



// function expression

const sayHello = function() {

  console.log("Hello");

};



// dono functions hain
// lekin syntax different hai



// ============================================
// 3) ARROW FUNCTION
// ============================================

// short syntax function


const add = (a, b) => {

  return a + b;

};


console.log(add(2, 3));


// output:
// 5



// ============================================
// 4) SHORT ARROW FUNCTION
// ============================================

// agar ek line ho
// to return likhna zarori nahi


const multiply = (a, b) => a * b;


console.log(multiply(2, 4));


// output:
// 8



// ============================================
// 5) NORMAL FUNCTION vs ARROW FUNCTION
// ============================================

// normal function

function sum1(a, b) {

  return a + b;

}


// arrow function

const sum2 = (a, b) => {

  return a + b;

};


// dono same kaam karte hain



// ============================================
// 6) DEFAULT PARAMETERS
// ============================================

// agar argument na aaye
// to default value use hoti hai


function loginUser(username = "Guest") {

  console.log(username);

}


loginUser();



// output:
// Guest



loginUser("Qasim");


// output:
// Qasim



// ============================================
// 7) REST OPERATOR (...)
// ============================================

// multiple values ko ek array me lena


function calculateCartPrice(...prices) {

  console.log(prices);

}


calculateCartPrice(100, 200, 300);


// output:

// [100, 200, 300]


// prices
// = array ban gaya



// ============================================
// 8) REST OPERATOR EXAMPLE
// ============================================

function totalPrice(...items) {

  let total = 0;

  for (let price of items) {

    total += price;

  }

  return total;

}

console.log(totalPrice(100, 200, 300));


// output:
// 600



// ============================================
// 9) HOISTING BASICS
// ============================================

// function declaration
// hoist hoti hai


sayName();


function sayName() {

  console.log("Qasim");

}


// output:
// Qasim



// ============================================
// 10) FUNCTION EXPRESSION HOISTING
// ============================================

// function expression
// hoist nahi hoti


// sayAge(); ❌ error


const sayAge = function() {

  console.log(25);

};


// kyun?

// kyun ke:
// variable me function store hai



// ============================================
// FINAL SUMMARY
// ============================================

// function expression
// = function ko variable me store karna


// arrow function
// = short syntax function


// default parameter
// = default value


// rest operator (...)
// = multiple values ko array me lena


// hoisting
// = declaration se pehle use karna