console.log(`'Async' is here`);


// for show result we need two function:
function displayNum(some){
    let displayResult = document.querySelector(`.displayResult`);
    displayResult.innerHTML = some;
}

function calculator(num1, num2){
    let sum = num1 + num2;
    return sum;
}
let result = calculator(6,7);
displayNum(result); //13 (there we forced to called two function)

// another way:
function displayNum2(some){
    console.log(some);
}

function calculator2(num1, num2){
    let sum = num1 + num2;
    displayNum2(sum);
}
calculator2(7,7); //14 (there our evry function defended on anothr function);


// Solution is 'callback' function: (sending a function as a parameter);
function displayNumber(sum){
    console.log(sum);
}

function numbers(num1, num2, callbackFunc){
    let sumNumber = num1 + num2;
    if(callbackFunc) callbackFunc(sumNumber);
}

numbers(55,55, displayNumber);



// Asynchronous behevior


// setTimeout(para1: function, para2: timeout(millisecond)):
console.log(`First line`);
setTimeout(()=>{ //it's build-in asynchronous function;
    console.log(`Second line`);
},2000);
console.log(`Third line`);

// setInterval:
setInterval(() => {
    console.log(`4th line`);
}, 9000);
console.log(`5th line`);




// callback pattern:
let paymentSuccess = true;
let marks = 80;

function enroll(callbackFunc2){
    console.log(`enrollment is progress...`);

    setTimeout(() => {
        if(paymentSuccess) {
            console.log(`Your payment is success`)
        } else {
            console.log(`Please payment first`);
        }
    }, 2000);

}

function progress(callbackFunc2){
    console.log(`Course on progress...`);
    
    setTimeout(() => {
        if(marks => 80){
            callbackFunc2();
        } else {
            console.log(`Sorry, you're failed`);
        }
    }, 3000);
}

function getCertificate(){
    console.log(`Your certificate in progress...`);

    setTimeout(() => {
        console.log(`Congrats! you got the certificate`)
    }, 2000);
}