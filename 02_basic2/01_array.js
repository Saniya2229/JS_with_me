//array

const myArr = [0,1,2,3,4,5]
const myFlower = ["Rose", "Mogara","tulip"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(8));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


// slice. splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);  //[ 1, 2 ]

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);  // Original array are manipulated like C  [ 0, 4, 5 ]
console.log(myn2);  //[ 1, 2, 3 ]
