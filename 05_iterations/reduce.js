const { ArrowHelper } = require("three");

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (accumalator, cuurentValue) {
//     console.log(`accumalator ${accumalator} and currentValue ${cuurentValue}`);
    
//     return accumalator + cuurentValue
// }, 0)


// using Arrow function

// const myTotal = myNums.reduce( (accumalator, currentValue) => {
//     return accumalator + currentValue
// }, 0)

// console.log(myTotal);


// Example of shpping Cart 

const shoppingCart = [
    {
        itemName: 'JS course',
        price: 2999
    },
    {
        itemName: 'python course',
        price: 999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'Data Science course',
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (accumalator,item) => {
    return accumalator + item.price
}, 0)

console.log(priceToPay);
