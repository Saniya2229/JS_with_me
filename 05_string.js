const name = "Lily"
const walkCount = 1000

console.log(`Hello my name is ${name} and my walking points are ${walkCount}`);

const gameName = new String('Lily-xy')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));



const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-1, 0)
console.log(anotherString);

const newStringOne = "    Lily      "
console.log(newStringOne);
console.log(newStringOne.trim());  // Remone the starting and end space 

const url = "https://Lily.com/lily%20shaha"

console.log(url.replace('%20', '-'))

console.log(gameName.split('-'));