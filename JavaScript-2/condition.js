// const arr=[3,6,9,1,8,16,14,13];
// for(let num = 0;num<arr.length;num++){
//     if(arr[num]%2===0){
//         console.log(`${arr[num]} is even number`)
//     }else{
//         console.log(`${arr[num]} is odd number`)
//     }
// }

// while vs do-while loop
// let i=1;
// while(i<=10){
//     if(i===5){
//         i++;
//         continue;
//     }
//     console.log(i)
//     i++;
// }
// let i=1;
// do{
//  console.log(i);
//  i++;
// }while(i<1);

// for (let i = 1; i <= 10; i++) {
//     if(i===5){
//         console.log("My name is Huda mia");
//     }
//     console.log(i) 
// }

// scope
// let a;
// console.log(a)
// let firstName="Huda";
//   let count=1;
//  for(let i of firstName){
//       console.log(count);
//       count++;
//  }

const person={
    name:"Riazuddin",
    age:26
}
// console.log(person["name"])

for(const key in person){
    console.log(key+" :", person[key]);
}



