const user = {
    username: "Lily",
    Price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);   // {}

function coffee(){
    console.log(this);
}
coffee()

// const coffee = function(){
//     let username = "Lily"
//     console.log(this.username);
    
// }  // output: undefined

const flower = () => {
    let username = "Lily"
    console.log(this.username);
}

// flower()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit Arrow function

// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username: "Lily"})


console.log(addtwo(3,4));
