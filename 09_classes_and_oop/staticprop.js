class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNSME: ${this.username}`);
    }
        static crateId(){
            return `123`
        
    }
}

const lily = new User('Lily')
// console.log(lily.crateId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }

}
const anotherLily = new Teacher("Lily", "Lily@gmail.com")

console.log(anotherLily.crateId());
