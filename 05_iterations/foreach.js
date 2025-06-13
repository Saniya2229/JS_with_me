const programming = ["js", "Py", "rb", "swift", "cpp"]

// programming.forEach( function (val){
//     console.log(val);
    
// })

// Uding Arrow Function

// programming.forEach( (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }

// programming.forEach(printMe)


programming.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item)=> {
    console.log(item.languageFileName);
    
})