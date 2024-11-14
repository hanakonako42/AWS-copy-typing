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

class Teacher extends Person {
    subject: string;
    constructor(subject: string, firstName = "AWS", lastName = "太郎") {
        super(firstName, lastName);
        this.subject = subject;
    }
    greet() {
        console.log(`私は${this.firstName} ${this.lastName}です。${this.subject}の先生をやっています。`);
    }
}

const taro = new Teacher("国語");
const amazon = new Teacher("数学", "Amazon");
const hanako = new Teacher("美術", "山田", "華子");

taro.greet();
jiro.greet();
hanako.greet();