console.log(`'this' is here`);

//gloal (this); (window)
//and vlaue of this same in strict mode or non strict mode;
console.log(this);
console.log(this === window); //true;


//in function
function thisFunc(){
    console.log(this);
}
thisFunc();  //global object (window);

//in stric mode;
function inStrict(){
    "use strict";
    console.log(this);
}
inStrict(); //undefined;

//accidental variable
function accidental(){
    this.names = "Rashed Abdullah";
}
console.log(accidental()); //undefined;
console.log(names); //Rashed Abdullah;
//couse "this" is globla object, so "names" also global; so when i call "names" outside of functition or inside of function, it's will work; but when be under "strict mode" it's cannot work;



//"this" in object;
const thisObj = {
    Fname: "Labib",
    Lname: "irfan",
    age: 23,
    fullName: function(){
        console.log(this.Fname + " " + this.Lname);
    }
}
thisObj.fullName(); //Labib irfan

//object in object;
const prntObj = {
    name: "ismat",
    age: -1,
    father: "Noman",
    past: "Dhaka, Bangladesh",
    now: "Riyadh, Soudi Arabia",
    address: {
        past: "Sonagazi,",
        now: "Feni, Bangladesh",
        fullAddress: function(){
            console.log(this.past + " " + this.now)
        }
    }
}
prntObj.address.fullAddress(); //Sonagazi, Feni, Bangladesh;
//call
prntObj.address.fullAddress.call(prntObj); //Dhaka, Bangladesh Riyadh, Soudi Arabia;



//call, bind, apply;

/*
call and bind can access multiple arguments
but apply can access only two arguments; second are array;
*/


//call;
const myBorn = {
    name: "Rashed Abdullah",
    dob: 1999,
    age: function(currentYear){
        console.log(this.name + " is " + (currentYear - this.dob) + " Year Old")
    }
}

const LbbBorn = {
    name: "Labib irfan",
    dob: 2020
}

myBorn.age(2023) //Rashed Abdullah is 24 Year Old;
myBorn.age.call(LbbBorn, 2023) //Labib irfan is 3 Year Old;


//apply;
const aboutMe = {
    name: "Rashed Abdullah",
    father: "Abdullah",
    oneMore: {
        name: "Labib irfan",
        father: "M A H irfan",
        overAll: function(){
            console.log(`My name is: ${this.name} and my father is: ${this.father}`)
        }
    }
}

aboutMe.oneMore.overAll(); //My name is: Labib irfan and my father is: M A H irfan;
aboutMe.oneMore.overAll.apply(aboutMe); //My name is: Rashed Abdullah and my father is: Abdullah

//second argument of apply a array;
const lbb = {
    name: `Labib irfan`,
    born: 2020,
    age: function(thisYear, msg) {
        console.log(`${msg} ${this.name} is ${thisYear - this.born} year old!`)
    }
}
lbb.age(2023, `Hello my family!`); //ello my family! Labib irfan is 3 year old!

const ismat = {
    name: `ismat maymuna`,
    born: 2022
}

let one = lbb.age.apply(ismat, [2023, `Hello Rashed!`]); //Hello Rashed! ismat maymuna is 1 year old!;


//bind;
const saad = {
    name: `Saad Rayhan`,
    job: `Teacher`,
    anotherOne: {
        name: `Salman`,
        job: `Student`,
        value: function(){
            console.log(`my Name is ${this.name} and i'm a ${this.job}`)
        }
    }
}
let saadSalman = saad.anotherOne.value.bind(saad); 

saadSalman(); //my Name is Saad Rayhan and i'm a Teacher;