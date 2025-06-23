//ES6

const { pass } = require("three/tsl")

class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const newUser = new user("Lilly", "Lily@example.com", "123")
console.log(newUser.encryptPassword());
console.log(newUser.changeUserName());

//behind the scene

function UserTwo(username, email, password){
    this.username = username
        this.email = email
        this.password = password
}

UserTwo.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
UserTwo.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new UserTwo("tea", "tea@exmaple.com", "1234")
const newUserthree = new UserTwo("three", "three@example.com", "1235")

console.log(tea.encryptPassword());
console.log(newUserthree.changeUserName());

