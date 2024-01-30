// (function(){
//     var a = 5;
//     var b = 10;

//     function closure(){
//         return a + b;
//     }
//     console.log(closure())
// })();


// function outFunc(){
//     var one = 10;
//     var two = 20;

//     function inner(){
//         return one * two;
//     }

//     return inner;
    
// }
// console.log(outFunc()());


// function outterFunc(){
//     var x = `Rashed`;
//     var y = `Abdullah`;
    
//     return function innerFunc(){
//         return `${x} ${y}`;
//     }
// }
// console.log(outterFunc()());


// in nomal counter function we have two problem:

// let counter = 0;
// function counterFunc(){
//     return counter += 1;
// }
// console.log(counterFunc())
// console.log(counterFunc())
// console.log(counterFunc())//3

//there we can increse value of conter with reassign or ++ operator, that's big prolem.

//secend problem when we declare variable in the function:
// function counterFunc2(){
//     let counter = 0;
//     counter += 1;
//     return counter;
// }
// console.log(counterFunc2()); //1
// console.log(counterFunc2()); //1
// console.log(counterFunc2()); //1
// it's always return 1, cause function set the value 0 first, then increse 1 every single time.


// so for both problems we need to set variable in a function and increse with another function, that's closure function.


// (function outterFunc(){
//     let counter = 0;
//     function innerFunc(){
//         return counter += 1;
//     }
//     console.log(innerFunc());
//     console.log(innerFunc());
//     console.log(innerFunc()); //3
// })();

// More example:
// function outterFunc(){
//     let counter = 0;
//     function innerFunc(){
//         counter += 1;
//     }
//     innerFunc()


//     return counter;
// }

// console.log(outterFunc())


// const IIFEFunc = (()=>{
//     let counter = 0;
//     return ()=>{
//         counter += 1;
//         return counter;
//     }
// })();
// console.log(IIFEFunc());
// console.log(IIFEFunc());
// console.log(IIFEFunc());