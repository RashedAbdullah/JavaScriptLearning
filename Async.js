console.log(`Async Callback`);

function displayfunc(some){
    console.log(some)
}

function calculator(number1, number2, callback){
    let sum = number1 + number2;
    if(callback) callback(sum);
    return sum;
}

calculator(6,6, displayfunc); //12
calculator(55,6, displayfunc); //61
calculator(6,6); //12