console.log("Array from now");

const pepeole = ["Rashed", "Labib", "Khalid", "Abrar", "mahmud", "jahid", "Naim"]
console.log(pepeole);
console.log(pepeole[2]);

//change array item;
pepeole[5] = "Ahmad";  //was jahid;
console.log(pepeole);

console.log(pepeole.length);
console.log(pepeole["length"]);


//for acces all item of array will use to loop;
const arrlength = pepeole.length;

for(let i = 0; i < arrlength; i++) {
    console.log("My Name is " + pepeole[i])
}

const students = ["Musharraf", "Khalid", "Abrar", "Zakaria hibban", "Rashed Abdullah", "Masud hasan"]

let allStdnts = students.length;
for(let i = 0; i < allStdnts; i ++) {
    console.log("students of this jamia: " + students[i]);
}





//Array methods;

//add item in last; push;
console.log(students);
students.push("Sayem");
console.log(students);
students.push("Anayet")
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
const arr = [0,1,2,3,4,5,6,7,8,9,10];
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

// access first element:
console.log(access[0]);
// last element:
console.log(access[access.length-1]);




//Go to "Spread.js" for more array methods;

