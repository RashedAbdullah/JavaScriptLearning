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
console.log(rashed.address); //Dhaka, Bangladesh; (changed original value);


// in object order dosen't important, but in array order is very important;





//two way of access items:
console.log(rashed.fullName); //Rashed Abdullah
console.log(rashed.age); //23
console.log(rashed["address"]); //feni, bangladesh
console.log(rashed["mother"]); //Rabea Akter

// second syntax for when we want to add a dynamic value:
let adrs = `address`;

console.log(rashed[adrs]); //Dhaka, Bangladesh
console.log(rashed.adrs); //undefined

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


//to acces all items of object via 'for...in' loop:
let txt = ``;
for(items in addFunc) {
    console.log(addFunc[items]); //Labib irfan, Labib, irfan, feni,Bangladesh,
    console.log(items); //fName, lName, address, fullName
    console.log(txt += addFunc[items]); /*Labibirfanfeni, Bangladeshfunction(){
        console.log(`${this.fName} ${this.lName}`);} */
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



//delete:
const methods = {
    name: `Labib irfan`,
    age: 3,
    mother: `Maria`,
    father: `irfan`
}
console.log(methods.mother); //Maria
delete methods.mother;
console.log(methods.mother); //undefined

console.log(methods.father); //irfan
delete methods[`father`];
console.log(methods.father); //undefined

// JavaScript bulting object cannot be delete, it's will crash our systam;


// 'this' keyword:
const smt = {
    fName: `ismat`,
    lName: `maymuna`,
    father: `Noman`,
    mother: `Jannat`,
    fullName: function() {
        return console.log(`${this.fName} ${this.lName}`)
    }
}
smt.fullName(); //ismat maymuna ('this' means owner of the function);

// tyoeof 'fullName' in 'smt':
console.log(typeof smt.fullName); //function;

// function in out of the object:
smt.fatherANDmother = function(){
    return console.log(`My name is: ${this.fName}, my father is: ${this.father} and my mother is: ${this.mother}.`)
}
smt.fatherANDmother(); //My name is: ismat, my father is: Noman and my mother is: Jannat.;


// toUpperCase:
console.log(smt.fName.toUpperCase()); //ISMAT  (cannot change original value);

// toUpperCase: (function method)
smt.toUpper = function(){
    return console.log(`${this.fName} ${this.lName}`.toUpperCase())
}
smt.toUpper(); // ISMAT MAYMUNA





// four way to display object in HTML:

const displayObj = {
    name: `Labib`,
    father: `irfan`,
    mother: `Maria`
};

let display = document.querySelector(`.display`);
let display1 = document.querySelector(`.display1`);
let display2 = document.querySelector(`.display2`);
let display3 = document.querySelector(`.display3`);
let display4 = document.querySelector(`.display4`);
let display5 = document.querySelector(`.display5`);
let display6 = document.querySelector(`.display6`);


display.innerHTML = displayObj; //[object Object]

// by names:
display1.innerHTML = `I'm ${displayObj.name}, father: ${displayObj.father}, mother: ${displayObj.mother}`; //I'm Labib, father: irfan, mother: Maria

// by Values:
display2.innerHTML = Object.values(displayObj); //Labib,irfan,Maria
//  2:
const objArr = Object.values(displayObj);

display6.innerHTML = objArr; //Labib,irfan,Maria

//by keys: (for print them)
display3.innerHTML = Object.keys(displayObj); //name,father,mother

//by for in:
let txt2 = ``;
for(x in displayObj){
    txt2 += `${displayObj[x]}, `;
}
display4.innerHTML = txt2; //Labib, irfan, Maria,

//by JSON.stringify:
display5.innerHTML = JSON.stringify(displayObj); //{"name":"Labib","father":"irfan","mother":"Maria"}




// Object Accessors: (job interview)


// getter: ('get' keyword)
// ('get' better than a fucntion in object, cause he save the memory space)
const getter = {
    name: `Umama`,
    age: 22,
    language: `Arabic`,
    get nameAndLang(){
        return `My Name is: ${this.name} my language is: ${this.language}`;
    }
}
console.log(getter.nameAndLang); //My Name is: Umama my language is: Arabic


// setter: ('set' keyword)
const setter = {
    name: `Umama`,
    age: 22,
    language: ``,
    set setLang(langu){
        this.language = langu;
    }
}
console.log(setter.language); //(empty)

setter.setLang = `English`;
console.log(setter.language); //English


// Object.defineProperty(): (for use 'set' property in outsite of object;
const defineProperty = {
    fName: `Labib`,
    lName: `irfan`
}

Object.defineProperty(defineProperty, `FullName`,{
    get: function(){
        return this.fName + " " + this.lName;
    }
})
console.log(defineProperty.FullName); //Labib irfan






// Object constructor: (for blue print)

function Student(name, age, classNo){
    this.Name = name;
    this.age = age;
    this.classNo = classNo;
}

const labibIfan = new Student(`Labib`, 3, `Class One`);
const ismatNoman = new Student(`ismat maymuna`, -1, `No classNO.`, `Feni branch`);
console.log(labibIfan); //Student {Name: 'Labib', age: 3, classNo: 'Class One'}
console.log(ismatNoman); //Student {Name: 'ismat maymuna', age: -1, classNo: 'No classNO.'}

// for add new value in constructor function:
labibIfan.mother = `Maria`;
console.log(labibIfan); //Student {Name: 'Labib', age: 3, classNo: 'Class One', mother: 'Maria'}


//for default parameter:
function FuncConstructor(fName, lName){
    this.fName = fName;
    this.lNmae = `Abdullah`;
}
const rsdfl = new FuncConstructor(`Rashed`);
const frq = new FuncConstructor(`Faruque`);
console.log(rsdfl); //FuncConstructor {fName: 'Rashed', lNmae: 'Abdullah'}
console.log(frq); //FuncConstructor {fName: 'Faruque', lNmae: 'Abdullah'}


// Built-in JS constructor:
const newString = new String();
const newNumber = new Number();
const newBoolean = new Boolean();
const newObj = new Object();
const newArr = new Array();
const newDate = new Date();
const newRegExp = new RegExp();
// and more...
// ('Math()' not a construction function);



// JavaScript is prototype baset language, no class baset like ohters;


// for make a thing (like object) iterator, we want to find in this 'symbol.iterator':

const iterationObj = {};

iterationObj[Symbol.iterator] = function(){
    let n = 0;
    let done = false;
    return {
        next(){
            n += 10;
            if(n == 100) {done = true};
            return {
                value: n,
                done: done
            }
        }
    }
}

for(iterated of iterationObj){
    console.log(iterated);
}
// (it's complex, so need more practice and more knolage)