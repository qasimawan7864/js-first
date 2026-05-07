// ============================================
// OBJECTS IN JAVASCRIPT - PART 2
// (ADVANCE + REAL WORLD USE)
// ============================================



// ============================================
// 1) METHOD KYA HAI?
// ============================================

// object ke andar function ho
// to usko method kehte hain

const user = {

  name: "Qasim",

  greet: function() {
    console.log("Hello");
  }

};

user.greet();



// ============================================
// 2) METHOD KYUN USE KARTE HAIN?
// ============================================

// object ka data + kaam
// ek jagah rakhne ke liye


const car = {

  brand: "BMW",

  start: function() {
    console.log("Car Started");
  }

};

car.start();



// ============================================
// 3) this KEYWORD
// ============================================

// this = current object

const student = {

  name: "Ali",

  greet: function() {
    console.log("Hello " + this.name);
  }

};

student.greet();



// JS internally:

// this.name
// same as:
// student.name



// ============================================
// 4) MODERN METHOD SYNTAX
// ============================================

// purana syntax

const obj1 = {

  sayHi: function() {
    console.log("Hi");
  }

};


// modern syntax

const obj2 = {

  sayHi() {
    console.log("Hi");
  }

};

obj2.sayHi();



// ============================================
// 5) CONSTRUCTOR OBJECT
// ============================================

// new Object() se object banana

const user2 = new Object();

user2.name = "Ahmed";
user2.age = 22;

console.log(user2);



// ============================================
// 6) OBJECT DESTRUCTURING
// ============================================

// object se values shortcut me nikalna

const course = {

  coursename: "JS",
  price: 999,
  instructor: "Hitesh"

};


// normal way

console.log(course.instructor);


// destructuring

const { instructor } = course;

console.log(instructor);



// JS internally ye karta hai:

// const instructor = course.instructor



// ============================================
// 7) MULTIPLE VALUES DESTRUCTURING
// ============================================

const { coursename, price } = course;

console.log(coursename);
console.log(price);



// ============================================
// 8) RENAME VARIABLE
// ============================================

const { instructor: teacher } = course;

console.log(teacher);


// instructor = object ki key
// teacher = new variable name



// ============================================
// 9) DEFAULT VALUE
// ============================================

const profile = {

  name: "Qasim"

};


const { city = "Lahore" } = profile;

console.log(city);


// city object me nahi thi
// is liye default value use hui



// ============================================
// 10) OBJECT.KEYS()
// ============================================

// object ki keys nikalna

const person = {

  name: "Ali",
  age: 20

};

console.log(Object.keys(person));


// output:
// ["name", "age"]



// ============================================
// 11) OBJECT.VALUES()
// ============================================

// object ki values nikalna

console.log(Object.values(person));


// output:
// ["Ali", 20]



// ============================================
// 12) OBJECT.ENTRIES()
// ============================================

// key:value pairs array me

console.log(Object.entries(person));



// ============================================
// 13) SPREAD OPERATOR (...)
// ============================================

// objects merge karna

const objA = {
  a: 1,
  b: 2
};

const objB = {
  c: 3,
  d: 4
};


const objC = {
  ...objA,
  ...objB
};

console.log(objC);



// ============================================
// 14) OPTIONAL CHAINING
// ============================================

// ?. = safe access

const user3 = {
  name: "Usman"
};


console.log(user3.address?.city);


// undefined
// error nahi aayega



// ============================================
// 15) API DATA
// ============================================

// APIs zyada tar object ya
// array of objects deti hain


const apiUser = {

  name: "Qasim",
  followers: 100

};

console.log(apiUser.name);



// ============================================
// 16) ARRAY OF OBJECTS
// ============================================

const users = [

  {
    name: "Ali",
    age: 20
  },

  {
    name: "Ahmed",
    age: 25
  }

];


console.log(users[0].name);


// users = array
// [0] = first object
// .name = object ki value



// ============================================
// 17) JSON
// ============================================

// API data mostly JSON me hota hai

// JSON object jaisa hota hai
// lekin keys me quotes hoty hain


const jsonData = `

{
  "name": "Qasim",
  "age": 25
}

`;



// ============================================
// FINAL SUMMARY
// ============================================

// method = object ke andar function

// this = current object

// constructor = new Object()

// destructuring = shortcut se values nikalna

// Object.keys() = keys

// Object.values() = values

// Object.entries() = key:value arrays

// spread (...) = merge/copy

// ?. = safe access

// API = object/JSON data

// array of objects common hai