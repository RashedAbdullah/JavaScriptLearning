console.log("Array from now");

const pepeole = ["Rashed", "Labib", "Khalid", "Abrar", "mahmud", "jahid", "Naim"]
console.log(pepeole);
console.log(pepeole[2]);  //Khalid

//change array item;
pepeole[5] = "Ahmad";  //was jahid;
console.log(pepeole);
console.log(pepeole[5]); //Ahmad;

console.log(pepeole.length);
console.log(pepeole["length"]);


//for access all item of array will use to loop;
const arrlength = pepeole.length;

for(let i = 0; i < arrlength; i++) {
    console.log("My Name is " + pepeole[i])
}

for(let i =0; i < arrlength; i++) {
    console.log(`My freind is ${pepeole[i]}`)
}

const students = ["Musharraf", "Khalid", "Abrar", "Zakaria hibban", "Rashed Abdullah", "Masud hasan"]

let allStdnts = students.length;
for(let i = 0; i < allStdnts; i ++) {
    console.log("students of this jamia: " + students[i]);
}

for(let i =0; i < allStdnts; i++){
    console.log(`My Classmate is: ${students[i]}`);
}

console.log(`New Practice`);

const arrForPractice = [`monkey`, `sparrot`, `cow`, `animal`];

for(i = 0; i < arrForPractice.length; i++) {
    console.log(`Name of animal is: ${arrForPractice[i]}`);
}

const arrforPractice2 = [`World`, `Word`, `Between`, `Around`];

for(i = 0; i < arrforPractice2.length; i++) {
    console.log(`i learned new word: ${arrforPractice2[i]}`);
}





//Array methods;

//add item in last; push;
console.log(students);
students.push("Sayem");
console.log(students);
students.push("Anayet")
console.log(students);

students[students.length] = `LastOnePushedByLength`;
console.log(students);


//Remove item form last; pop;
students.pop();
console.log(students);
students.pop();
console.log(students);
students.pop();
console.log(students);
students.pop();
console.log(students);


//remove from start; shift;
students.shift();
console.log(students);
students.shift();
console.log(students);

//add in start; unshift;
students.unshift("Rashed Abdullah");
console.log(students);
students.unshift("Labib irfan");
console.log(students);


//for index number;

console.log(students.indexOf("Abrar"));
console.log(students.indexOf("Rashed Abdullah"));
console.log(students.indexOf("Rashed Abdullah"));

//for remove items by index numbers;
students.splice(2, 3);
console.log(students);

//we can also replace by splice;
students.push(`Umar Abdullah`);
console.log(students);
students.splice(3,0, `Mabrur`, `Muntasir`);
// (first for who is the position; second is how many element will deleted);
console.log(students);


//for remove from any index number to last of array;
pepeole.splice(3);
console.log(pepeole);


//we can store in a variable spliced arrays by index number;
let spliced = pepeole.splice(2);
console.log(spliced);


//for concat multiple arrays;
console.log(students.concat(pepeole))
console.log(students);
console.log(pepeole);



//and we have more huge multiple method of array; so we need to practise thaht methods;



//Destructuring;
const rsd = [`Rashed Abdullah`, `student`, 23];

//ES5
var myName = rsd[0];
console.log(myName);
var profession = rsd[1];
console.log(profession);
var age = rsd[2];
console.log(age);

//ES6
const [name, myProfession, myAge ] = rsd;
console.log(name);
console.log(myProfession);
console.log(myAge);


const Anayetullah = [`Anayetullah`, `Stundet`, `Jamia islamia pathiya`, 20];

const [NameOfMe, MypresentProfession, MyStudy, AgeOfMe] = Anayetullah;

console.log(AgeOfMe); //20
console.log(NameOfMe); //Anayetullah
console.log(MyStudy); //Jamia islamia pathiya





//To covert nodeList to array; (Still now i dosen't know about this);

//ES5
const nodeToArr = Array.prototype.slice.call(NodeList);
console.log(nodeToArr);

//ES6
const nodeToArr6 = Array.from(NodeList);
console.log(nodeToArr6);



//when we want to loop in array:

//ES5
const arr = [`Rashed`,`Labib`,`ismat`,3,4,5,6,7,8,9,10];
let arrlnth = arr.length;

for(var i = 0; i < arrlnth; i++) {
    console.log("Go looping: " + arr[i]);
    if(i === 5) break;
}


//ES6; (for of)  (Still it's cannot working; i don't know why)?
for(const i of arr) {
    console.log(`Go looping in ES6: ${arr[i]}`);
    if(i === 5) break;
}

const arr6 = [`Takmil`, `Fazilat2`, `Fazilat1`, `Sanabia`, `Mutawassita4`];
console.log(arr6)

for(const i of arr6) {
    console.log(`All class of malibagh jamia ${arr6[i]}`);
}

const loopInArr = [`Anayetullah`, `Amdadullah`, `Salma`, `Mahadi`, `Salman`];

for(i of loopInArr){
    console.log(`Name is: ${loopInArr[i]}`);
}




//when we want to search a element of arry:

// ES5:
var numbers = [20,45,67,345,76,45];

var fndNumber = numbers.map(function(num){
    return num === 76;
})
console.log(fndNumber);
//index number:
console.log(fndNumber.indexOf(true));  //4
//element by index number:
console.log(numbers[fndNumber.indexOf(true)]); //76


// ES6

//for index number:
console.log(numbers.findIndex(number => number === 76));   //4

console.log(numbers.findIndex(number => number === 67));   //2

const findIndexForPractice = [32,44,23,544,32,54];
const findedindex = findIndexForPractice.findIndex(indexNumber => indexNumber === 54);
console.log(findedindex);




// access full array:
const access = [`Labib`, `Rashed`, `ismat`];
document.getElementById('arr').innerHTML = access;

text = "<ul>";

for(let i = 0; i < access.length; i++){
    console.log(text += "<li>" + access[i] +"</li>");
}
text += "</ul>"

// access first element:
console.log(access[0]);
// last element:
console.log(access[access.length-1]);


//forEach;

const arrayForForEach = [`Sahihul bukhari`, `Sahihu muslim`, `Sunanut tirmiji`, `Sunanu abi dawud`];

function functionForArray(value){
    let arr6 = document.querySelector("#arr6");
    arr6.innerHTML = value; //why printed last one only, i don't know;
    console.log(value);
}

arrayForForEach.forEach(functionForArray);

arrayForForEach.forEach((value)=>console.log(value)) //it's also working;


let arr7  = document.querySelector("#arr7");

arr7.innerHTML = arrayForForEach;

function forPush(){
    arrayForForEach.push("Sunanun Nasayee");
    arr7.innerHTML = arrayForForEach;
}


//Associative array:

const arrayPesron = [];
arrayPesron[`Name`] = `Rashed Abdullah`;
arrayPesron[`Profession`] = `Student`;
arrayPesron[`Age`] =24;

console.log(arrayPesron);
let arr8 = document.querySelector('#arr8');
arr8.innerHTML = arrayPesron;


const arraylengthNew = new Array(40);
const arraylength = [40];
console.log(arraylength);
console.log(arraylengthNew);

//for check array or object;
console.log(Array.isArray(arraylength));
console.log(arraylength instanceof Array); //true;


//Array to String;
const arrayForToString = [`ArrayToString`, 24, `AndMoreThan`]
console.log(arrayForToString.toString())

//To join array;
console.log(arrayForToString.join(`*`));
console.log(arrayForToString.join(` * `));
console.log(arrayForToString.join(` | `));

//For delete a element;
delete arrayForToString[2];
console.log(arrayForToString);


//concat:

const concat1 = [`Saad`, `Salman`, `Mahmud`];
const concat2 = [`Mahadia`, `Ayesha`, `Salma`];

const afterConcat1 = concat1.concat(concat2);
console.log(afterConcat1);

const afterConcat2 = concat1.concat(`Labib`, `Rashed`);
console.log(afterConcat2);


//slice:
const sliced1 = afterConcat2.slice(0,3)
console.log(sliced1);
console.log(afterConcat2); //not changed;

const sliced2 = afterConcat2.slice(3);
console.log(sliced2);



//sort();
console.log(afterConcat2.sort());

//reverse();
console.log(afterConcat2.reverse());

const anyNumbers = [23,43,10,54,65,76];
const numbersInString = [`23`,`43`,`100`,`10`,`54`,`200`,`65`,`76`];
console.log(anyNumbers);
console.log(anyNumbers.reverse());

console.log(anyNumbers.sort());
console.log(numbersInString.sort());
console.log(anyNumbers.reverse());

const numbersForSortFunctiion = [67,34,33,23,2,4];
console.log(numbersForSortFunctiion.sort(function(a,b){
    return a - b;
}));


//for heighest number and lowest number;
Math.max.apply(null, [33,43,43,4,54,34,34,223,56]);
Math.min.apply(null, [33,43,43,4,54,34,34,223,56]);


const objInArr = [
    {fName: `Labib`, lName: `irfan`, born: 2020},
    {fName: `Rashed`, lName: `Abdullah`, born: 1999},
    {fName: `ismat`, lName: `Noman`, born: 2023},
]
console.log(objInArr);
console.log(objInArr.sort((a,b)=>{return a.born - b.born}));

objInArr.sort(function(a, b){
    let x = a.fName.toLowerCase();
    let y = b.fName.toLowerCase();
    
    if(x < y){return -1}
    if(x > y){return 1}

    return - 0;
});
console.log(objInArr);


const newforEach = [`Dawra`, `Mishkat`, `Jalalain`, `Shorhe beqaya`, `kafia`];

newforEach.forEach((value)=>{console.log(value)});

console.log(`------`);

function fncforEachprmtr(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);

    console.log(`end of forEach`);
}

newforEach.forEach(fncforEachprmtr);


//map:
console.log(`map`)

const forMap = [10,30,10,20];

function fncforMap(value){
    return value * 2;
}

const rejultofMap = forMap.map(fncforMap);

console.log(rejultofMap);


// filter:
console.log(`filter`)

const forfilter = [23,32,23,20,32,12,45,32];

function fncforfilter(value){
    return value < 30;
}

const filterrezult = forfilter.filter(fncforfilter);

console.log(filterrezult);

//reduce:
console.log(`reduce`);

const reduceArr = [22,18,15,15,10,20];

function reduceFnc(totalofArr, value, index, array){
    console.log(totalofArr)
    console.log(`____`)
    return totalofArr + value;
}

const rezultofreduce = reduceArr.reduce(reduceFnc);

console.log(rezultofreduce);

//reduceRight():

console.log(`Reduce Right`);

const rightReduce = [22,18,15,15,10,20];

function reduceRightFnc(totalRight, value, index, array){
    console.log(totalRight);
    console.log(`____`);
    return totalRight + value;
}

const rezultofreduceRight = rightReduce.reduceRight(reduceRightFnc);

console.log(rezultofreduceRight);


//every():
console.log(`every (return 'true' of 'false')`);

const everyArr = [23,4,54,65,34,33];

function everyFnc(value, index, array){
    return value > 4;
}

const rezultOfEvery = everyArr.every(everyFnc);

console.log(rezultOfEvery);



console.log(`some (return 'true' or 'false')`);

const someArr = [23,4,54,65,34,33];

function someFnc(value, index, array){
    return value < 5;
}

const rezultofSome = someArr.some(someFnc);
console.log(rezultofSome);


// indexOf
console.log(`indedOf`);

const indexOfArr = [`Hello`, `MyName`, `Labib`];

const rzltIndexOf = indexOfArr.indexOf(`Labib`) + 1;

console.log(rzltIndexOf);


//Array.from;
console.log(`Array.from`);

console.log(Array.from(`আমার নাম লাবিব ইরফান`));
console.log(Array.from(`Labib`));





//Go to "Spread.js" for more array methods;