function sum(a, b){
    return a + b;
}

let first = prompt("Enter the first number");
let second = prompt("Enter the second number");

let result = sum(parseFloat(first), parseFloat(second));

console.log(`The result of the sum of ${first} and ${second} is ${result}`);


const person = {
    name: "Oga Niyi",
    age: 11,
    complexion: "light",
    gender: "male"
}

console.log(person.age);
console.log(person.name);
console.log(person['complexion']);
console.log(person['gender']);



