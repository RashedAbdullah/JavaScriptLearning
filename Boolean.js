console.log(`Boolean is here`)

//Return true of false;

let a = true;
let b = false;

// Everything with a value is "true" and without value is "false"
// (falsi value); for enterview
let x = 0;
let y = 1;
let z = "";
let u;

console.log(Boolean(x));  //false;
console.log(Boolean(y));  //true;
console.log(Boolean(z)); //false;
console.log(Boolean(undefined)); //false;
console.log(Boolean(null)); //false;
console.log(Boolean(false)); //false;
console.log(Boolean(NaN)); //false;


console.log(Boolean(55 > 44)); //true;
console.log(Boolean(55 < 44)); //false;

console.log((55 > 44)); //true;
console.log((55 < 44)); //false;

let f = false; //typeof: false;
var nb = new Boolean(false) // typeof: object;


let c = 5;
let d = "5";
console.log(c == d);  //true;
console.log(c === d); //false;

console.log(c != d);  //false;
console.log(c !== d);  //true;