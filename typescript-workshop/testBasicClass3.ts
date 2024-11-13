class Person {
    firstName?: string;
    lastName?: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log(`私は${this.firstName} ${this.lastName}です。`);
    }
}

const taro = new Person("AWS", "太郎");
const jiro = new Person("Amazon", "次郎");

taro.greet();
jiro.greet();