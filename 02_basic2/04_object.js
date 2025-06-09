// const instaUser = new Object() // this is siglton object
const instaUser = {} // non-sigleton // both have same output like {}

instaUser.id = "123abc"
instaUser.name = "Sam"
instaUser.isLoggedIn = false

// console.log(instaUser);  

const regularUser = {
    email: "sam@gmail.com",
    fullName: {
       userfullname : {
        firstname: "Lily",
        lastname: "xyz"
       }
    }
}
console.log(regularUser.fullName.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));
