// c= create.
// u = update.
// d = delete.
// r = read.

// Create:
// const obj = {};
// // Update:
// obj.name = `Rashed`;


// const obj2 = {
//     fName: "Rashed",
//     fullName: {
//         fName: `Rashed`,
//         lName: `Abdullah`
//     }
// }

// for(let i in obj2){
//     for(let i in obj2[i].fullName){
//         console.log(obj2[i])
//     }
// }

// let obj = {
//     b: 10,
//     obj2: {
//         c: 30
//     }
// }

// for(let key in obj){
//     if(typeof obj[key] === `object`){
//         let  sec_obj = obj[key];
//         for(let key2 in sec_obj){
//             console.log(sec_obj[key2]);
//         }
//     } else {
//         console.log(obj[key]);
//     }
// }




const obj = {
    name: "Rashed",
    age: 24,
    name2: "Habibullah"
}
console.log(Object.keys(obj))
const arr = Object.values(obj);
arr[2] = "Huda mia";
console.log(arr)