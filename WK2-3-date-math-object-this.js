let today = new Date();
console.log(today);

// get the present hour
console.log(today.getHours());
// get the present minute
console.log(today.getMinutes());
// get the present seconfs
console.log(today.getSeconds());
// get the present day in number form
console.log(today.getDay());
// get the present date
console.log(today.getDate());
// get the present month
console.log(today.getMonth());
console.log(today.getFullYear());

console.log(`${today.getHours()}:${today.getMinutes()}`);

// the euler's constant
console.log(Math.E);
// pi constant
console.log(Math.PI);
// square root of 2
console.log(Math.SQRT2);
// square root of 1/2
console.log(Math.SQRT1_2);
// get the square root of a number
console.log(Math.sqrt(16));
// absolute value
console.log(Math.abs(-8));
// ceil the number up
console.log(Math.ceil(4.6));
console.log(Math.ceil(4.2));
console.log(Math.ceil(7.1));
// floor the number down
console.log(Math.floor(4.2));
console.log(Math.floor(4.8));
// round the number
console.log(Math.round(4.7));
console.log(Math.round(4.2));
// a number raise to power another number
console.log(Math.pow(2, 5));
// generate a random number
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

// to generate a random number between two range use the below
// Math.floor(Math.random() * (max - min + 1)) + min;


// using this keyword

// window object
console.log(this);

function testing(){
    console.log(this);
}
testing();

function greeting(elem){
    console.log(elem.innerHTML);  
}

const person = {
    fistName: "Tayo",
    lastName: "Olu",
    age: 12,
    gender: "male",
    fullName: function(){
        return `${this.fistName} ${this.lastName}`
    }
}

console.log(person.fullName());











