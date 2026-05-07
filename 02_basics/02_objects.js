// ============================================
// OBJECTS IN JAVASCRIPT - PART 1
// (FUNDAMENTALS / BASIC FOUNDATION)
// ============================================



// ============================================
// 1) OBJECT KYA HAI?
// ============================================

// Object = related data ko ek jagah store karna

// real life example:
// user ki information

const user = {
  name: "Qasim",
  age: 25,
  city: "Lahore"
};

console.log(user);



// ============================================
// 2) OBJECT KI PEHCHAN
// ============================================

// { } = object literal

// object me data:
// key : value

// Example:

const person = {
  name: "Ali",
  age: 20
};


// name = key
// "Ali" = value

// age = key
// 20 = value



// ============================================
// 3) OBJECT LITERAL
// ============================================

// { } se object banana
// isko object literal kehte hain

const obj = {
  username: "Qasim"
};

console.log(obj);



// ============================================
// 4) VALUE ACCESS KARNA
// ============================================

// object se value nikalna


const student = {
  name: "Ahmed",
  marks: 90
};


// ============================================
// DOT NOTATION
// ============================================

console.log(student.name); // Ahmed


// JS internally:

// student object me jao
// name key ki value lao



// ============================================
// BRACKET NOTATION
// ============================================

console.log(student["marks"]); // 90


// dono same kaam karte hain



// ============================================
// 5) VALUE UPDATE KARNA
// ============================================

student.marks = 95;

console.log(student.marks);


// pehle:
// marks = 90

// ab:
// marks = 95



// ============================================
// 6) NEW VALUE ADD KARNA
// ============================================

student.city = "Karachi";

console.log(student);


// new key:value add ho gaya



// ============================================
// 7) VALUE DELETE KARNA
// ============================================

delete student.city;

console.log(student);


// city remove ho gaya



// ============================================
// 8) NESTED OBJECT
// ============================================

// object ke andar object

const regularUser = {

  email: "test@gmail.com",

  fullname: {

    userfullname: {

      firstname: "Qasim",
      lastname: "Awan"

    }

  }

};



// ============================================
// NESTED VALUE ACCESS
// ============================================

console.log(
  regularUser.fullname.userfullname.firstname
);


// step-by-step:

// regularUser me jao
// fullname me jao
// userfullname me jao
// firstname ki value lao



// ============================================
// 9) ARRAY INSIDE OBJECT
// ============================================

const profile = {

  name: "Qasim",

  skills: ["HTML", "CSS", "JavaScript"]

};

console.log(profile.skills[0]); // HTML


// profile = object
// skills = array



// ============================================
// 10) SINGLETON (BASIC CONCEPT)
// ============================================

// singleton = same object sharing


const user1 = {
  name: "Qasim"
};

const user2 = user1;


// dono same object use kar rahe hain


user2.name = "Ali";


console.log(user1.name); // Ali
console.log(user2.name); // Ali



// q kiun?
// kyun ke new copy nahi bani
// same object share ho raha hai



// ============================================
// FINAL SUMMARY
// ============================================

// Object = related data

// { } = object literal

// key:value = object data

// . (dot) = value access

// [] (bracket) = value access

// update = obj.key = value

// add = obj.newKey = value

// delete = delete obj.key

// nested object = object ke andar object

// array inside object possible

// singleton = same object sharing