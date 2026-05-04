// ===============================
// Primitive DataTypes (Simple Notes + Output)
// ===============================

// 1) STRING   => text / words hamesha " " ya ' ' ke andar likhte hain
let name = "Qasim Awan";
console.log("Name:", name);
console.log("Type:", typeof name);


// 2) NUMBER (decimal+integer)  => aam numbers (limit: 2^53 - 1)
let age = 25;
let price = 199.99;
console.log("Age:", age);
console.log("Price:", price);
console.log("Type:", typeof age);


// 3) BIGINT  => bohat baray numbers (end with 'n')
let bigNumber = 123456789123456789123456789n;
console.log("Big Number:", bigNumber);
console.log("Type:", typeof bigNumber);


// 4) BOOLEAN   => true / false
let isLoggedIn = true;
let isAdmin = false;
console.log("Is Logged In:", isLoggedIn);
console.log("Is Admin:", isAdmin);
console.log("Type:", typeof isLoggedIn);


// 5) NULL  => empty value (intentionally assigned)
let state = null;
console.log("State:", state);
console.log("Type:", typeof state); // object aata hai (JavaScript bug)


// 6) UNDEFINED  => value assign nahi ki gayi
let city;
console.log("City:", city);
console.log("Type:", typeof city);


// 7) SYMBOL  => unique value
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log("ID1:", id1);
console.log("ID2:", id2);
console.log("Are equal?", id1 === id2); // false
console.log("Type:", typeof id1);