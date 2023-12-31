console.log(`'Arrow Function / Fat arrow' is here`);

// arrow function is a Syntactic Sugar;

/*
arrow function always have been function expression;
so will show error when we use as a hoisting, often normal functions;
*/

const arrowFunc = () => {
    console.log(`this is arrow function`);
}
arrowFunc(); //this is arrow function

const arrowFunc2 = () => console.log(`Second style of arrow function`);
arrowFunc2(); //Second style of arrow function


//by usin 'map' if we want to someone's age, we can code like this in ES5:
var dob = [1999, 2020, 2022, 2002];

var currentAge5 = dob.map(function(oneDob){
    return 2023 - oneDob;
})
console.log(currentAge5); //(4) [24, 3, 1, 21]

//and in ES6:
const currentAge6 = dob.map(oneDob => 2023 - oneDob);
console.log(currentAge6); //(4) [24, 3, 1, 21]

//map with multiple arguments:
const currentAge62 = dob.map((oneDob, index) => `${index}: ${2023 - oneDob}`);
console.log(currentAge62); //(4) ['0: 24', '1: 3', '2: 1', '3: 21']

/*
one line arrow function return autometicly;
but when he have multiple line, then want to 'return' keyword
*/

const currentAge622 = dob.map((oneDob, index) => {
    let age = 2023 - oneDob;
    return `${index}: ${age}`;
});
console.log(currentAge622); //(4) ['0: 24', '1: 3', '2: 1', '3: 21']




//Lexical 'this' keyword:

//ES5
const obj = {
    aFunc: function(){
        console.log(this); //{aFunc: ƒ} (owner object)
        return function(){
            console.log(this); //Window
        }
    }
}
obj.aFunc()(); 


console.log(`_______`)

//ES6:
const obj6 = {
    aFunc: () => {
        console.log(this); //Window
        return () => console.log(this); //Window
    }
}
obj6.aFunc()();

//this in HTML: //(This is 'this' element [object Window])
window.addEventListener(`load`, ()=>{document.querySelector(`.showthis`).innerHTML = `This is 'this' element ${this}`;}) //This is 'this' element [object Window]


//in normal function value of 'this' will defined how to called he, and in arrow function value of 'this' difined who called he;