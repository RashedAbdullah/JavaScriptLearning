// let person1 = {
//     name: `Rashed`,
//     age: 24,
//     address: `Dhaka`
// }

// let person2 = {
//     name: `Labib`,
//     age: 3,
//     address: `Khulna`
// }
// person2.age = 22;

// // person1 = person2;

// person1 = {...person2, address: `Feni` };

// person2.age = 55;

// console.log(person1);
// console.log(person2);

// const obj5 = {
//     name: `Rashed`,
//     name: `Labib`
// }


// // Practice with array:
// let arr1 = [ 'Mahmud', 'Usman', 'Salman'];

// let arr2 = [ 'Saad', 'Labib', 'Hamid'];


// arr1 = [...arr2, 'Rashed', 'Aminul'];

// arr2[2] = 'Habib';

// console.log(arr1);


// // Redeclare and Reassign:
// var a = 5;
// var a = 10;
// console.log(a); //10

// //Only Reassign:
// let b = 5;
// b = 10;
// console.log(b); //10

// //No Redeclare, No Reassign:
// const c = 10;
// console.log(10); //10


// // Global and functional scope:
// var d = 15;
// function name() {
//     var d = 16;
// }
// console.log(d); //15

// // Block scope:
// {
//     let d = 10;
//     console.log(d); //1000
// }

 
// function arrEval(){

//     const arr3 = [ 10, 20, 30, 20, 20 ];
//     let sum = 0 + 50;
//     arr3.map((value)=>{sum += value});
//     return sum + 100;
// }

// console.log(arrEval());


// function rest(num1, num2, ...moreNums){

//     let sum = 0;
//     moreNums.map((num)=>{sum += num}); 
//     return sum + num1 + num2;
 
// }
// console.log(rest(5, 6, 11, 55, 77, 55));


// function restParameter(...numbers){
//     let sum = 0;
//     numbers.map((value)=>{sum += value})
//     return sum;
// }
// console.log(restParameter(10,30, 40,20));


// function prmtrs(num1, num2, ...more){
//     let fullNum = 0;
//     more.map((value)=>{fullNum += value});
//     return fullNum + num1 + num2;
// }
// console.log(prmtrs(3,4,100,50));


// function restFunc(...numbers){
//     let sum = 0;
//     numbers.map((value)=>{sum += value});
//     return sum;
// }
// console.log(restFunc(34,34));


// function moreRest(...rest){
//     let sum = 0;
//     rest.map((value)=>{sum = sum + value});
//     return sum;
// }
// console.log(moreRest(543,1,1));