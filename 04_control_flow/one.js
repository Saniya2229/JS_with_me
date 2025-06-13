// if

const isUserLoggedIn = true
const temperature = 59

// if( temperature < 50 ){
//     console.log("Less than 50");
    
// } else{
//     console.log("temperature is greater than 50");
// }



// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}` );
// }

//     console.log(`User power: ${power}` );


// Nested 

// const balance = 1000
// if(balance < 500){
//     console.log("less than");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 950){
//     console.log("less than 950");
// }else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggeedFromGoogle = true
const loggedFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy  course");
}
if(loggeedFromGoogle || loggedFromEmail){
    console.log("User logged In");
}