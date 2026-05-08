// ============================================
// SWITCH & BREAK IN JAVASCRIPT
// (BEGINNER NOTES)
// ============================================



// ============================================
// 1) SWITCH KYA HAI?
// ============================================

// switch
// = multiple exact values check karna


// jab ek variable ki
// kai possible values hon

// tab switch use hota hai





// ============================================
// 2) SWITCH SYNTAX
// ============================================

switch(value) {

  case 1:
    console.log("One");
    break;

  case 2:
    console.log("Two");
    break;

  default:
    console.log("Invalid");

}



// switch(value)
// = JS value check karega

// case
// = possible value

// break
// = stop





// ============================================
// 3) SIMPLE EXAMPLE
// ============================================

let day = 2;


switch(day) {

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid Day");

}



// output:

// Tuesday





// ============================================
// 4) SWITCH FLOW
// ============================================

// JS:

// pehle value check karta hai

// phir matching case chalata hai





// ============================================
// 5) BREAK KYA HAI?
// ============================================

// break
// = switch ko stop karta hai





// ============================================
// 6) BREAK EXAMPLE
// ============================================

let num = 1;


switch(num) {

  case 1:
    console.log("One");
    break;

  case 2:
    console.log("Two");
    break;

}



// output:

// One



// break ne switch stop kar diya





// ============================================
// 7) BREAK NA HO TO?
// ============================================

let value = 2;


switch(value) {

  case 1:
    console.log("One");

  case 2:
    console.log("Two");

  case 3:
    console.log("Three");

}



// output:

// Two
// Three





// kyun?

// kyun ke:
// break nahi tha





// ============================================
// 8) DEFAULT KYA HAI?
// ============================================

// default
// = agar koi case match na ho


let month = 10;


switch(month) {

  case 1:
    console.log("January");
    break;

  case 2:
    console.log("February");
    break;

  default:
    console.log("Invalid Month");

}



// output:

// Invalid Month





// ============================================
// 9) REAL LIFE EXAMPLE
// ============================================

let role = "admin";


switch(role) {

  case "admin":
    console.log("Full Access");
    break;

  case "user":
    console.log("Limited Access");
    break;

  default:
    console.log("Guest");

}



// output:

// Full Access





// ============================================
// 10) IF vs SWITCH
// ============================================

// if
// = conditions ke liye


// switch
// = exact values ke liye





// ============================================
// FINAL SUMMARY
// ============================================

// switch
// = multiple exact values


// case
// = possible value


// break
// = stop


// default
// = no match case