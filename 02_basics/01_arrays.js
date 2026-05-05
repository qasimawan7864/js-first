// ============================================
// ARRAYS (BEGINNER → ADVANCE NOTES)
// ============================================


// ============================================
// 1) ARRAY KYA HAI?
// ============================================

// Array = list of values (multiple values in one variable)

let fruits = ["apple", "banana", "mango"];

console.log(fruits);
// ["apple", "banana", "mango"]


// ============================================
// 2) ARRAY KI PEHCHAN
// ============================================

// [ ] = array ki nishani (square brackets)

// values inside = elements / items


// ============================================
// 3) INDEX (POSITION)
// ============================================

// Array hamesha 0 se start hota hai

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // mango


// ============================================
// 4) LENGTH (KITNI VALUES HAIN)
// ============================================

console.log(fruits.length); // 3


// ============================================
// 5) ARRAY KYUN USE HOTA HAI (REAL USE)
// ============================================

// Example: shopping cart

let cart = ["Shoes", "Shirt", "Watch"];

console.log(cart);


// ============================================
// 6) VALUE CHANGE (UPDATE)
// ============================================

cart[1] = "Jacket";

console.log(cart);
// ["Shoes", "Jacket", "Watch"]


// ============================================
// 7) ADD VALUES
// ============================================

// end me add
cart.push("Cap");

// start me add
cart.unshift("Bag");

console.log(cart);


// ============================================
// 8) REMOVE VALUES
// ============================================

// last remove
cart.pop();

// first remove
cart.shift();

console.log(cart);


// ============================================
// 9) CHECK VALUE
// ============================================

console.log(cart.includes("Shoes")); // true


// ============================================
// 10) INDEX FIND KARNA
// ============================================

console.log(cart.indexOf("Watch")); // index


// ============================================
// 11) LOOP (IMPORTANT)
// ============================================

// for loop
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i]);
}


// ============================================
// 12) FOREACH (EASY LOOP)
// ============================================

cart.forEach(function(item) {
  console.log(item);
});


// ============================================
// 13) MAP (NEW ARRAY BANATA HAI)
// ============================================

let nums = [1, 2, 3];

let doubled = nums.map(function(n) {
  return n * 2;
});

console.log(doubled);
// [2, 4, 6]


// ============================================
// 14) FILTER (CONDITION PE)
// ============================================

let numbers = [10, 20, 30, 40];

let result = numbers.filter(function(n) {
  return n > 20;
});

console.log(result);
// [30, 40]


// ============================================
// 15) SLICE (COPY BANATA HAI)
// ============================================

let arr = [1, 2, 3, 4, 5];

let part = arr.slice(1, 4);

console.log(part);
// [2, 3, 4]


// ============================================
// 16) SPLICE (ORIGINAL CHANGE)
// ============================================

let arr2 = [1, 2, 3, 4];

arr2.splice(1, 2);

console.log(arr2);
// [1, 4]


// ============================================
// 17) JOIN (STRING BANANA)
// ============================================

let words = ["Hello", "World"];

let sentence = words.join(" ");

console.log(sentence);
// "Hello World"


// ============================================
// FINAL SUMMARY
// ============================================

// Array = list
// [ ] = array
// element = value
// index = position (0 se start)

// push/pop = end control
// unshift/shift = start control

// for / forEach = loop
// map = new array
// filter = condition

// slice = copy
// splice = change
// join = string