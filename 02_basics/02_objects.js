// ============================================
// OBJECT LITERAL (BASIC → ADVANCE NOTES)
// ============================================


// ============================================
// 1) OBJECT KYA HAI?
// ============================================

// Object = related data ka group (key:value pairs)

let person = {
  name: "Qasim",
  age: 25,
  city: "Lahore"
};

console.log(person);


// ============================================
// 2) OBJECT KI PEHCHAN
// ============================================

// { } = object literal
// key : value

// name = key
// "Qasim" = value


// ============================================
// 3) VALUE ACCESS KARNA
// ============================================

// dot notation
console.log(person.name); // Qasim

// bracket notation
console.log(person["age"]); // 25


// ============================================
// 4) VALUE CHANGE KARNA
// ============================================

person.age = 30;

console.log(person.age); // 30


// ============================================
// 5) NEW VALUE ADD KARNA
// ============================================

person.country = "Pakistan";

console.log(person);


// ============================================
// 6) VALUE DELETE KARNA
// ============================================

delete person.city;

console.log(person);


// ============================================
// 7) OBJECT ME FUNCTION (METHOD)
// ============================================

let user = {
  name: "Ali",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

user.greet(); // Hello Ali


// ============================================
// 8) NESTED OBJECT (OBJECT KE ANDAR OBJECT)
// ============================================

let student = {
  name: "Ahmed",
  address: {
    city: "Karachi",
    zip: 12345
  }
};

console.log(student.address.city); // Karachi


// ============================================
// 9) ARRAY INSIDE OBJECT
// ============================================

let data = {
  name: "Qasim",
  skills: ["HTML", "CSS", "JS"]
};

console.log(data.skills[0]); // HTML


// ============================================
// 10) OBJECT KE KEYS & VALUES
// ============================================

let obj = { a: 1, b: 2 };

console.log(Object.keys(obj));   // ["a", "b"]
console.log(Object.values(obj)); // [1, 2]
console.log(Object.entries(obj));// [["a",1],["b",2]]


// ============================================
// 11) LOOP OBJECT
// ============================================

let user2 = { name: "Ali", age: 20 };

for (let key in user2) {
  console.log(key, user2[key]);
}


// ============================================
// 12) OBJECT COPY (IMPORTANT)
// ============================================

let original = { name: "Qasim" };

// shallow copy
let copy = { ...original };

copy.name = "Ali";

console.log(original.name); // Qasim (safe)
console.log(copy.name);     // Ali


// ============================================
// 13) DESTRUCTURING (ADVANCE)
// ============================================

let person2 = {
  name: "Qasim",
  age: 25
};

let { name, age } = person2;

console.log(name); // Qasim
console.log(age);  // 25


// ============================================
// 14) OPTIONAL CHAINING (ADVANCE)
// ============================================

let user3 = {
  name: "Ali"
};

console.log(user3.address?.city); // undefined (no error)


// ============================================
// FINAL SUMMARY
// ============================================

// Object = key:value data
// { } = object literal

// . (dot) = access
// [] (bracket) = dynamic access

// add → obj.newKey
// update → obj.key = value
// delete → delete obj.key

// method = function inside object

// nested = object inside object
// array inside object possible

// keys / values / entries

// spread (...) = copy
// destructuring = easy extract
// optional chaining = safe access