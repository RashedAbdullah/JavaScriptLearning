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
    console.log(value); // it's good working;
}

arrayForForEach.forEach(functionForArray);

arrayForForEach.forEach((value)=>console.log(value)) //it's also working;


const cousins = [`Noman`, `ifran`, `Mamaun`, `Mahmud`, `Faruque`, `imadad`, `Shakil`, `Rashed`, `Anayetullah`];

function cousinsFunc(value){
    console.log(value);
}
cousins.forEach(cousinsFunc);

function csnFunc(value){
    console.log(`One of cousins ${value}`)
}

cousins.forEach(csnFunc);


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

const moreAssociative = [];
moreAssociative[`name`] = `Anayetullah`;
moreAssociative[`age`] = 20;
moreAssociative[`Profession`] = `Student`;

console.log(moreAssociative);


const arraylengthNew = new Array(40);
const arraylength = [40];
console.log(arraylength); //length: 1;
console.log(arraylengthNew); //length: 40;

//for check array or object;
console.log(Array.isArray(arraylength)); //true;
console.log(arraylength instanceof Array); //true;

// console.log(arr instanceof Object);
// console.log(allStdnts instanceof Array);
// console.log(arr);
// (don't know how working);

//Array to String;
const arrayForToString = [`ArrayToString`, 24, `AndMoreThan`];
console.log(arrayForToString.toString());

//To join array;
console.log(arrayForToString.join(`*`));
console.log(arrayForToString.join(` * `));
console.log(arrayForToString.join(` | `));
console.log(arrayForToString.join()); //(Like toString);

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

const concated = concat2.concat(`ismat`, `Bushra`, `Maymuna`);
console.log(concated);


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

arrforHeightandLowestNum = [34,45,43,556,5434,34];
const result = Math.max.apply(null, arrforHeightandLowestNum);
console.log(result); //it's good working;


const objInArr = [
    {fName: `Labib`, lName: `irfan`, born: 2020},
    {fName: `Rashed`, lName: `Abdullah`, born: 1999},
    {fName: `ismat`, lName: `Noman`, born: 2023}
]
console.log(objInArr);
console.log(objInArr.sort((a,b)=>{return a.born - b.born}));

objInArr.sort(function(a, b){
    let x = a.fName.toLowerCase();
    let y = b.fName.toLowerCase();
    
    if(x < y){return -1};
    if(x > y){return 1};

    return - 0;
});
console.log(objInArr); //maybe i cannot understood;


const newforEach = [`Dawra`, `Mishkat`, `Jalalain`, `Shorhe beqaya`, `kafia`];

newforEach.forEach((value)=>{console.log(value)});

console.log(`_____`);

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

const mapPractice = [12,23,54,34,55];

function mapFunc(value){
    return value + 1;
}

const mapReuslt = mapPractice.map(mapFunc);
console.log(mapReuslt);


function mapFunc2(value){
    const inHTML = document.querySelector(`.inHTML`);
    return inHTML.innerHTML = `i hava a value, and this value is ${value + 2}`
    // only last one (57) printed; (what's the resion); (i have resion);
}
const mapResult2 = mapPractice.map(mapFunc2);
console.log(mapResult2);

const mapArr = [`Labib`, `Irfan`, `Ismat`, `Maymuna`];

function arrFuncMap(value){
    return value + ` Mr.`
}

const resultArr = mapArr.map(arrFuncMap);
const inHTML2 = document.querySelector(`.inHTML2`);
inHTML2.innerHTML = resultArr; // it's Working good;


// filter:
console.log(`filter is here`)

const forfilter = [23,32,23,20,32,12,45,32];

function fncforfilter(value){
    return value < 30;
}

const filterrezult = forfilter.filter(fncforfilter);

console.log(filterrezult);


const newFilter = [`Birth`, `Live`, `Life`, `Love`, `Death`];

function filterFnc(value){
    return value === `Live`;
}

const resultFilter = newFilter.filter(filterFnc);
console.log(resultFilter);

const moreFilter = [32,43,54,3,54,43,44,54,32,65,78,23];

function moreFilterFunc(value){
    return value <50;
}
const resultMoreFilter = moreFilter.filter(moreFilterFunc);

const filter1 = document.querySelector(`.filter1`);

filter1.innerHTML = resultMoreFilter; //it's also good working;

//reduce:
console.log(`reduce is here`);

const reduceArr = [22,18,15,15,10,20];

function reduceFnc(total, value, index, array){
    console.log(total)
    console.log(`____`)
    return total + value;
}

const rezultofreduce = reduceArr.reduce(reduceFnc);

console.log(rezultofreduce);

const reduceStr = [`Fatima`, `Humayra`, `Maliha`, `Naima`];

function reduceStrFunc(total, value, index, array){
    return total + value;
}
const reduceResult = reduceStr.reduce(reduceStrFunc);
console.log(reduceResult);

//reduceRight():

console.log(`reduceRight is here`);

const rightReduce = [22,18,15,15,10,20];

function reduceRightFnc(totalRight, value, index, array){
    console.log(totalRight);
    console.log(`____`);
    return totalRight + value;
}
//  All are same, but that's will countet from right;
const rezultofreduceRight = rightReduce.reduceRight(reduceRightFnc);

console.log(rezultofreduceRight);


//every(): return true of false;
console.log(`every (return 'true' of 'false')`);

const everyArr = [23,4,54,65,34,33];

function everyFnc(value, index, array){
    return value > 4;
}

const rezultOfEvery = everyArr.every(everyFnc);

console.log(rezultOfEvery);


//some return true of false;
console.log(`some (return 'true' or 'false')`);

const someArr = [23,4,54,65,34,33];

function someFnc(value, index, array){
    return value < 5;
}

const rezultofSome = someArr.some(someFnc);
console.log(rezultofSome);


// indexOf
console.log(`indexOf is here`);

const indexOfArr = [`Hello`, `MyName`, `Labib`];

const rzltIndexOf = indexOfArr.indexOf(`Labib`) + 1;

console.log(rzltIndexOf);


//Array.from;
console.log(`Array.from is here`);

console.log(Array.from(`লাবিব ইরফান`));
console.log(Array.from(`Labib`));





//Go to "Spread.js" for more array methods;