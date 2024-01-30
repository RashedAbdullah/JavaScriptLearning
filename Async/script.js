// functions with callback function:
// function order(person, cb){
//     console.log(`${person} ordered for a coffee`);
//     cb();
// }

// function prosess(completeFunc){
//     setTimeout(()=>{
//         console.log(`Your order in progress...`);
//         completeFunc();
//     },2000);
// }

// function readyFunc(cb){
//     setTimeout(() => {
//         console.log("Now you can drink...");
//         cb()
//     }, 2000,);
// }

// function complete(cb){
//     setTimeout(() => {
//         console.log(`Your order have been completed!`);
//         cb();
//     }, 2000);
// }

// function goFunc(){
//     setTimeout(() => {
//         console.log("Now you can go...");
//     }, 2000);
// }



// async function asyncFunc(){
//     const awaitValue = await order("Huda mia",()=>{
//         prosess(()=>{
//             readyFunc(()=>{
//                 complete(()=>{
//                     goFunc();
//                 });
//             });
//         });
//     });
//     console.log(awaitValue);
// }
// asyncFunc();



// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
  
//   asyncCall()



// order("Huda mia",()=>{
//     prosess(()=>{
//         readyFunc(()=>{
//             complete(()=>{
//                 goFunc();
//             });
//         });
//     });
// });



// const promise = new Promise((resolve, reject)=>{
//     let ask = true;
//     if(ask){
//         const obj = {
//             name: "Rashed",
//             father: "Abdullah",
//             age: 24
//         }
//         resolve(obj);
//     } else {
//         reject(new Error("This error from user"));
//     }
// });

// promise
//         .then(res=>console.log(res))
//         .catch(resect=>console.log(resect.message));








// // Promise:
// let availableSit = true;

// const promise = new Promise((resolve, reject)=>{
//     if(availableSit){

//         const obj = {
//             name: "Rashed",
//             age: 24,
//             profession: "Student"
//         }
//         resolve(obj);
//     } else {
//         reject(new Error("This is error function for my promise"));
//     }
// });

// promise
//         .then(resolve=>console.log(resolve));
//         //.catch(reject=>console.log(reject.message)); //message is a property for error.


// function func1(){
//     return "Functon one";
// }
// function func2(){
//     return "function two";
// }
// function func3(){
//     return "Functon three";
// }
// function func4(){
//     return "function four";
// }

// function asyncFunc(){
//     try{
//         const one = func1();
//         console.log(one);
//         const two = func2();
//         console.log(two);
//         const three = func4();
//         console.log(three);
//     } catch(err){
//         console.log(err)
//     }
// }
// asyncFunc();
// console.log("end of func1234");




// console.log("Start");
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data fetched");
//             resolve();
//         },3000);
//     })
// }
// function processData(){
//     fetchData();
//     console.log("Processing Data");
// }
// processData();
// console.log("End");



// let arr = 100;
// function promiseFunc(){
//     return new Promise((resolve, reject)=>{
//         setInterval(()=>{
            
//             if(arr >= 60){
//                 console.log(arr--);
//             } else {
//                 console.log(arr ++);
//             }
//         },1000)
//     })
// }

// promiseFunc();

// const arr = [
//     3,4,5,4,5,3,23,45
// ]

// console.error(arr);



// for(let i = 1; i < 61; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i * 1000)
// };

// function timer() {
//     var time=10;
//     for(i=0; i<time; i++){
//      setTimeout(console.log(i+1), 1000);
//     }
//   }

//   setInterval(timer, 10000);



// var i = 0;
// setInterval(()=>{
//     console.log(i++);
// }, 1000);


const obj = {
    nam: "Rashed",
    age: 24
}


function order(person){
    console.log(`${person} ordered for a coffee`);
    return obj.nam;
}

function prosess(){
    setTimeout(()=>{
        console.log(`Your order in progress...`);
    },2000);
}

function readyFunc(){
    setTimeout(() => {
        console.log("Now you can drink...");
    }, 2000,);
}

function complete(){
    setTimeout(() => {
        console.log(`Your order have been completed!`);
    }, 2000);
}

function goFunc(){
    setTimeout(() => {
        console.log("Now you can go...");
    }, 2000);
}

function asyncFunc(){
    return Promise.resolve("Reject");
}




// let key = prompt("this is key");
// let value = prompt("This is value");
// console.log(key)

// // Set in local storage:
// localStorage.setItem(key, value);
// console.log(localStorage.getItem("Rashed"))
