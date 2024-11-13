class Person {
    firstName: string;
    lastName: string;
    constructor(firstName = "AWS", lastName = "太郎") {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        console.log(`私は${this.firstName} ${this.lastName}です。`);
    }
}

class Teacher