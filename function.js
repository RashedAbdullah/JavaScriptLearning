console.log(`function'is here`);

//two way to declar a function;

//function statement:
function newFunc(x, y) {
    let sum = x * y;
    return sum;
}

console.log(newFunc(20,5));
console.log(newFunc(20,9));

function aboutMe(name, age){
    console.log(`My name is ${name} and i'm ${age} year old!`)
}

aboutMe("Labib irfan", 3)
aboutMe("ismat maymuna", -1)
aboutMe("umama", 20)


//second way -- storing in a variable:
// (Function expression)
const storeFunc = function(x, y){
    return x + y;
}

console.log(storeFunc("Rashed", " abudllah"))
console.log(storeFunc(30, 50));



//we can pass a function as a argument;
function passFunc(name, callback){
    let myAge = 23;
    callback(myAge);
    console.log(`i'm ${name} `); //i'm Rashed Abdullah
}
function wellcome(myAge) {
    console.log(`my age is ${myAge}`); //my age is 23
}

passFunc(`Rashed Abdullah`, wellcome);


//we can return a function in a function;
function msg(name){
    console.log(`Welcome mr. ${name}`);
    return function(menu){
        console.log(`Do you like ${menu} mr. ${name}`)
    }
}

msg("Naim Ahmad") ("Coffee"); //Welcome mr. Naim Ahmad, Do you like Coffee mr. Naim Ahmad
msg("Labib irfan") ("tea"); //Welcome mr. Labib irfan, Do you like tea mr. Labib irfan




/*
first class function:

function of javaScript first class function because we can pass a function as a argument, and we can return a function from other function, and we can set a function as a variable;
*/

//as a argument:
function func1(name, callback){
    let myAge = 23;
    callback(myAge);
    console.log(`My name is: ${name}`)
}

function func2(age) {
    console.log(`and My age is: ${age}`)
}

func1(`Rashed Abdullah`, func2); //and My age is: 23, My name is: Rashed Abdullah

//Return a function:
function wlcm(name){
    console.log(`Welcome mr. ${name}`);
    return function(menu){
        console.log(`Do you like ${menu}`)
    }
}
wlcm(`Naim`)(`Tea?`); //Welcome mr. Naim, Do you like Tea?

//Store as a variable: (function expression)
const varFunc = function func(name){
    console.log(`Hello Mr. ${name}`)
}
varFunc(`Labib`); //Hello Mr. Labib



// function constructor:
const funcCons = new Function(`a`,`b`, `return a + b`);
console.log(funcCons(44,44)) //88



//funciton hoisting:
console.log(funcHoisting(22,22));

function funcHoisting(a,b){
    return a + b;
}


// function can be used as values:
function valuedFunc(a,b){
    return a + b;
}
const result = valuedFunc(55,55);
console.log(result); //110 (if we cannot 'return' will show 'undefined');


// typeof function show function, but he is described as object;
console.dir(valuedFunc); //(he have values like object);
function fubcObj(){
    return arguments.length;
}
console.log(fubcObj(`rashed`, `labib`, `mahmud`)); //3


//toString():
const saveString = fubcObj.toString();
console.log(saveString); //function fubcObj(){ return arguments.length;}


// arguemts of function is array: (he have 'length' and more properties of array);
function argumentOfFunc(a){
    console.log(arguments); //Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(arguments.length); //1
    console.log(arguments[0]); //34
}

argumentOfFunc(34);



// default parameter:
function defaultPRM(a, b, c){
    if(c === undefined){
        c = 10;
    }
    return a + b + c;
}
console.log(defaultPRM(5,5)); //20


function defaultPRM2(a, b, c = 10){
    return a + b + c;
}
console.log(defaultPRM2(5,5)); //20
console.log(defaultPRM2(5, 5, 50)); //60 (not default)




// arguments are passed by values:
function argByValue(x, y){
    x = x + 4;
    return x * y;
}

let e = 5;
let f = 3;

console.log(argByValue(e,f)); //27; (cause value of 'e' 9)
console.log(e); //5 (not changed original value);




// Object are passed by reference:
function objReference(x){
    x.one = 2;
    return x.one * x.two;
}

const objRefer = {
    one: 5,
    two: 4
}

console.log(objReference(objRefer)); //8

console.log(objRefer); //{one: 2, two: 4} (changed value of 'one');



// all function are methods, cause they are in window object, like this:
/*
window = {
    rsd: function(){
        return `hello world!`
    },
    lbb: function(){
        return `Labib irfan`
    }
}
window.rsd();
window.lbb();       */





// and more function practice in "IIFE.js" "Rest.js" and Default.js;