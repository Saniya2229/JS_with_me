// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello Lily!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps (Map are identified by unique values )
 
const map = new Map()
map.set("IN", "India")
map.set("USA", "United State Of America")
map.set("FR", "France")
map.set("IN", "India")

// console.log(map);


for (const [key, value] of map) {
    console.log(key, ":-" , value);
    
}



