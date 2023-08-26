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





//To covert nodeList to array;

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


//ES6; (for of)
for(const i of arr) {
    console.log(`Go looping in ES6: ${arr[i]}`);
    if(i === 5) break;
}

const arr6 = [`Takmil`, `Fazilat2`, `Fazilat1`, `Sanabia`, `Mutawassita4`];
console.log(arr6)

for(const i of arr6) {
    console.log(`All class of malibagh jamia ${arr6[i]}`);
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


//Go to "Spread.js" for more array methods;