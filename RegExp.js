console.log(`Regular Expression is here`);
//For search texts and replace that;


//Pettern:

let rsd = /Rashed Abdullah/i //(i for case-insensitive(include UpperCase and LowerCase));
console.log(rsd); // /Rashed Abdullah/i (in red color);


let myName = `Rashed Abdullah`;
console.log(myName);
//Normal search:
let searchMyName = myName.search(`Abdullah`);
console.log(searchMyName); //7;
//with small 'a':
console.log(myName.search(`abdullah`)); //-1;

//Search with case-inSensitive:
let searchRegExp = myName.search(/abdullah/i);
console.log(searchRegExp); //7;

//Replace:
let lbb = myName.replace(`Rashed`, `Labib`);
console.log(lbb); //Labib Abdullah;

//Replace with case-inSensitive:
let lbbi = myName.replace(/rashed/i, `Labib`);
console.log(lbbi); //Labib Abdullah;

//'g' global:
let aboutMe = `My Name is Rashed Abdullah and i have a freind, his name also rashed`;
let aboutLbb = aboutMe.replace(/Rashed/ig, `Labib`);
console.log(aboutLbb); //My Name is Labib Abdullah and i have a freind, his name also Labib;

// match: global:
console.log(aboutMe.match(/[`r`]/ig)); // (3) ['R', 'r', 'r']
console.log(aboutMe.match(/[`a`]/ig));//(10) ['a', 'a', 'A', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
console.log(aboutMe.match(/[d]/ig));   // (5) ['d', 'd', 'd', 'd', 'd']
console.log(aboutMe.match(/[`d`]/ig)); // (5) ['d', 'd', 'd', 'd', 'd']
console.log(aboutMe.match(/d/ig));     // (5) ['d', 'd', 'd', 'd', 'd']





// Three way to write RegExp:


// Brackets:[]

console.log(aboutMe.match(/[rs]/)); // ['s', index: 9, input: 'My Name is Rashed Abdullah and i have a freind, his name also rashed', groups: undefined]
console.log(aboutMe.match(/[rs]/g)); //(7) ['s', 's', 'r', 's', 's', 'r', 's']
console.log(aboutMe.match(/[rs]/ig)); //(8) ['s', 'R', 's', 'r', 's', 's', 'r', 's']


// ^: (for skip noted words)
console.log(aboutMe.match(/[^rsdaehny]/ig)); //(29) ['M', ' ', 'm', ' ', 'i', ' ', ' ', 'b', 'u', 'l', 'l', ' ', ' ', 'i', ' ', 'v', ' ', ' ', 'f', 'i', ',', ' ', 'i', ' ', 'm', ' ', 'l', 'o', ' ']


// [a-z]:
console.log(aboutMe.match(/[a-d]/ig)); //16) ['a', 'a', 'd', 'A', 'b', 'd', 'a', 'a', 'd', 'a', 'a', 'd', 'a', 'a', 'a', 'd']


// [^a-z]:
console.log(aboutMe.match(/[^a-d]/ig)); //(52) ['M', 'y', ' ', 'N', 'm', 'e', ' ', 'i', 's', ' ', 'R', 's', 'h', 'e', ' ', 'u', 'l', 'l', 'h', ' ', 'n', ' ', 'i', ' ', 'h', 'v', 'e', ' ', ' ', 'f', 'r', 'e', 'i', 'n', ',', ' ', 'h', 'i', 's', ' ', 'n', 'm', 'e', ' ', 'l', 's', 'o', ' ', 'r', 's', 'h', 'e']


// [0-9]:
let numbers = `56789123478912`;
console.log(numbers.match(/[2-5]/g)); //(5) ['5', '2', '3', '4', '2']


// [^0-9]:
console.log(numbers.match(/[^2-5]/g)); //(9) ['6', '7', '8', '9', '1', '7', '8', '9', '1']



// (ab|dc):
console.log(aboutMe.match(/(ab|bd)/ig)); // ['Ab']
console.log(aboutMe.match(/(ab|bd)/g)); // ['bd']




//Metacharacter:
let forMeta = `My Name is Ismat! my born in 2023 @#$%^*_`;


// .:   (for select every character one by one as array without new line)
console.log(forMeta.match(/./g)); //(41) ['M', 'y', ' ', 'N', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'I', 's', 'm', 'a', 't', '!', ' ', 'm', 'y', ' ', 'b', 'o', 'r', 'n', ' ', 'i', 'n', ' ', '2', '0', '2', '3', ' ', '@', '#', '$', '%', '^', '*', '_']


// \w:  (for match all caharacter and under score(_) no another symbols):
console.log(forMeta.match(/\w/g)); //(26) ['M', 'y', 'N', 'a', 'm', 'e', 'i', 's', 'I', 's', 'm', 'a', 't', 'm', 'y', 'b', 'o', 'r', 'n', 'i', 'n', '2', '0', '2', '3', '_']


// \W: (only for symbols)
console.log(forMeta.match(/\W/g)); //(15) [' ', ' ', ' ', '!', ' ', ' ', ' ', ' ', ' ', '@', '#', '$', '%', '^', '*']


// \d: (for all digits)
console.log(forMeta.match(/\d/g)); // ['2', '0', '2', '3']


// \D: (without digits)
console.log(forMeta.match(/\D/g)); // (37) ['M', 'y', ' ', 'N', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'I', 's', 'm', 'a', 't', '!', ' ', 'm', 'y', ' ', 'b', 'o', 'r', 'n', ' ', 'i', 'n', ' ', ' ', '@', '#', '$', '%', '^', '*', '_']


// \s: (for every spaces)
console.log(forMeta.match(/\s/g)); // (8) [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']


// \S: (without spaces)
console.log(forMeta.match(/\S/g)); // (33) ['M', 'y', 'N', 'a', 'm', 'e', 'i', 's', 'I', 's', 'm', 'a', 't', '!', 'm', 'y', 'b', 'o', 'r', 'n', 'i', 'n', '2', '0', '2', '3', '@', '#', '$', '%', '^', '*', '_']


// \b: (for match a charackter in start or end of any word)
console.log(forMeta.match(/\bN/g)); //N       (in Name)

// in end:
console.log(forMeta.match(/y\b/g)); // (2) ['y', 'y']    (in My)


// \B for reverse of \b;  \O for match null characters; \n for match new line characters;




// Quantifiers:
let forQuantifiers = `cceefgheeaabcadd443556544424789`;


// a+:
console.log(forQuantifiers.match(/e+/g)); //(2) ['ee', 'ee']

// a*:
console.log(forQuantifiers.match(/de*/g)); //(2) ['d', 'd']

// a?:
console.log(forQuantifiers.match(/cb?/g)); //(3) ['c', 'c', 'c']

// a$   ^a   and more methods:




// RegExp methods:


let reg = (/he/g);
let match;
while (match = reg.exec(`rashed abdullah`)) {
    console.log(match); //['he', index: 3, input: 'rashed abdullah', groups: undefined]
};


// test():
console.log((/ef/g).test(`abcd`)); // false;
console.log((/ef/).test(`cdefg`)); // true;