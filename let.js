console.log('let');
//let connot be redeclared; often var;

var a = 10;
console.log(a)
var a = 20;
console.log(a)
//it's okay, no issue;

// let b = 50;
// console.log(b)
// let b = 20;
// console.log(b)
//but it's no have permisson;


//var have global and function scope
var x = 12;
function scoping(){
    var x = 13;
    console.log(x)
}
scoping(); //13
console.log(x) //12

//let and const have three scope 1.global scope 2.function scope 3. block scope;

//global scope;
let y = 33;

//function scope;
function funcScope(){
    let y = 44;
    console.log(y)
}
funcScope(); //44
console.log(y); //33

//block scope;
if(5 === 5){
    let y = 55;
    console.log(y); //55
}



//const;
//global scope;
const z = 33;

//function scope;
function funcScope(){
    const z = 44;
    console.log(z) //44
}
funcScope()
console.log(z); //33

//block scope;
if(5 === 5){
    const z = 55;
    console.log(z); //55
}




//hoisting;
//var;

//var myName;
//myName = undefined;
myName = "Rashed Abdullah";
var myName;
console.log(myName);


//let;
//it's also be hoisting, but he cannot declared 'undefined';
myHome = "Feni, Bangladesh";
let myHome;
console.log(myHome);