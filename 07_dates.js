// Dates

let  myDate = new Date()
console.log(myDate.toString()); //Sun Jun 08 2025 13:11:20 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sun Jun 08 2025
console.log(myDate.toLocaleString()); //8/6/2025, 1:12:47 pm
console.log(myDate.toLocaleDateString()); //8/6/2025
console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 8)
// let myCreatedDate = new Date(2025, 0, 8, 5, 3)
// let myCreatedDate = new Date("2025-06-08")
let myCreatedDate = new Date("06-08-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.toLocaleTimeString()) //5:31:47 pm
console.log(newDate.getDate());v//Returns day


// `${newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday:"long",
})