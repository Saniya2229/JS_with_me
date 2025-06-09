// singletone (singleton are made using the constructor)

// object literals
//Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Lily",
    age: 20,
    [mySym]: 'myKey1',  // Important 
    location: "Jaipur",
    email: "Lily@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","sunday"]
}

console.log(JsUser["email"]);
console.log(JsUser[mySym]);


// how to change values
JsUser.email = "Lily@gmail.com"
// Object.freeze(JsUser)  // do not change your email 
JsUser.email = "Lily@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User. ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
