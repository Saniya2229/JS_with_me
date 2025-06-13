const { array } = require("three/tsl");

const myObject = {
    JS: 'Javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

// for in loop using array

const programming = ["js", "Py", "rb", "swift", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
    
}

