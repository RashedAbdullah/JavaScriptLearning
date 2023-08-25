console.log("function");

//two way to declare a function;

//(function statement);
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


//second way; storing in a variable;
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
    console.log(`i'm ${name} `)
}
function wellcome(age) {
    console.log(`my age is ${age}`);
}

passFunc(`Rashed Abdullah`, wellcome); //?


//we can return a function in a function;
function msg(name){
    console.log(`Wellcome mr. ${name}`);
    return function(menu){
        console.log(`Do you like ${menu} mr. ${name}`)
    }
}

msg("Naim Ahmad") ("Coffee");
msg("Labib irfan") ("tea");




/*
first class function:

function of javaScript first class function becouse we can pass a function as a argument, and we can return a function from other function, and we can set a function as a variable;
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

func1(`Rashed Abdullah`, func2);

//Return a function:
function wlcm(name){
    console.log(`Welcome mr. ${name}`);
    return function(menu){
        console.log(`Do you like ${menu}`)
    }
}
wlcm(`Naim`)(`Tea?`);

//Store as a variable:
const varFunc = function func(name){
    console.log(`Hello Mr. ${name}`)
}
varFunc(`Labib`);







// For more function methods go to "Rest.js" parameters and Default.js;