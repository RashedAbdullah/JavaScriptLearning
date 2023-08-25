console.log(`Arrow Function / Fat arrow`);

console.log(`Syntactic Sugar`);

//arrow function always function expression;
//so will show error when we use as a hoisting; often function statement in ES5;

const arrowFunc = () => {
    console.log(`this is arrow function`);
}
arrowFunc();

const arrowFunc2 = () => console.log(`Second style of arrow function`);
arrowFunc2();


//by usin 'map' if we want to someone's age, we can code like this in ES5;
const dob = [1999, 2020, 2022, 2002];

const currentAge5 = dob.map(function(oneDob){
    return 2023 - oneDob;
})
console.log(currentAge5);

//and in ES6;
const currentAge6 = dob.map(oneDob => 2023 - oneDob);
console.log(currentAge6); 

//map with multiple arguments;
const currentAge62 = dob.map((oneDob, index) => `${index}: ${2023 - oneDob}`);
console.log(currentAge62);

//one line arrow function cannot want to 'return', couse autometicly return;
//but when arrow function is in multiple line, then want to 'return' keyword;

const currentAge622 = dob.map((oneDob, index) => {
    let age = 2023 - oneDob;
    return age;
});
console.log(currentAge622);




//Lexical 'this' keyword;

//ES5
const obj = {
    aFunc: function(){
        console.log(this);
        return function(){
            console.log(this);
        }
    }
}
obj.aFunc()();

console.log(`...............`)

//ES6
const obj6 = {
    aFunc: () => {
        console.log(this);
        return () => console.log(this);
    }
}
obj6.aFunc()();