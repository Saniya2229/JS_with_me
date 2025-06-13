const { log, log2 } = require("three/tsl");

function sayHello(){
    console.log("L");
    console.log("I");
    console.log("L");
    console.log("Y");
}

// sayHello()

// function addNumber(num1, num2){
//     console.log(num1 + num2);
// }

function addNumber(num1, num2){
    // let result = num1 +num2
    // return result
    return num1 + num2
}

const result = addNumber(10,20)
// console.log("result:", result);


function userLoginMessage (username = "sam"){
    if(!username){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}
// console.log(userLoginMessage("Lily"));
// console.log(userLoginMessage("")); // just logged in
// console.log(userLoginMessage()); //undefined

function calculateCartPrise(...num1){
    return num1
}
console.log(calculateCartPrise(200,300,500));

// Another case ask in interviews
// function calculateCartPrise(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrise(200,300,500,5000));


// How to pass object in the fuction

const user ={
    username: "Lily",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


// Using Array

const myNewArray = [100, 200, 400, 500]

function handleArray(getArray){
    return getArray[2]
}
console.log(handleArray(myNewArray));
console.log(handleArray([100,200,400,500]));

