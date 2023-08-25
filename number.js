console.log(`Number is comming`);

let x = 3.5453;
let y = 453;
console.log(x);
console.log(y);

//exponent;
let z = 343e5;
let a = 343e-5;
console.log(z);
console.log(a);

let e = 20;
let f = "40";
let g = 'Rashed'
console.log(isNaN(g)); //true;
console.log(isNaN(e)); //false;
console.log(isNaN(f)); //false;

console.log(typeof NaN); //numner;

console.log(typeof Infinity); //number;

//Hexadesiaml:
let hexa = 0x64;
console.log(hexa);


let toStringFor = 32;
console.log(toStringFor.toString(8));

//object syntax or new syntax:
let newSyntax = new Number(50);
console.log(typeof newSyntax); //object;



//number methods:

//toString:
let numToString = 499;
let converted = numToString.toString();
console.log(converted);
console.log(typeof converted); //string;

console.log((456).toString()); //456 (as a string);
console.log((40+34).toString()); //74 (as a string);