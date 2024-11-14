class Person {
    firstName?: string;
    lastName?: string;
    
    greet() {
        console.log(`私は${this.firstName} ${this.lastName}です。`);
    }

    testFunc(arg1: number, arg2: string){
        console.log(`No.${arg1}: ${arg2}`);
    }
}

const taro = new Person();

taro.firstName = "AWS";
taro.lastName = "太郎";

console.log(taro.firstName + taro.lastName);
taro.greet();