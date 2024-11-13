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
const jiro = new Person();
const saburo = new Person();

taro.firstName = "AWS";
taro.lastName = "太郎";
jiro.firstName = "Amazon";
jiro.lastName = "次郎";
saburo.firstName = "CDK";
saburo.lastName = "三郎";

taro.greet();
jiro.greet();
saburo.greet();