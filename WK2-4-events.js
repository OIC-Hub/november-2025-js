function moveOver(elem){
    // alert('Welcome');
    console.log(elem);
    elem.style.backgroundColor = "green";
    elem.style.fontSize = "25px";
}

function moveOut(elem){
    elem.style.backgroundColor = "red";
    elem.style.fontSize = "16px";
}

function keyDown(element){
    console.log(element.value);
    
}

// let hello = document.getElementById('hello');
let hello = document.querySelector('#hello')
hello.addEventListener('mouseover', function(e){
    hello.style.backgroundColor = "red";
})

hello.addEventListener('mouseout', function(e){
    hello.style.backgroundColor = "green";
})

let google = document.querySelector('#google');
google.addEventListener('click', function(e){
    e.preventDefault();
})

let myform = document.getElementById('myform');
myform.addEventListener('submit', function(event){
    event.preventDefault();
})