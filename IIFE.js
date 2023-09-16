console.log(`'IIFE' immediately invoked function expressions`);
/*
IIFE
immediately invoked function expressions;
*/

(function selfinvokedFunc(){
    console.log("Hello IIFE")
})();


var summary = (function(){
    // return 10 + 10;
    console.log("hello function expression")
})();
// console.log(summary);


// without function Name:
(function(){
    console.log(`without fucntion name`)
})(); //without fucntion name



//when we need to value of private function (IIFE), then we can use function expression abd we can call this private function in another function, like this:
const sumOne = (function(){
    const Rashed = {
        name: "Rashed Abdulah",
        address: "Feni, Bangladesh"
    }
    return Rashed;
})();

const interface = (function(){
    console.log(`Hello ${sumOne.name}`) //Hello Rashed Abdulah
    console.log(`and i alive in ${sumOne.address}`) //and i alive in Feni, Bangladesh
})();



//ES6
//we can private how many string by using let or const;
{
    let rsd = `Rashed Abdullah`;
    let lbb = `Labib irfan`;
    let ismt = `ismat mymuna`;
    console.log(ismt); //ismat mymuna
}
// console.log(rsd)   //Uncaught ReferenceError: rsd is not defined at IIFE.js:45:13

{
    const num = 20;
    const num2 = 20.344;
    console.log(num2);
}
// console.log(num); error


{
    var myName = function(){
        console.log(`my name is rashed abdullah`);
    }
}
myName() //it's not private couse declared  by 'var';

{
    const myName2 = function(){
    console.log(`my name is labib irfan`);
}
myName2(); //my name is labib irfan
}
// myName2(); //now it's private;