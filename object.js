console.log("Object start now");

const rashed = {
    fullName: "Rashed Abdullah",
    father: "Mawlana Abdullah",
    mother: "Rabea Akter",
    address: "feni, bangladesh",
    age: 23,
}
console.log(rashed);

//two type of access items;
console.log(rashed.fullName);
console.log(rashed.age);
console.log(rashed["address"]);
console.log(rashed["mother"]);

//to add new item;
rashed.education = "jamia madania feni";
console.log(rashed);


//to replace a item;
rashed.address = "Dhaka, Bangladesh";
console.log(rashed);


//and we can add function in object as a item/method;
const addFunc = {
    fName: "Labib",
    lName: "irfan",
    address: "feni, Bangladesh",
    fullName: function(){
        console.log(this.fName + " " + this.lName);
    }
}
addFunc.fullName();


//to acces all items of object; for in loop;
for(items in addFunc) {
    console.log(items);
}


//array in object;
const names = {
    entroduction: "All students",
    allName: ["Rashed", "Labib", "Fahim", "Mahmud"],
    ages: [23, 3, 25, 24],
}
console.log(names);

//to acces items;
console.log(names.allName[3]);
console.log(names.allName[0]);




//objects in array;
const objInArr = [
    "Ahmad Abdullah",
    {
        Name: "Mhummad", age: 7, fother: "yahya"
    },
    "Abida sultana umama"
]
console.log(objInArr);

//to acces item;
console.log(objInArr[1].fother);
console.log(objInArr[1].age);


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
console.log(`Value of a: ${obj.a} and value of b: ${obj.b}`) //a = 10, b = 5; ???

console.dir([])
let str = "Labib irfan";
console.dir(str);
console.log(str.length);


//wrapper; (constructor function or blue print);
let str2 = new String (`Rashed Abdullah`);
console.log(str2);
console.dir(str2);
let num = new Number (30);
console.log(num);
console.dir(num);
let bool = new Boolean (4 === 4);
console.log(bool);
console.dir(bool);



//blue print
const Person = function(name, job, age){
    this.name = name;
    this.job = job;
    this.age = age;
}

let rsd = new Person("Rashed", "Student", 23);
let lbb = new Person("Labib irfan", "Child", -3);
let ismat = new Person("ismat maymuna", "Child", -1);

console.log(rsd); //value of 'this' rsd;
console.log(rsd.name) //Rashed;
console.log(lbb); //value of 'this' lbb;
console.log(lbb.name); //Labib irfan;
console.log(ismat); //value of 'this' ismat;
console.log(ismat.name); //ismat maymuna;


//Blue print with method;
const BluePrint = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.dateOfBirth = function(){
        console.log(`${this.name} is born in ${2023 - this.age}`);
    }
}

let rsd2 = new BluePrint("Rashed", 23, "student");
rsd2.dateOfBirth()

let lbb2 = new BluePrint("labib", 3, "child");
lbb2.dateOfBirth()

let ismat2 = new BluePrint("ismat", 1, "chlid");
ismat2.dateOfBirth();


// Destructuring

// ES5
const obj2 = {
    name: `Rashed Abdullah`,
    profession: `Student`
}
console.log(obj2);

var objName = obj2.name;
var objProfession = obj2.profession;
console.log(objName);
console.log(objProfession);

// ES6;
const {name, profession} = obj2;
console.log(name);
console.log(profession);

//when we want to change the key;
const {name: myName, profession: myProfession} = obj2;

console.log(myName);
console.log(myProfession);


//in a complex object;
const firstObj = {
    secondObj: {
        thirdObj: {
            myHome: `Feni, Bangladesh`
        }
    }
};
console.log(firstObj.secondObj.thirdObj);
//if we want to destructuring;
const {secondObj:{thirdObj:{myHome}}} = firstObj;

console.log(myHome);

//if we want to change the key name:
const {secondObj:{thirdObj:{myHome:myAddress}}} = firstObj;

console.log(myAddress);
console.log(myHome);