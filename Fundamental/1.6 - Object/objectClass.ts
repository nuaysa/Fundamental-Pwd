//template untuk membuat object yang sama

class User {
    firstName= ""
    #lastName = ""//private property, gabisa diakses langsung
    static word ="Secret base"

    constructor(first : string, last: string = "") {
        this.firstName = first
        this.#lastName = last
    }

    greet(){
        console.log(`Hello, ${this.firstName}`);
        
    }

    getLastName() {
        return this.#lastName
    }
}

const user1 = new User("Akhtar")
const user2 = new User("Arkan","Yazeed")
const user3 = new User("Akhtar","Yazeed")

console.log(user1);
console.log(user2.getLastName());
console.log(user3);
console.log(User.word);


user1.greet()