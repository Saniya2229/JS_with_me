let score = true   //null, undefined, 33abc, 33



console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber );
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "xyz"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "xyz" => true

let someNumber = 33

let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)