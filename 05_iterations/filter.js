// const programming = ["js", "Py", "rb", "swift", "cpp"]

// const values = programming.forEach ((item) => {
//     // console.log(item); 
//     return item // it does not return the value
// } )

// console.log(values); 


// filter function (it also uses call back function and return the value)
//  NOTE: inside the scope you must use the return keyword


const myNums = [1, 2, 3, 4, 5, 6,  7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4  // Must be used retutn keyword otherwise it gives empty array
// })


// Using foreach 

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const book = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008
    },
    {
        title: 'Book Three', genre: 'History', publish: 1999, edition: 2007
    },
    {
        title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010
    },
    {
        title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014
    },
    {
        title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010
    },
    {
        title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996
    },
    {
        title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016
    },
    {
        title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989
    },
]

// const userBook = book.filter( (bk) =>{
//     if (bk.genre === 'Fiction') {
//        return book.push(bk)
//     }
// })

const userBook = book.filter( (bk) => {
    if (bk.publish >= 1995 && bk.genre === 'History') {
        return book.push(bk)
    }
})

console.log(userBook);
