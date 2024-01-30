// let arr = [3,4,5,6,7,8,9];

// let reduceValue = arr.reduce(function(prevValue, crntValue){
//     prevValue[crntValue] = 5 * 2;
//     return prevValue;
// }, {})
// console.log(reduceValue);


// function add(a, b){
//     return a, b;
// }
// function main(a, b, callback){
//     let c = a + b;
//     let d = a - b;
//     let e = callback(a, b);
//     return function(){
//         return c * d * e;
//     }
// }

// let func = main(5,5, add);
// console.log(func());


// let arr = [1,2,3,4,5,6];

// let reduced = arr.reduce((prevValue, currentValue, currentIndex, mainArray)=>{
//     return prevValue * currentValue;
// },1)
// console.log(reduced);

// monthly cost:
// let costs = [
//     {
//         name: `Admission`,
//         cost: 5000
//     },
//     {
//         name: `My self`,
//         cost: 3000
//     },
//     {
//         name: `others`,
//         cost: 1050
//     }
// ];

// let mostPrice = costs.reduce((prev, current)=>{

//     prev[current.name] = current.cost;
//     return prev;

// }, [])
// console.log(mostPrice);

// let arr = [
//     {
//         name: "Labib",
//         age: 25
//     },
//     {
//         name: "Noman",
//         age: 15
//     },
//     {
//         name: "Rashed",
//         age: 22
//     },
//     {
//         name: "Habib",
//         age: 13
//     },
//     {
//         name: "Mahmud",
//         age: 35
//     },
// ]


// console.log(a)
// var a = 30;


// let func =  a => a;
// console.log(func(10));



// const arr = [34,55,65,56,70,60];
// let finded =  arr.find((value)=>{
//     return value > 60;
// })
// console.log(finded);


// const arr2 = [34,55,65,56,70,59];

// const findReduce = arr2.reduce((prev, current)=>{
    
//     return prev * current;
    
// }, 60);
// // fffffff This is not the end so be carefull. so beutyfull by happ
// console.log(findReduce);


// let arr = [343,34,45,65];
// let finded = arr.reduce((prev, current)=>{

//     if(current > 50 && prev === undefined){
//         prev.push(current);
//     }
//     return prev;

// }, undefined);
// console.log(finded);

// let mapMaking = arr.reduce((prev, current, currentIndex, arr)=>{
//     if(current > 50){
//         prev.push(current);
//     }
//     return prev;
// },[])
// console.log(mapMaking);