// Reverse string with rest parameter:
// function reverseString(...str){
    
//     function reveseFunc(str){
//         let revers = ``;
//     for(let i = str.length -1; i >= 0; i--){
//         revers += str[i];
//     }
//     return revers;
//     }

//     let arrRevers = [];
//     str.map((value) => {
//         arrRevers.push(reveseFunc(value));
//     });
//     return arrRevers;
// }
// console.log(reverseString(`HABIB`,  `RASHED`));


//Reverse string:
// function reversString(str){
//     let str2 = ``;
//     for(let i = str.length -1; i >= 0; i--){
//         str2 += str[i];
//     }
//     return str2;
// }
// console.log(reversString(`Mamudul hasan`));

// let rvs = `Mahmud`;
// console.log(rvs.length -1);




// function restParaFunc(...rest){
//     function strFunc(value){
//         let str = ``;
//         for(let i = value.length -1; i>=0; i--){
//             str += value[i];
//         }
//         return str;
//     }

//     let arr = [];
//     rest.map((elem)=>{
//         arr.push(strFunc(elem));
//     })
//     return arr;
// }
// console.log(restParaFunc(`Rashed`, `habib`));



// function restReverse(...rst){
//     function strFunc(strValue){
//         let str = ``;
//         for(let i = strValue.length -1; i >= 0; i--){
//             str += strValue[i];
//         }
//         return str;
//     }

//     let arr = [];
//     rst.forEach((elem)=>{
//         arr.push(strFunc(elem));
//     })
//     return arr;
// }
// console.log(restReverse(`Huda mia`, `Nurul huda`));


// let arr1 = [`Huda mia`, `Habib`];
// const arr2 = [`Rashed`, `Labib`];

// let arrJoin = arr1.join(` + `);
// console.log(typeof arrJoin);



// let a = 5;
// let b = 10;

// let c = ++a;

// // console.log(c, a);

// let d = b++;

// console.log(d, b);