const flowers = ["Rose","Mogara","Tulip","Jasmin"]
const fruits = ["Mango","pinapple","Papaya","apple"]

// flowers.push(fruits)

// console.log(flowers);

const newFlower = flowers.concat(fruits)
console.log(newFlower);

const anotherFlower = [...flowers, ...fruits]
console.log(anotherFlower);  //you can also use this methos insted of the concat

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// you can convert the non-array using the function "from"
console.log(Array.isArray("Lily"));
console.log(Array.from("Lily"));
console.log(Array.from({name: "Lily"}));  // interesting


// you can convert the above variables, objects, arrays using "of" function
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


