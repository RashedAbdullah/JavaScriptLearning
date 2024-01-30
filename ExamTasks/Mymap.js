// let arr = [1,2,3,4,5,6];

// function myMap(myArr,cb){
//     let mapArr = [];
//     for(let i = 0; i < myArr.length; i++){
//         mapArr.push(cb(myArr[i]));
//     }
//     return mapArr;
// }

// let x = myMap(arr,function (item){
//     return item * 2;
// })

// console.log(x);



// const mapArr = [32,43,23,43,32,43];
// function mapFunc(myArr, callback){
//     let fnlMap = [];
//     for(let i = 0; i < myArr.length; i++){
//         fnlMap.push(callback(myArr[i]));
//     }
//     return fnlMap;
// }
// let result = mapFunc(mapArr, function(result){
//     return result + 1;
// });
// console.log(result)




//  make a map:
// const arr = [34,3,4,4,3,32,34];
// function thisIsMap(aArr, callback){
//     let pushedArr = [];
//     for(let i = 0; i < aArr.length; i++){
//         pushedArr.push(callback(aArr[i]))
//     }
//     return pushedArr;
// }

// let result = thisIsMap(arr, function(value){
//     return value + 1;
// });
// console.log(result);


// let arr = [9,8,7,6,5,4,3,2,1];
// function itsMap(arrValue, callback){
//     let myArr = [];
//     for(let i = 0; i < arrValue.length; i++){
//         myArr.push(callback(arrValue[i]));
//     }
//     return myArr;
// }

// const result = itsMap(arr, (value)=>{
//     return value + 1;
// })
// console.log(result);



// let arr = [9,8,7,6,5,4,3,2,1];
// let sorted =  arr.sort((a, b) => {
//     return a - b;
// })
// console.log(sorted);


// const arr = [54,23,56,3265,43,54,43,2,4,1];
// console.log(arr.sort((a , b) =>{
//     return a - b;
// }))

// let str = "Rashed Abdullah";
// let temp = "";
// for(let i = str.length -1; i >= 0; i--){
//     temp += str[i]
// }
// console.log(temp);


// const str = "HABIBULLAH";
// let temp = "";
// for(let i = str.length -1; i >= 0; i--){
//     temp += str[i];
// }
// console.log(temp);


let str = "Labib irfan";
let temp = "";
for(let i = str.length -1; i >= 0; i--){
    temp += str[i];
}
console.log(temp);