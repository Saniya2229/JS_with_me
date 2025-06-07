// # primitive (7 types) call by value
// 1. String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const socreNumber = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id == anotherID);

// const bigNumber = 242424242434343434n

//JavaScript is a dynamically typed language, 
// which means that data types of variables are determined by 
// the value they hold at runtime and can change throughout 
// the program as we assign different values to them.

// Reference Type (Non-primitive)
// Array, Objects, Functions

const flowers = ["Rose", "Mogara0", "Tulip"]
let myObj = {
    name:"XYZ",
    age:20,
}

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof myFunction);