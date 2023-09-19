console.log(`'Async' is here`);

/*

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
displayNum(result); //13 (there we forced to called two functions)

// another way:
function displayNum2(some){
    console.log(some);
}

function calculator2(num1, num2){
    let sum = num1 + num2;
    displayNum2(sum);
}
calculator2(7,7); //14 (there our both function defended on anothr function);


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


*/ /*

// callback pattern:
let paymentSuccess = true;
let marks = 85;

function enroll(callback){
    console.log(`Enrollment is progress...`);

    setTimeout(() => {
        if(paymentSuccess) {
            console.log(`Your payment is success`)
            callback(); //when i got a function body as a argument body he will be call;
        } else {
            console.log(`Please payment first`);
        }
    }, 2000);

}

function progress(callback){
    console.log(`Course on progress...`);
    
    setTimeout(() => {
        if(marks >= 80){
            console.log(`Congrats! your mark is: ${marks}.`);
            callback();
        } else {
            console.log(`Sorry, you're failed, your marks is: ${marks}.`);
        }
    }, 2000);
}

function getCertificate(){
    console.log(`Your certificate in progress...`);

    setTimeout(() => {
        console.log(`Congrats! you got the certificate`)
    }, 2000);
}
// calling...
enroll(()=>{progress(getCertificate);}); //(in callback we sent only body, no call function())
//but when we need more callback func, how are we do? (callback hell)

//try another way:
/*

// without callback, function can hoisting, so we can call them befor inisilastion:
let paymentSuccess = true;
let marks = 80
function enroll(){
    console.log(`Enrollment is progress...`);

    setTimeout(() => {
        if(paymentSuccess) {
            console.log(`Your payment is success`)
            progress();
        } else {
            console.log(`Please payment first`);
        }
    }, 2000);

}

function progress(){
    console.log(`Course on progress...`);
    
    setTimeout(() => {
        if(marks >= 80){
            console.log(`Congrats! your mark is: ${marks}.`);
            getCertificate();
        } else {
            console.log(`Sorry, you're failed, your marks is: ${marks}.`);
        }
    }, 2000);
}

function getCertificate(){
    console.log(`Your certificate in progress...`);

    setTimeout(() => {
        console.log(`Congrats! you got the certificate`)
    }, 2000);
}
enroll(); //it's also okay, so why callback function here! */

/*


// Promises: (for release from callback hell)

let tasks = false;

console.log(`Task 1`);

// Promise definiton:
const promise = new Promise((resolve, reject)=>{
    //'Promise recive a function, 2 para, 1: resolve(), 2: reject;

    setTimeout(() => {

        if(tasks){
            resolve(`Task 2`);
        } else {
            reject(`failed task 2`);
        }

    }, 2000);

})
// Promise call: (comsuming code)
promise         //
    .then((value)=>{console.log(value)}) //'.then' have a function, and he recive a value;
    .catch((err)=>{console.log(err)});

console.log(`Task 3`);

*/

// example for promise:
let paymentCourse = true;
let marksCourse = 70;
function enrollCousre(){
    console.log(`Your enrollment in course on progress...`)

    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(paymentCourse){
                resolve(`Your payment of course is success`);
            } else {
                reject(`Sorry! your payment for course failed`);
            }
        }, 2000);
    });
    return promise;
}

function progressCourse(){
    console.log(`Your marks of course in progressing...`);

    const promise = new Promise((resolve, reject)=>{

        setTimeout(() => {
            if(marksCourse >= 80){
                resolve(`Your marks is enough for certificate`);
            }else {
                reject(`Sorry! not enough marks for certificate`);
            }
        }, 2000);
    })
    return promise;
}

function getCertificateCourse(){
    console.log(`Your certificate of course in progress...`);

    const promise = new Promise((resolve)=>{
        //const promise = new Promise.resolve(`Congrats! you got the certificate of course`);
        setTimeout(() => {
            resolve(`Congrats! you got the certificate of course`)
        }, 2000);
    });

    return promise;
}
// enrollCousre()
//             .then(progressCourse) //but how i show the value of resolve in here!
//             .then(getCertificateCourse)
//             .then((value)=>{console.log(value)})
//             .catch((err)=>{console.log(err)})

// async - await:
async function asyncFunc(){
    try {
        const msg1 = await enrollCousre();
        console.log(msg1);
        const msg2 = await progressCourse();
        console.log(msg2);
        const msg3 = await getCertificateCourse();
        console.log(msg3)
    } catch(err){
        console.log(err);
    }
}
asyncFunc();