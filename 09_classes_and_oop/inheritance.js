const { pass } = require("three/tsl");

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const tree = new Teacher("Lily", "Lily@example.com", "1234")
tree.addCourse()
tree.logMe()

const shorttree = new User("shorttree")
// shorttree.addCourse()
shorttree.logMe()