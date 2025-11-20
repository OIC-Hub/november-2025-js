function greeting(){
    alert("Good morning");
}

// greeting();

function sum(num1, num2){
    let result = num1 + num2;
    console.log(result);
}

sum(2, 10);
sum(10, 19);
sum(-1, -9);

let a = 5;
let b = 99;
sum(a, b);

function fullName(fname, lname){
    let newName = `${fname} ${lname}`;
    return newName;
}

let person = fullName("Korede", "Ibrahim");
console.log(person);

let person2 = fullName("Ola", "Niyi");
console.log(person2);

let output = document.getElementById('output');

function addInput(a){
    // alert(a);
    output.value += a;
}


