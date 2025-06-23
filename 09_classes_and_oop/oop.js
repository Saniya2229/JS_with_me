const user = {
    username: "Lily",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got the user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User (username, loginCount, isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin

    // we can create methos also
    this.greetings = function() {
        console.log(`welcome ${this.username}`);
        
    }
    return this
}
const userOne = new User("Lily", 12, true) // if we use new keyword we can create a new instance. It cannot ovrridethe values.
const userTwo = new User("Javascript", 14, true)
console.log(userOne)
console.log(userTwo)

