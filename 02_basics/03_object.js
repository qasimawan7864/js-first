// ============================================
// SINGLETON & DESTRUCTURING NOTES
// (SUPER EASY)
// ============================================



// ============================================
// 1) SINGLETON KYA HAI?
// ============================================

// Singleton = ek hi object ko
// multiple variables use karen

// same object sharing


const user1 = {
  name: "Qasim"
};

const user2 = user1;


// dono same object ko use kar rahe hain

console.log(user1);
console.log(user2);



// ============================================
// 2) SINGLETON BEHAVIOR
// ============================================

user2.name = "Ali";

console.log(user1.name); // Ali
console.log(user2.name); // Ali


// Q KIUN?
// kyun ke dono same object ko point kar rahe hain
// new copy nahi bani



// ============================================
// 3) VISUAL UNDERSTANDING
// ============================================

// user1 ──► { name: "Qasim" }
// user2 ──► same object



// ============================================
// 4) REAL LIFE EXAMPLE
// ============================================

// office system

const system = {
  users: 100
};

const admin = system;
const employee = system;


// admin change karega
admin.users = 200;

console.log(employee.users); // 200


// q kiun?
// kyun ke same object use ho raha hai



// ============================================
// 5) SINGLETON SUMMARY
// ============================================

// singleton = same object sharing

// ek object
// multiple references





// ============================================
// 6) DESTRUCTURING KYA HAI?
// ============================================

// object se values nikalna
// shortcut tareeqe se

const course = {
  coursename: "JS",
  price: 999,
  instructor: "Hitesh"
};



// ============================================
// 7) NORMAL WAY
// ============================================

console.log(course.instructor);


// bar bar likhna parta hai:
// course.instructor
// course.price



// ============================================
// 8) DESTRUCTURING
// ============================================

const { instructor } = course;

console.log(instructor);


// JS internally ye karta hai:

// const instructor = course.instructor



// ============================================
// 9) MULTIPLE VALUES
// ============================================

const { coursename, price } = course;

console.log(coursename);
console.log(price);



// ============================================
// 10) RENAME VARIABLE
// ============================================

const { instructor: teacher } = course;

console.log(teacher);


// instructor = object ki key
// teacher = new variable name



// ============================================
// 11) DEFAULT VALUE
// ============================================

const student = {
  name: "Ali"
};

const { city = "Lahore" } = student;

console.log(city);


// city object me nahi thi
// is liye default value use hui



// ============================================
// 12) FINAL SUMMARY
// ============================================

// SINGLETON
// same object sharing


// DESTRUCTURING
// object se values shortcut me nikalna


// { } = destructuring syntax


// const {name} = user
// same as:
// const name = user.name