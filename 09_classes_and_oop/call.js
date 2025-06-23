const { pass } = require("three/tsl")

function setUsername(username){
    this.username = username
}
function createUser(username, email, password){
    // we can explicitely call the usename using the method
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const anotherUser = new createUser("Lily", "Lily@gmail.com", "1234")
console.log(anotherUser);
