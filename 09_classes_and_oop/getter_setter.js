class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(email){
        this._email = email
    }
    get password(){
        return `${this._password}lily`
    }
    set password(value){
        this._password = value
    }
}
const Lily = new User("Lily@gmail.com", "abc")
console.log(Lily.password);
console.log(Lily.email);


// NOTE: when we cannot give access to anyone then we can use the getter and setter.