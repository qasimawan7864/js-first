// ============================================
// IF / ELSE / ELSE IF IN JAVASCRIPT
// (BEGINNER NOTES)
// ============================================


// ============================================
// 1) IF KYA HAI?
// ============================================

// if
// = condition true ho
// to code chale

let age = 20;

if (age >= 18) {

  console.log("Adult");

}

// output:

// Adult


// ============================================
// 2) IF KA FLOW
// ============================================

// JS pehle:

// condition check karta hai


// agar condition:

// true
// = code chalega


// false
// = code nahi chalega


// ============================================
// 3) FALSE CONDITION
// ============================================

let marks = 30;

if (marks >= 50) {

  console.log("Pass");

}

// output:

// kuch nahi

// kyun?

// kyun ke:
// condition false thi


// ============================================
// 4) ELSE KYA HAI?
// ============================================

// else
// = agar if false ho

let number = 5;

if (number > 10) {

  console.log("Big Number");

} else {

  console.log("Small Number");

}

// output:

// Small Number


// ============================================
// 5) ELSE KA FLOW
// ============================================

// agar if true ho:

// else nahi chalega


// agar if false ho:

// else chalega


// ============================================
// 6) ELSE IF KYA HAI?
// ============================================

// else if
// = multiple conditions check karna

let score = 80;

if (score >= 90) {

  console.log("Grade A");

} else if (score >= 70) {

  console.log("Grade B");

} else {

  console.log("Fail");

}

// output:

// Grade B


// ============================================
// 7) ELSE IF FLOW
// ============================================

// JS:

// pehle if check karta hai

// agar false:

// else if check karta hai

// phir:

// else


// ============================================
// 8) MULTIPLE ELSE IF
// ============================================

let day = 3;


if (day === 1) {

  console.log("Monday");

} else if (day === 2) {

  console.log("Tuesday");

} else if (day === 3) {

  console.log("Wednesday");

} else {

  console.log("Invalid Day");

}


// output:

// Wednesday



// ============================================
// 9) COMPARISON OPERATORS
// ============================================

// >   greater than

// <   less than

// >=  greater than equal

// <=  less than equal

// ==  equal

// === strict equal

// !=  not equal



// ============================================
// 10) REAL LIFE EXAMPLE
// ============================================

let isLoggedIn = true;

if (isLoggedIn) {

  console.log("Dashboard");

} else {

  console.log("Login Page");

}

// output:

// Dashboard


// ============================================
// FINAL SUMMARY
// ============================================

// if
// = true condition ka code


// else
// = false condition ka code


// else if
// = multiple conditions


// JS
// top to bottom conditions check karta hai