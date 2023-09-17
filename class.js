console.log(`'Class' of javaScript is here`);

//function constructor in ES5:
var Child = function(name, dob){
    this.name = name;
    this.dob = dob;
}

var lbb = new Child(`Labib`, 2020);
var ismat = new Child('ismat', 2023);

console.log(lbb); //Child {name: 'Labib', dob: 2020}
console.log(lbb.name); //Labib
console.log(lbb.dob); //2020

//for new add method:
Child.prototype.currentAge = function(){
    console.log('My name is ' + this.name + ' and im ' + (2023 - this.dob) + ' Year Old!')
}
lbb.currentAge(); //My name is Labib and im 3 Year Old!
ismat.currentAge(); //My name is ismat and im 0 Year Old!





//this is in ES6 using by class:
class Child6 {
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
    }

    currentAge(){
        console.log(`${this.name} is ${2023 - this.dob} Year Old!`)
    }

}

//it's inctance (প্রতিমূর্তি):
const lbb6 = new Child6(`Labib`, 2020);
lbb6.currentAge(); //Labib is 3 Year Old!

const ismat6 = new Child6(`Ismat`, 2023);
ismat6.currentAge(); //Ismat is 0 Year Old!

const rsdAge = new Child6(`Rashed`, 1999);
rsdAge.currentAge(); //Rashed is 24 Year Old!



class Students {
    constructor (name, classNo, address){
        this.name = name;
        this.class = classNo;
        this.address = address;
    }
}

const abrar = new Students(`Abrar`, `dawra`, `Dhaka`);
const khalid = new Students(`Khalid`, `dawra`, `Comilla`);
const Rayhan = new Students(`Rayhanul islam`, `dawra`, `Rajshahi`);
const Sami = new Students(`Samiul islam`, `dawra`, `Narayangang`);
const Naim = new Students(`Nazmus sadat naim`, `dawra`, `Kushtia`);
console.log(Rayhan.name); //Rayhanul islam;
console.log(Sami.address); //Narayangang;

//That was a class statement;


//class expression:
const classExp = class {
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
    }

    now(){
        console.log(`${this.name} is ${2023 - this.dob} Year old!`)
    }

}

const rsd = new classExp(`Rashed Abdulla`, 1999);
rsd.now(); //Rashed Abdulla is 24 Year old!

const labib = new classExp(`Labib irfan`, 2020);
labib.now(); //Labib irfan is 3 Year old!



class OurFamily {
    constructor(name, age, profession){
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    comment(status){
        console.log(`${this.name} is my family member ${status}`);
    }
}

const noman = new OurFamily(`Noman`, 35, `Businessman`);
const irfan = new OurFamily(`irfan`, 32, `Businessman`);
console.log(noman.profession); //Businessman
noman.comment("as a my big brother"); //Noman is my family member as a my big brother
irfan.comment(`as a second big brother`); //irfan is my family member as a second big brother

//class statement and expression both are not hoisting;


//Prototyoe based inheritance (calss):

// ES5: (function constructor (expression))
var Person5 = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}
//for assign a new method:
Person5.prototype.birth = function(){
    console.log("i'm " + this.name + " and my born in " + (2023 - this.age))
}

var Rashed5 = new Person5(`Rashed Abdullah`, 24, `Student`);
Rashed5.birth(); //i'm Rashed Abdullah and my born in 1999

var labib5 = new Person5('Labib irfan', 3, 'Child');
labib5.birth(); //i'm Labib irfan and my born in 2020


// ES6:
class Exp {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    born() {
        console.log(`i'm ${this.name} and my born in: ${2023 - this.age}`)
    }
}

const anayet = new Exp(`Anayet Ullah`, 21, `Student`);
anayet.born(); //i'm Anayet Ullah and my born in: 2002

const BD = new Exp(`Bangladesh`, 52, `Country`);
BD.born(); //i'm Bangladesh and my born in: 1971

const pakistan = new Exp(`Pakistan`, 76, `Country`);
pakistan.born(); //i'm Pakistan and my born in: 1947

const india = new Exp(`india`, 76, `Country`)
india.born(); //i'm india and my born in: 1947




// Calss inheritance:

// When we have two classes as same, then we can inheritance between both classes:

// ES5:
class Student5 {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.birth = () => {
            console.log('my name is ' + this.name + ' and my date of birth: ' + (2023 - this.age))
        }
    }


}

const rsd5 = new Student5(`Rashed Abdullah`, 24, `Jobless`)
rsd5.birth() //my name is Rashed Abdullah and my date of birth: 1999

class Teacher5 {
    constructor(name, age, profession, subject, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.subject = subject;
        this.dateOfBirth = dateOfBirth;
    }
}

const teacher = new Teacher5(`Nasir uddin`, 30, `Teacher`, `Urdu`, Date());
console.log(teacher.name); //Nasir uddin
console.log(teacher.profession); //Teacher
console.log(teacher.age); //30


// ES6:
class Person6 {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

class Teacher6 extends Person6{
    constructor(name, age, job, subject){
        super(name, age, job);
        this.subject = subject;
    }
}

const mySir = new Teacher6(`Imaran hossain`, 30, `Teacher`, `Arabic`);

console.log(mySir); //Teacher6 {name: 'Imaran hossain', age: 30, job: 'Teacher', subject: 'Arabic'}
console.log(mySir.name); //Imaran hossain
console.log(mySir.age); //30
console.log(mySir.job); //Teacher
console.log(mySir.subject); //Arabic

// inheritance class method:
class WithMethod {
    constructor(name, model, release) {
        this.name = name;
        this.model = model;
        this.release = release;
    }

    present() {
        console.log(`${this.name} is will present in ${Date()}`);
    }

}
const myPhone = new WithMethod(`Samsung A51`, `Samsung`, 2019);

console.log(myPhone); //WithMethod {name: 'Samsung A51', model: 'Samsung', release: 2019}
console.log(myPhone.name); //Samsung A51
console.log(myPhone.model); //Samsung
console.log(myPhone.release); //2019

myPhone.present(); //Samsung A51 is will present in Mon Sep 11 2023 10:09:58 GMT+0600 (Bangladesh Standard Time)

class ScndPhone extends WithMethod{
    constructor(name, model, release, publish) {
        super(name, model, release);
        this.publish = publish;
    }
}

const myNewPhone = new ScndPhone(`Samsung A52`, `Samsung`, 2022, `05 jun, 2022`)

console.log(myNewPhone); //ScndPhone {name: 'Samsung A52', model: 'Samsung', release: 2022, publish: '05 jun, 2022'}
console.log(myNewPhone.name); //Samsung A52
console.log(myNewPhone.model); ////Samsung
console.log(myNewPhone.release); //2022
console.log(myNewPhone.publish); //05 jun, 2022

myNewPhone.present(); //Samsung A52 is will present in Mon Sep 11 2023 10:13:59 GMT+0600 (Bangladesh Standard Time)




// getter and setter:
class MyLaptop {
    constructor(brand){
        this.brand = brand;
    }
    get laptopName(){
        return this.brand;
    }
    set laptopName(x){
        return this.brand = x;
    }
}

const myLPTP = new MyLaptop(`MSI`);
console.log(myLPTP); //MyLaptop {brand: 'MSI'}
// console.log(myLPTP()); //Uncaught TypeError: myLPTP is not a function


// static:
class StaticClass {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    static myLaptop(lptp){
        console.log(`my lapatop model is: ${this.brand} and brnad is: ${this.model}, ${lptp}.`);
    }
}
const myNewLaptop = new StaticClass(`MSI`, `Modern 15`,);
console.log(myNewLaptop); //StaticClass {brand: 'MSI', model: 'Modern 15'}

// deference between normal class and 'class static':
StaticClass.myLaptop(`it's from my big brother`); //my lapatop model is: undefined and brnad is: undefined, it's from my big brother.