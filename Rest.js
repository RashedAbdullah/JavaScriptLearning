console.log(`Rest Parameters`);


// When we don't know how many agrumets we need, then we use to 'arguments' method in ES5, and Rest method (like Spread) in ES6;

// ES5:
function argmnts() {
    for(var i = 0; i < arguments.length; i++){
        console.log('argumet passed: ' + arguments[i]);
    }
}
argmnts('Banladesh', 'India', 'Pakistan', 'Chaina', 'Russia');

// it's won't work in arrow function;

/*
const arrow = () => {
    for(var i = 0; i < arguments.length; i++){
        console.log('argumet passed: ' + arguments[i]);
    }
} 
*/

// arrow(`Rashed`, `Labib`)

//and we cannot use to map, forEach, filter, reduce etc.;



//ES6 (Rest parameter);

function restPara(...anything){
    for(let i = 0; i < anything.length; i++){
        console.log(`Argument passed: ${anything[i]}`);
    }
}
restPara(`Animation`, `Logo`, `Transition`, `Rotation`);

//Rest in arrow function:
const restInarrow = (...multiple) => {
    for(let i = 0; i < multiple.length; i++){
        console.log(`Argument in arrow: ${multiple[i]}`);
    }
}
restInarrow(`Arrow function`, `unlimitade arguments`);

//when we know some parameters, but not all, then: 
const someArgu = (name, age, ...others) => {
    console.log(`My name is ${name} and i'm ${age} years old!`);
    others.map(moreArguments => console.log(`Other argumets are: ${moreArguments}`));
}
someArgu(`Rashed Abdullah`, 23, `Bangladesh`, `Russia`, `Chaina`);