console.log(`All about typeof is here`);

// "typeof" is a operator, so he dosn't have any Datatype(typeof);


// Boolean (true false):
console.log(typeof true);  //Boolean;
console.log(typeof false); //Boolean;


// NaN:
console.log(typeof NaN);  //Number;


// String and number both are:
let a = `Rashed`;
let b = 24;
let r = a + b;
console.log(typeof r);  //String;

let rv = b + a;
console.log(typeof rv);  //String;

let divide = a / b;
console.log(divide);  //NaN;
console.log(typeof divide);  //Number;


// function:
console.log(typeof function(){}); //Function;


// null:
console.log(typeof null);  //Object;

let notSomthing = "";
console.log(typeof notSomthing); //String;


// Undefined:
let myName;
console.log(typeof myName);  //Undefined;

console.log(typeof undefined); //Undefined;

// Array:
console.log(typeof [1,2,3]);


// Object:
console.log(typeof {name:`Labib`, age: 23}); //Object;

console.log(typeof typeof {name:`Labib`, age: 23}); //String;

console.log(typeof typeof {name:`Labib`, age: 23}); //String; (couse boject as a word string);


// new:
console.log(typeof new Date());  //Objcet;
console.log(typeof new Object());  //Objcet;
console.log(typeof new Array());  //Objcet;
console.log(typeof new Set());  //Objcet;
console.log(typeof new Map());  //Objcet;
console.log(typeof new String());  //Objcet;
console.log(typeof new Number());  //Objcet;


// constructor:
let cons = `Rashed`.constructor;
console.log(cons);  //ƒ String() { [native code] };

console.log(typeof cons);  //function;


const consArr = [2,4,6].constructor;
console.log(consArr); //ƒ Array() { [native code] }

console.log(typeof consArr);  //function;


// Array of Object?
function isArray(myArray){
    return console.log(myArray.constructor.toString().indexOf(`Array`) > -1)
}
isArray([2,4,6]);  //true;
isArray({name: `labib`, father: `irfan`}); //false;


function isArray2(myArray2){
    return console.log(myArray2.constructor === Array);
}
isArray2({name: `labib`, father: `irfan`}); //false;
isArray2([2,4,6]);  //true;