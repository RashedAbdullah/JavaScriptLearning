// let a = 5;
// let b = 10;
// [a,b] = [b,a];
// console.log(a, b); // 10 5

// const arr = [23,34,423,4,32,322,2,1,34,5,5];
// console.log(arr.sort(function(a,b){
//     return b - a;
// }));


// async function thisFunc(){
//     const thisValue = await this;
//     console.log(thisValue);
// }
// thisFunc();


const sortArr = [3,4,53,5,43,54,34,5,34,43];
const sorted = sortArr.sort((a, b)=> a - b);
console.log(sorted);