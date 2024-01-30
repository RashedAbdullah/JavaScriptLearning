// let i = 0;
// while(i++ < 10){
//     console.log(i)
// }

// let x = 9;
// let y = 10;

// let a = ++x;
// console.log(x); //10



// let in_valid_array = [1, "", null, undefined, "name"];

// function validFunc(arr, validItems){
//     let arrs = [];
//     for(let i = 0; i < arr.length; i++){
//         if(in_valid_array){
//             arrs.push(validItems(arr[i]))
//         }
//     }
//     return arrs;
// }

// console.log(validFunc(in_valid_array, function(){}));



// let in_valid_array = [1, "", null, undefined, "name"];

// function validFunc(arr, func){
//     let validArr = [];
//     for(let i = 0; i < arr.length; i++){

//     }
// }



// array.find
// array.findIndex
// array.forEach

// let in_valid_array = [1, "", null, undefined, "name"];

// true values.
// function findFunc(arr, callback){
//     let arr2 = [];
//     for(let i = 0; i < arr.length; i++){
//         callback(arr[i])? arr2.push(arr[i]): false;      
//     }
//     return arr2;
// }

// console.log(findFunc(in_valid_array, function(value){
//     return value? true : false;
// }));



// false values.
// function falseValues(arr, callback){
//     let pushedArr = [];
//     for(let i = 0; i < arr.length; i++){
//         callback(arr[i])? pushedArr.push(arr[i]) : false;
//     }
//     return pushedArr;
// }

// console.log(falseValues(in_valid_array, function(value){
//     return !value? true:false;
// }));



// const findArr = [23,43,34,34,23,65,76,43];

// function findFunc(arr, callback){
//     for(let i =0; i < arr.length; i++){
//         let arrValue = arr[i];
//         if(arrValue){
//             return callback(arrValue);
//         }
//         return arrValue;
//     }
// }
// console.log(findFunc(findArr, function(find){
//     if(find === 34){
//     }
//     return  find;
// }));



// let trueFalseArr = [`text`, ``, 2, null, undefined, 0];

// function arrFunc(some, callback){
//     let trust = [];
//     for(let i = 0; i < some.length; i++){
//         if(callback(some[i])){
//             trust.push(some[i]);
//         }
//     }
//     return trust;
// }
// console.log(arrFunc(trueFalseArr, function(trues){
//     return trues ? true : false;
// }));