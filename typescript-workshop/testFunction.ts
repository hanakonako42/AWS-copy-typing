//================================
function helloWorld(): void {
    console.log("Hello, World!");
}

helloWorld();
//================================
function getGreeting(): string {
    return "Hello World!";
}

const greeting: string = getGreeting();
console.log(greeting);
//================================
function saySomething(text: string) {
    console.log(text);
}

saySomething("Hello!");
saySomething("Good morning.");
saySomething("Hey There!");
//================================
function introduce(name: string, age: number) {
    console.log(`${name} is ${age} years old`);
}

introduce("joe", 11);
introduce("Mary", 9);
//================================