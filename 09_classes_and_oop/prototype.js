const { log } = require("three/tsl");




let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Lily = function(){
    console.log('Lily is present in all object');
    
}

Array.prototype.HeyLily = function(){
    console.log(`Lily says Hello`);
    
}

// heroPower.Lily()
myHeros.Lily()
myHeros.HeyLily()
// heroPower.HeyLily()

// Inheritance

const User = {
    name: 'lily',
    email: 'lily@google.com'
}

const teacher = {
    makeVideo: true
}
const teacherSupport = {
    isAvailable: false
}
const TASupoort = {
    makeAssignment: "Js assignment",
    fillTime: true,
    __proto__:teacherSupport
}

teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(teacherSupport, teacher)

let anotherUsername = "LilyLearnsJs     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"Lily".trueLength()
"Coffe".trueLength()