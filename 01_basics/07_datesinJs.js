// ============================================
// DATE & TIME (SUPER EASY → ADVANCE NOTES)
// ============================================


// 1) DATE KYA HAI?
// Date = current time + date (system ka time)


// ============================================
// 2) CURRENT DATE & TIME
// ============================================

let now = new Date();

console.log("Current:", now);
// Example: Tue May 06 2026 10:30:25


// ============================================
// 3) SIRF DATE
// ============================================

console.log("Date:", now.toDateString());
// Tue May 06 2026


// ============================================
// 4) SIRF TIME
// ============================================

console.log("Time:", now.toTimeString());
// 10:30:25


// ============================================
// 5) SIMPLE FORMAT (MOST USEFUL)
// ============================================

console.log("Simple:", now.toLocaleString());
// 5/6/2026, 10:30:25 AM


// ============================================
// 6) CUSTOM DATE BANANA
// ============================================

// format: year, month, day

let d = new Date(2025, 0, 10);

console.log("Custom:", d.toDateString());

// NOTE:
// month 0 se start hota hai
// Jan=0, Feb=1, Mar=2 ...


// ============================================
// 7) VALUES NIKALNA (GET METHODS)
// ============================================

console.log("Year:", now.getFullYear()); // 2026
console.log("Month:", now.getMonth());   // 0-11
console.log("Date:", now.getDate());     // 1-31


// ============================================
// 8) TIME VALUES NIKALNA
// ============================================

console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());


// ============================================
// 9) DATE CHANGE KARNA (SET METHODS)
// ============================================

let change = new Date();

change.setFullYear(2030);
change.setMonth(5);

console.log("Updated:", change.toDateString());


// ============================================
// 10) TIMESTAMP (IMPORTANT)
// ============================================

// 1970 se ab tak ka time (milliseconds)

let ts = Date.now();

console.log("Timestamp:", ts);


// ============================================
// 11) DATE DIFFERENCE (ADVANCE)
// ============================================

let d1 = new Date("2025-01-01");
let d2 = new Date("2025-01-10");

let diff = d2 - d1;

console.log("Difference (ms):", diff);

// days me convert
let days = diff / (1000 * 60 * 60 * 24);

console.log("Days:", days);


// ============================================
// 12) DIFFERENT COUNTRY TIME
// ============================================

let date = new Date();

console.log("Pakistan:",
    date.toLocaleString("en-PK", { timeZone: "Asia/Karachi" })
);

console.log("USA:",
    date.toLocaleString("en-US", { timeZone: "America/New_York" })
);


// ============================================
// 13) LIVE CLOCK (REAL USE)
// ============================================

setInterval(() => {
    let now = new Date();

    let time =
        now.getHours() + ":" +
        now.getMinutes() + ":" +
        now.getSeconds();

    console.log("Live:", time);

}, 1000);



// ============================================
// FINAL SUMMARY (YAAD KAR LO)
// ============================================

// new Date()        → current date/time
// toDateString()    → date
// toTimeString()    → time
// toLocaleString()  → simple format

// get methods       → values nikalna
// set methods       → values change

// Date.now()        → timestamp
// difference        → days calculate

// setInterval       → live clock