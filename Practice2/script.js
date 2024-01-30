// let arr = [5,4,3,5,8,3,1,2,6,7];

// for(let i of arr){

//     if( i % 2 === 0){
//         console.log(`Even number is ${arr[i]}`)
//     } else {
//        console.log(`Odd number is ${arr[i]}`)
//     }
// };

// arr.map((value)=>{
//     if(value % 2 !== 0){
//         console.log(`Odd is ${value}`)
//     }
// });

// arr.forEach((value)=>{
//     if(value % 2 === 0){
//         console.log(`Even is ${value}`)
//     }
// });

// for(let i = 0; i < arr.length; i++){

//     if(arr[i] % 2 === 0){
//         console.log(`This is Even ${arr[i]}`)
//     }
// }



// let i = 1;
// while(i<=10){
//     console.log(console.log(i));
//     i++
// }

// do {
//     console.log(i)
// } while(i < 10);




// Hoisting:
// x = 5;
// var x;
// console.log(x);

// y = 10;
// let y;  //Uncaught ReferenceError: Cannot access 'y' before initialization
// console.log(y);

// z = 10;
// const z; //SyntaxError: Missing initializer in const declaration


// console.log(a);  //undefined; couse hoisting variable declaration, no initialization.
// var a = 15;


// Print unique numbers:
// let num = [34,35,43, 34, 54,34,45,34,45];
// let unique = [];

// const newSet = new Set(num);
// console.log(newSet);

// for(let i of num){

//     // console.log(unique.indexOf());

//     if(unique.indexOf(i) === -1){
//         unique.push(i);
//     }
   
// }
// console.log(unique);

// const setSomthing = new Set([23,54,32,23,23,34,54, `Rashed`, `Rashed`]);
// console.log(setSomthing); //'23' printed first one only, cause 'set' is unique;
// // (Set(4) {23, 54, 32, 34})


// function restPara(...resting){
//     console.log(resting);
// }
// restPara(`Rashed`, `Faruque`, `Irfan`);