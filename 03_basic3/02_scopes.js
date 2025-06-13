
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER:", a);
// }
// console.log(a);
// console.log(b);

const { add } = require("three/tsl");

// Nested loops

function one(){
    const username = "Lily"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
        // console.log(website);
        two()
}

// one()

if(true){
    const username = "Lily"
    if(username === "Lily"){
        const website = " YouTube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


//  *********************** INTERSTING *******************

console.log(addOne(5));
function addOne(num){
    return num + 1
}


addTwo(5) // it gives error 
const addTwo = function(num){
    return num + 2
}

