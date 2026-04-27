const accountId = 12345
let accountEmail = "qasimawanpk1@accountEmail.com"
var accountPassword = "54321"
accountCity = "islamabad"
let accountState;

// accountId = 2 // not allowed
accountEmail = "qasimawanpk1@accountEmail.com"
accountPassword = "54321"
accountCity = "islamabad"

console.log(accountId);
/* 
Prefer not to use var
because of issue in block scope and functional scope 
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])