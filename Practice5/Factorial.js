// FactorialMachine
// function factorialMachine(num){
//     if(num < 2){
//         return 1;
//     } else {
//         return num * factorialMachine(num -1);
//     }
// }
// console.log(factorialMachine(5));


function factorial(num){
    if(num === 1){
        return 1;
    } else {
        return num * factorial(num -1);
    }
}
console.log(factorial(5));