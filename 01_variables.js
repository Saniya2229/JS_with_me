const { log } = require("three/tsl")

const accountId = 12345
let accountEmail = "saniya123@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2  

/*
Prefere not to use var
beacause of issue in block scope and functional scope
*/

accountEmail = "sani12@.com"
accountPassword = 1256443
accountCity = "Bemgluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword,accountEmail,accountCity, accountState])