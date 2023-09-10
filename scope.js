console.log(`'scope' is here`);

/*
1.global scope:
2.function scope:
3.local scope / block scope:
*/



// var :

// 1.global scope: (window object);
var y = 10;
console.log(y); //10;

{
    var y = 15;
    console.log(y) //15;
}
console.log(y); //15; (changed value of y);

// 2.funtion scope:
var x = 20;
console.log(x); //20;
function varScpe(){
    var x = 30;
    console.log(x) //30;
}
varScpe();

console.log(x); //20 (not changed global value);



// let and const :

// global:
let l = 25;
const z = 35;
console.log(`${l}, ${z}`); //25, 35;

function letConst(){
    console.log(`${l}, ${z}`); //25, 35;
}
letConst()

{
    console.log(`${l}, ${z}`); //25, 35;
}


// function scope:
function funcScope(){
    let l = 30;
    const z = 40;
    console.log(`${l}, ${z}`); //30, 40;
}
funcScope();
console.log(`${l}, ${z}`); //25, 35;


// local / block scope:
{
    let l = 30;
    const z = 40;
    console.log(`${l}, ${z}`); //30, 40;
}
console.log(`${l}, ${z}`); //25, 35;