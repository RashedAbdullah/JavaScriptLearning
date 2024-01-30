// const obj = {
//     Person: "Rashed",
//     age: 24
// };

// function func(object){
//     const rest = {...obj};
//     rest.b = function(){
//         return this;
//     }
//     return rest;
// }
// const thisValue = func(obj);

// console.log(thisValue.b());


// function callFunc(names){
//     console.log(this.Person, names);
// }
// callFunc.call(obj, "Habibullah", "Huda mia");


// function applyFUnc(arr){
//     console.log(this.Person, arr);
// }
// applyFUnc.call(obj, ["Labib", "Habib", "Huda"]);



// const obj = {
//     name: "Rashed",
//     father: "abudllah",
//     more: {
//         name: "Labib",
//         father: "Irfan",
//         more: {
//             name: "Ismat",
//             fother: "Noman",
//             more: function(){
//                 return this;
//             }
//         }
//     }
// }
// console.log(obj.more.more.more());


// const thisInArrow = function(){
//     return this;
// }
// console.log(thisInArrow());


// const obj = {
//     name: "Rashed Abdullah",
//     languages: ["Bangla", "English", "Arabic", "Urdu"],
//     printLangs: function(){
//         this.languages.forEach((values)=>{
//             console.log(`${this.name} learning ${values}`)
//         });
//     }
// }
// obj.printLangs();



// let age = 99;

// let status = age > 17;
// console.log(status);



// const obj = {
//     name: "as-sunnah",
//     list: ["HTML", "CSS", "JavsScript"],
//     print: function(){
//         let thisValue = this;
//         this.list.forEach(function(value){
//             console.log(`${thisValue.name} made ${value} courses`);
//         });
//     }
// }
// obj.print(); 


// const obj2 = {
//     name: "as-sunnah",
//     list: ["HTML", "CSS", "JavsScript"],
//     print: function(){
//         this.list.forEach(function(value){
//             console.log(`${this.name} made ${value} courses`)
//         });
//     }
// }
// obj2.print.call(obj2); 



// const obj = {
//     name: "Rashed",
//     age: 24,
//     profession: "Student"
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// const entries = Object.entries(obj)

// for(let i = 0; i < entries.length; i++){
//     for(let j = 0; j < entries[i].length; j++){
//         console.log(entries[i][j]);
//     }
// }

// for(i of entries){
//     for(j of i){
//         console.log(j)
//     }
// }



// const setTime = setTimeout(() => {
//     console.log('This is first')
// }, 2000);

// let i = 9;

// if (i < 10){
//     clearTimeout(setTime)
// };



// let str = "Rashed Abdullah";
// let reversed = "";
// for(let i = str.length -1; i >= 0; i--){
//     reversed += str[i];
// }
// console.log(reversed);


// function reverseFunc(str){
//     let temp = "";
//     for(let i = str.length -1; i >= 0; i--){
//         temp += str[i];
//     }
//     return temp;
// }
// console.log(reverseFunc("Rashed Abdullah"));



// function restReverse(...rest){

//     function values(this){
        
//     }

//     let temp = "";
//     for(let i = rest.length -1; i >= 0; i--){
//         temp += rest[i];
//     }
//     return temp;
// }
// console.log(restReverse(`This is`, " ", `More values`));



// function arg(){
//     console.log(arguments)
// }
// arg('This is not the end', 32,45,54,54,43,43);


// Best way to swiping:
// var a = 10;
// var b = 20;
// [b, a] = [a, b];

// console.log(a, b);