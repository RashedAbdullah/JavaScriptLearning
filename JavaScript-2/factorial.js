// factorial(n!)=1*2*3*...*n 

function getFactorial(num){
    let factorial=1;
    for(let i=2;i<=num; i++){
        factorial*=i;
    }
    return factorial;
}

const result=getFactorial(5);
console.log(result);