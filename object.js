console.log("Object is here (the king of JavaScript)");

// four way to creatting object:

//object literal syntax:
const rashed = {
    fullName: "Rashed Abdullah",
    father: "Mawlana Abdullah",
    mother: "Rabea Akter",
    address: "feni, bangladesh",
    age: 23,
}

// Second way:
const rashed2 = {};
rashed2.name = `Rashed Abdullah`;
rashed2.goal = `Web and App development`;


// Third way ('new' syntax):
const rashed3 = new Object();
rashed3.name = `Rashed Abdullah`;
rashed3.father = `Mawlana abdullah`;


//fourth way: 
const rashed4 = rashed;
console.log(rashed.address); //feni, bangladesh
rashed4.address = `Dhaka, Bangladesh`;
console.log(rashed.address); //Dhaka, Bangladesh; (changed original value)





//two way of access items:
console.log(rashed.fullName); //Rashed Abdullah
console.log(rashed.age); //23
console.log(rashed["address"]); //feni, bangladesh
console.log(rashed["mother"]); //Rabea Akter

//to add new item:
rashed.education = "jamia madania feni";
console.log(rashed.education); //jamia madania feni


//to replace a item via another one:
rashed.address = "Dhaka, Bangladesh";
console.log(rashed.address); //Dhaka, Bangladesh


//and we can add function in object as a item/method:
const addFunc = {
    fName: "Labib",
    lName: "irfan",
    address: "feni, Bangladesh",
    fullName: function(){
        console.log(`${this.fName} ${this.lName}`);
    }
}
addFunc.fullName(); //Labib irfan


//to acces all items of object via 'for in' loop:
for(items in addFunc) {
    console.log(addFunc[items]); //Labib irfan, Labib, irfan, feni,Bangladesh,
    console.log(items); //fName, lName, address, fullName
}


//array in object:
const names = {
    entroduction: "All students",
    allName: ["Rashed", "Labib", "Fahim", "Mahmud"],
    ages: [23, 3, 25, 24],
}
console.log(names); //{entroduction: 'All students', allName: Array(4), ages: Array(4)}

//to acces items:
console.log(names.allName[3]); //Mahmud
console.log(names.allName[0]); //Rashed




//objects in array:
const objInArr = [
    "Ahmad Abdullah",
    {Name: "Mhummad", age: 7, father: "yahya"},
    "Abida sultana umama"
]
console.log(objInArr); //(3) ['Ahmad Abdullah', {…}, 'Abida sultana umama']

//to acces item:
console.log(objInArr[1].father); //yahya
console.log(objInArr[1].age); //7


console.log(`----------------ES6`)



//when we pass a primitive datatype as a parameter or arguments, he send a copy; no original data;
var a = 5;
var b = 10;
console.log(`Value of a: ${a} and value of b ${b}`) //a= 5; b = 10;
function ValueOfPrimitive(a, b){
    console.log(`Value of a: ${a} and value of b ${b}`) //a= 5; b = 10;
    var temp = a;
    a = b;
    b = temp;
    console.log(`Value of a: ${a} and value of b ${b}`) //a= 10; b = 5;
}
ValueOfPrimitive(a, b);
console.log(`Value of a: ${a} and value of b ${b}`) //a= 5; b = 10;

//same thing if we do in another way (object):
console.log(`object`)
const obj = {
    a: 5,
    b: 10
}
console.log(`Value of a: ${obj.a} and value of b: ${obj.b}`) //a = 5, b = 10;
function arrFunc(x){
    console.log(`Value of a: ${x.a} and value of b: ${x.b}`) //a = 5, b = 10;
    var temp = x.a;
    x.a = x.b;
    x.b = temp;
    console.log(`Value of a: ${x.a} and value of b: ${x.b}`) //a = 10, b = 5;
}
arrFunc(obj)
console.log(`Value of a: ${obj.a} and value of b: ${obj.b}`) //a = 10, b = 5; (???)

console.dir([]) //Array(0)
let str = "Labib irfan";
console.dir(str); //Labib irfan
console.log(str.length); //11 (counting from one; not zero);


//wrapper: (constructor function or blue print)
let str2 = new String (`Rashed Abdullah`);
console.log(str2); //String {'Rashed Abdullah'}
console.dir(str2); //String

let num = new Number (30);
console.log(num); //Number {30}
console.dir(num); //Number

let bool = new Boolean (4 === 4);
console.log(bool); //Boolean {true}
console.dir(bool); //Boolean


//blue print:
const Person = function(name, job, age){
    this.name = name;
    this.job = job;
    this.age = age;
}

let rsd = new Person("Rashed", "Student", 23);
let lbb = new Person("Labib irfan", "Child", -3);
let ismat = new Person("ismat maymuna", "Child", -1);

console.log(rsd); //Person {name: 'Rashed', job: 'Student', age: 23}; (value of 'this' rsd);
console.log(rsd.name) //Rashed;
console.log(lbb); //Person {name: 'Labib irfan', job: 'Child', age: -3}; (value of 'this' lbb);
console.log(lbb.name); //Labib irfan;
console.log(ismat); //Person {name: 'ismat maymuna', job: 'Child', age: -1};
console.log(ismat.name); //ismat maymuna;


//Blue print with method:
const BluePrint = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.dateOfBirth = function(){
        console.log(`${this.name} is born in ${2023 - this.age}`);
    }
}

let rsd2 = new BluePrint("Rashed", 23, "student");
rsd2.dateOfBirth(); //Rashed is born in 2000

let lbb2 = new BluePrint("labib", 3, "child");
lbb2.dateOfBirth(); //labib is born in 2020

let ismat2 = new BluePrint("ismat", 1, "chlid");
ismat2.dateOfBirth(); //ismat is born in 2022


// Destructuring:

// ES5
const obj2 = {
    name: `Rashed Abdullah`,
    profession: `Student`
}
console.log(obj2);

var objName = obj2.name;
var objProfession = obj2.profession;
console.log(objName); //Rashed Abdullah
console.log(objProfession); //Student

// ES6
let {name, profession} = obj2;
console.log(name); //Rashed Abdullah
console.log(profession); //Student

//when we want to change the key:
const {name: myName, profession: myProfession} = obj2;

console.log(myName); //Rashed Abdullah
console.log(myProfession); //Student


//in a complex object:
const firstObj = {
    secondObj: {
        thirdObj: {
            myHome: `Feni, Bangladesh`
        }
    }
};
console.log(firstObj.secondObj.thirdObj); //{myHome: 'Feni, Bangladesh'}

//if we want to destructuring;
const {secondObj:{thirdObj:{myHome}}} = firstObj;

console.log(myHome); //Feni, Bangladesh

//if we want to change the key name:
const {secondObj:{thirdObj:{myHome:myAddress}}} = firstObj;

console.log(myAddress); //Feni, Bangladesh
console.log(myHome); //Feni, Bangladesh