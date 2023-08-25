console.log(`String Methods`);

//ES5
let stringCharacter = "This is \"Escape\" character";
console.log(stringCharacter);

//ES6
const methods = `My name "is" 'Rashed' Abdullah`;

console.log(methods.length);

//slice for string:
let sliceString = `Hello slice method`;
console.log(sliceString);

let sliced = sliceString.slice(6,11);
let sliced2 = sliceString.slice(-12,-7);
console.log(sliced); //slice
console.log(sliced2); //slice
console.log(sliceString);

//substring:
//(same of slice; but cannot accept negative indexs);
let substred = sliceString.substring(6,11);
console.log(substred); //slice

//substr();
let substr3 = sliceString.substr(6,5);
console.log(substr3);

//for chaking string how start; return true of false;
console.log(methods.startsWith(`My`));

//for chakimg string how ended;
console.log(methods.endsWith(`Abdullah`));

//for knowing my word included or not;
console.log(methods.includes('Rashed'));

//for repeat a string how many i want;
console.log(methods.repeat(4));

console.log(`i always want to say ${`Alahmadulillah `.repeat(5)}`);

//replace string:
let replacning = `My nephew is Labib`;
let replaced = replacning.replace(`Labib`, `ismat`);
console.log(replacning);
console.log(replaced);

//to Uppercase and lowercase:
let ToUpperCase = replacning.toUpperCase();
console.log(ToUpperCase);

let ToLowerCase = ToUpperCase.toLowerCase();
console.log(ToLowerCase);

//to concat two string: (maybe it's also array method);
let myNephew = replacning.concat(" ", replaced);
console.log(myNephew);

//trim() for remove unnassasary spaces; (from start and ends only)
let spaces = "      How many Space     ";
console.log(spaces);
console.log(spaces.trim());

//charAt(): for access a word only;
console.log(myNephew);
console.log(myNephew.charAt(1)); //y
console.log(myNephew.charAt(0)); //M
//Property access:
console.log(myNephew[0]); //M

//charCodeAt():
console.log(myNephew);
console.log(myNephew.charCodeAt(0))
console.log(myNephew.charCodeAt(1))
console.log(myNephew.charCodeAt(3))


//split(): to convert string to array:
let allName = "Khalid Naim Abrar Labib ismat"
console.log(allName);
console.log(allName.split()); //length: 0;
console.log(allName.split(``)) //every single charactar an array;
console.log(allName.split(` `)); //whenever have a space will a new arry item;

//indexOf:
let indexing = `Rashed Abrar Rashed Khalid ismat`;
console.log(indexing);
console.log(indexing.indexOf(`Rashed`)); //0
console.log(indexing.indexOf(`Abrar`)); //7;
console.log(indexing.indexOf(`ismat`)); //27;

//lastIndexOf:
console.log(indexing.indexOf(`Rashed`)); //0
console.log(indexing.lastIndexOf(`Rashed`)); //13
