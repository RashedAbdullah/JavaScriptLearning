// let num = [18,15,30,45,33,60];

// for(let i = 0; i < num.length; i++){

//     if(num[i] % 3 === 0 && num[i] % 5 ===0 ){
//         console.log(`Fizzbuzz ${num[i]}`);

//     }else if(num[i] % 5 === 0){
//         console.log(`Fizz ${num[i]}`);

//     } else if (num[i] % 3 === 0) {
//         console.log(`buzz ${num[i]}`);
//     }

// }


// let nums = [33,5,9,55,35,15,6,21,27];

// for(let i = 0; i < nums.length; i++){
    
//     if(num[i])
// }

// let a = 5;
// let b = 10;

// let temp = a;
// a = b;
// b = temp;

// console.log(a, b);


// let x = 5;
// let y = 10;

// let temp2 = x;

// x = y;
// y = temp2;
// console.log(x,y);




// Maximum:
// let Nums = [32,43,54,65,45,23];
// let maxNum = 0;

// for(let i of Nums){
//     if(i > maxNum){
//         maxNum = i;
//     }
// }
// console.log(maxNum);




// let numbers = [23,43,23,4332,2,43,23,43,32,34];
// let maxNumber = 0;

// numbers.map((value)=>{

//     if(value > maxNumber){
//         maxNumber = value
//     }
// });
// console.log(maxNumber);



// let allNumbers = [34,56,34,5,-43, 0, -45,34,56, 0,-76,33422,57,88,0];

// allNumbers.map((value)=>{
//     if(value === 0){
//         console.log(`Zero number is ${value}`);
//     } else if(value < 0){
//         console.log(`Negetive is ${value}`);
//     } else {
//         console.log(`Positive is ${value}`);
//     }
// })





// let aString = "Hello world!";
// console.log(aString.indexOf(this.length -1));

// for(let i = 0; (i < aString.length -1;) i --){
//     console.log(aString)
// }


// Reverse string:
// function reverseFunc(sthing){
//     let text = "";
//     for(let i = sthing.length -1; i >=0; i--){
//         text += sthing[i]
//     }
//     return text;
// }
// console.log(reverseFunc(`Rashed`));



// function rvrsFunc(texts){
//     let sthings = "";
//     for (let i = texts.length -1; i >= 0; i--) {
//         sthings += texts[i];
        
//     }
//     return sthings;
// }
// console.log(rvrsFunc(`Hello`));



// function revFunc(some){
//     let string = ``;
//     // for(let )
// }



// Reverse array:
// const arrReverse = [`Rashed`, `Faruque`, `Irfan`, `Noman`];

// for(let i = arrReverse.length -1; i >= 0; i--){
//     console.log(arrReverse[i]);
// }



// function rvrsFunc(txts){
//     let str = "";
//     for(let i = txts.length -1; i >= 0; i--){
//         str += txts[i];
//     }
//     return str;
// }
// console.log(rvrsFunc(`Rashed Abdullah`));

// function rvrsString(rvrs){
//     let txts = ``;
//     for(let i = rvrs.length -1; i >=0; i--){
//         txts += rvrs[i];
//     }
//     return txts;
// }
// console.log(rvrsString(`This is reverse function`));



// // Reverse array:
// const rvrsArr = [`Rashed`, `Faruque`, `Irfan`, `Noman`];
// for(let i = rvrsArr.length -1; i >= 0; i--){
//     console.log(rvrsArr[i]);
// }


// function restFuncRev(...rest){

//     function mainReverse(resting){
//         let str = ``;
//         for(let i = resting.length -1; i>=0; i--){
//             str += resting[i];
//         }
//         return str;
//     }
    
//     let arr = [];
//     rest.forEach((elem)=>{
//         let variable = mainReverse(elem);
//         arr.push(variable);
//     })
//     return arr;

// }
// console.log(restFuncRev(`Rashed Abdullah`, `Faruque Abdullah`, `Habibur Rahaman`));



// function restFunc(...restParaa){

//     function restElem(rest){
//         let str = "";
//         for(let i = rest.length -1; i >= 0; i--){
//             str += rest[i];
//         }
//         return str; 
//     }
//         let arrRev = [];
//         restParaa.forEach((elem)=>{
//             const ctchFunc = restElem(elem);
//             arrRev.push(ctchFunc);
//         })
//         return arrRev;
// }

// console.log(restFunc(`Rashed`, `Habibur rahman`));


// FactorialMachine
// function factorialMachine(num){
//     if(num < 2){
//         return 1;
//     } else {
//         return num * factorialMachine(num -1);
//     }
// }
// console.log(factorialMachine(5));