/*
========================================
📘 VARIABLES (let, const, var)
========================================
*/

//1) CONST => //value change نہیں ہو سکتی
// وجہ: یہ constant ہوتا ہے، ایک بار assign ہو جائے تو دوبارہ نہیں بدل سکتا
const accountId = 1;
    // accountId = 2; ❌ error


 //2) LET => //value change ہو سکتی ہے
        // وجہ: یہ block scope variable ہے، modern JS میں safe ہے
        let accountEmail = "qasim@gmail.com";
    accountEmail = "new@gmail.com"; // ✅ allowed


// 3) VAR => //old method (avoid کریں)
// وجہ: یہ function scoped ہے، block {} کو ignore کرتا ہے → bugs آتے ہیں
var accountPassword = "12345";


       // 4) بغیر keyword ❌
        // وجہ: یہ global variable بن جاتا ہے (dangerous)
        accountCity = "Islamabad";


       // 5) declare but no value
        // وجہ: JS default طور پر undefined دے دیتا ہے
        let accountState;


        // output (table format = clean view)
        console.table([
            accountId,
            accountEmail,
            accountPassword,
            accountCity,
            accountState
        ]);