// truthy values this values can assume it's a true even if
//  we are writing anythin in const variable

const username = []

if(username){
    console.log("Got the email");
}else{
    console.log("Don't have an email");
    
}

//  falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy value
// "0", 'false', " ", [], {}, function(){}


// How we detect the array and the object are the empty

if(username.length === 0){
    console.log("Array is empty");
    
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

//  important

// false == 0 // true
// false == '0' // true
// 0 == '' // true

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 5
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// ternary Operator

// condition ? true : false

const coldCoffee = 100
coldCoffee <= 80 ? console.log("Less than 80") : console.log("more than 80");

