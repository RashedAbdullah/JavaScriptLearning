console.log(`Class of javaScript`);

//function constructor in ES5:
var Child = function(name, dob){
    this.name = name;
    this.dob = dob;
}

var lbb = new Child(`Labib`, 2020);
var ismat = new Child('ismat', 2023)

console.log(lbb);
console.log(lbb.name);
console.log(lbb.dob);

//for new add method:
Child.prototype.currentAge = function(){
    console.log('My name is ' + this.name + ' and im ' + (2023 - this.dob) + ' Year Old!')
}
lbb.currentAge();
ismat.currentAge();


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

const lbb6 = new Child6(`Labib`, 2020);
lbb6.currentAge();

const ismat6 = new Child6(`Ismat`, 2023);
ismat6.currentAge();

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
rsd.now();

const labib = new classExp(`Labib irfan`, 2020);
labib.now();


//calss ar not hoisting; statement and expression both are not hoisting;


//Prototyoe based inheritance (calss);

// ES5:
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
Rashed5.birth();

var labib5 = new Person5('Labib irfan', 3, 'Child');
labib5.birth();


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
anayet.born();

const BD = new Exp(`Bangladesh`, 52, `Country`);
BD.born();

const pakistan = new Exp(`Pakistan`, 76, `Country`);
pakistan.born();

const india = new Exp(`india`, 76, `Country`)
india.born();




// Calss inheritance:

// When we have two class as same; then we can inheritance between both classes;

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
rsd5.birth()

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
console.log(teacher.name);
console.log(teacher.profession);
console.log(teacher.age);


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

console.log(mySir);
console.log(mySir.name);
console.log(mySir.age);
console.log(mySir.job);
console.log(mySir.subject);

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

console.log(myPhone);
console.log(myPhone.name);
console.log(myPhone.model);
console.log(myPhone.release);

myPhone.present();

class ScndPhone extends WithMethod{
    constructor(name, model, release, publish) {
        super(name, model, release);
        this.publish = publish;
    }
}

const myNewPhone = new ScndPhone(`Samsung A52`, `Samsung`, 2022, `05 jun, 2022`)

console.log(myNewPhone);
console.log(myNewPhone.name);
console.log(myNewPhone.model);
console.log(myNewPhone.release);
console.log(myNewPhone.publish);

myNewPhone.present();