/*
========================================
📘 VARIABLES (let, const, var)
========================================
*/

//1) CONST => value change nahi ho sakti
// waja: yeh constant hota hai, aik baar assign ho jaye to dobara nahi badalta
const accountId = 1;
    // accountId = 2; error


 //2) LET => value change ho sakti hai
        // waja: yeh block scope variable hai, modern JS me safe hai
        let accountEmail = "qasim@gmail.com";
    accountEmail = "new@gmail.com"; // allowed


// 3) VAR => old method (avoid karein)
// waja: yeh function scoped hai, block {} ko ignore karta hai → bugs aate hain
var accountPassword = "12345";


       // 4) baghair keyword
        // waja: yeh global variable ban jata hai (dangerous)
        accountCity = "Islamabad";


       // 5) declare but no value
        // waja: JS default tor par undefined deta hai
        let accountState;


        // output (table format = clean view)
        console.table([
            accountId,
            accountEmail,
            accountPassword,
            accountCity,
            accountState
        ]);


        
        