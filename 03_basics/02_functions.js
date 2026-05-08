// ============================================
// FUNCTIONS IN JAVASCRIPT - PART 2
// (INTERMEDIATE → ADVANCE)
// ============================================


// ============================================
// 1) FUNCTION EXPRESSION
// ============================================

// function ko variable me store karna

const greet = function() {

  console.log("Hello");

};

greet();



// ============================================
// 2) DEFAULT PARAMETERS
// ============================================

// agar argument na aaye
// to default value use hoti hai


function loginUser(username = "Guest") {

  console.log(username);

}

loginUser();
loginUser("Qasim");

// output:

// Guest
// Qasim


// ============================================
// 3) REST OPERATOR (...)
// ============================================

// multiple values ko array me lena


function cartPrice(...prices) {

  console.log(prices);

}

cartPrice(100, 200, 300);

// output:

// [100,200,300]



// ============================================
// 4) CALLBACK FUNCTION
// ============================================

// function ko argument me bhejna


function greetUser(name) {

  console.log("Hello " + name);

}

function processUser(callback) {

  callback("Qasim");

}

processUser(greetUser);


// ============================================
// 5) HOISTING
// ============================================

// function declaration
// hoist hoti hai

sayName();

function sayName() {

  console.log("Qasim");

}


// ============================================
// 6) FUNCTION EXPRESSION HOISTING
// ============================================

// function expression
// hoist nahi hoti

// sayAge(); ❌


const sayAge = function() {

  console.log(25);

};


// ============================================
// 7) ANONYMOUS FUNCTION
// ============================================

// bina naam wala function

setTimeout(function() {

  console.log("Hello");

}, 1000);


// ============================================
// 8) IIFE
// ============================================

// Immediately Invoked Function Expression

// function jo turant chale


(function() {

  console.log("IIFE");

})();


// ============================================
// FINAL SUMMARY
// ============================================

// function expression
// = variable me function


// callback function
// = function as argument


// anonymous function
// = bina naam function


// IIFE
// = turant chalne wala function