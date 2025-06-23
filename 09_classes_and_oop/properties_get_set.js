const { pass, log } = require("three/tsl")

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}


const tree = new User("Lili@12example.com", "hjvsdhv")
console.log(tree.email);
console.log(tree.password);

