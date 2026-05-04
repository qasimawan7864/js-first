/*
========================================
           STRINGS (BASIC)
========================================
*/

// String = text (words), always inside "" or ''

let name = "Qasim"; 
let city = 'Islamabad';

console.log(name); // Qasim


/*
========================================
        ACCESS CHARACTERS
========================================
*/

// har letter ka index hota hai (0 se start)

let text = "Qasim";

console.log(text[0]); // Q
console.log(text[1]); // a


/*
========================================
        LENGTH (count letters)
========================================
*/

let user = "Qasim";

console.log(user.length); // 5


/*
========================================
        CHANGE CASE
========================================
*/

let str = "qasim";

console.log(str.toUpperCase()); // QASIM
console.log(str.toLowerCase()); // qasim


/*
========================================
        CONCAT (join strings)
========================================
*/

let first = "Qasim";
let last = "Awan";

console.log(first + " " + last); // Qasim Awan


/*
========================================
        CHECK WORD (includes)
========================================
*/

let msg = "Hello Qasim";

console.log(msg.includes("Qasim")); // true
console.log(msg.includes("Ali"));   // false


/*
========================================
        CUT STRING (slice)
========================================
*/

let full = "QasimAwan";

console.log(full.slice(0, 5)); // Qasim


/*
========================================
        REPLACE WORD
========================================
*/

let message = "Hello Ali";

console.log(message.replace("Ali", "Qasim")); // Hello Qasim


/*
========================================
        ADVANCED METHODS
========================================
*/

// 1) trim() → remove extra spaces (start/end)

let text1 = "   Qasim   ";

console.log(text1.trim()); // "Qasim"


// 2) split() → convert string into array

let text2 = "Qasim Awan";

console.log(text2.split(" ")); // ["Qasim", "Awan"]


// 3) indexOf() → find position (index)

let text3 = "Hello Qasim";

console.log(text3.indexOf("Qasim")); // 6
console.log(text3.indexOf("Ali"));   // -1 (not found)