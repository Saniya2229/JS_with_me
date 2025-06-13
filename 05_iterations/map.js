const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNumns = myNumbers.map( (num) => num + 10 )
//  console.log(newNumns);  // it automatically returns the value
 

//  NOTE: inside the scope you must use the return keyword

// Chaining

const newNumns = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num + 2 )
                    .filter ( (num) => num >= 40)
 console.log(newNumns);  