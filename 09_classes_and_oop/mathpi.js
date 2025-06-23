const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);

const cofee = {
    name: "cafechino",
    price: 200,
    isAvailable: true,

    readyCoffe: function(){
        console.log("Coffe not ready");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(cofee, "name"));


for (const [key, value] of Object.entries(cofee)) {
    if (typeof value  !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}