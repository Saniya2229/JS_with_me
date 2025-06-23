// const { use } = require("react");
// const { log } = require("three/tsl");

const { log } = require("three/tsl")

// const promiseOne = new Promise(function(resolve, reject){
//     // Do as an async task
//     // DB calls, Cryptography, network

//     setTimeout(function(){
//         console.log('Async task completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// })

// //without holding the variable

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async task consumed");  
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"Lily", email:"Lily@example.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "Lily", password: 1234})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log("The promise is either resolved air rejected"));

// when we can set error true it gives result like"ERROR: Something went wrong"
// when we can set the error is false it gives username "{ username: 'Lily', password: 1234 }
// Lily"

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Lily", password: 1234})
        }else{
            reject("Error: js went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data =  await response.json()
//    console.log(data);
//     } catch (error) {
//         console.log("E:", error);
        
//     }
// }
// getAllUsers()


// Using the then and catch


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));
