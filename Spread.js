console.log(`Spread`);


// ES5
var arr = [4,5,6,3,2];
var arr2 = [14,15,16,13,12];
function calculate(a,b,c,d,e){
    console.log("Sum: " + (a+b+c+d+e));
}
calculate(arr); // it's showing undefined; couse five parameters, but one argument;
calculate(4,5,6,3,2); //20;

calculate.apply(null, arr) //it's working good; //20;

// ES6 

//(it's very esay);
calculate(...arr); //20 //it's Spread;
calculate(...arr2); //70 //it's Spread;




//when we want to add some item in array we use to unshift or push in ES5;
var adding = ["Rashed", "Labib", "ismat"];
adding.unshift("Khalid");
console.log(adding);
adding.push("Abrar");
console.log(adding);

//Both are very esay in ES6 using by Spread;
adding = ["Mahmud", ...adding, "Naim"];
console.log(adding);

//we can save in aother variable;
const adding6 = [`Muhammad`, ...adding, `Hamid`];
console.log(adding6);


//To concat two array;
// ES5:
var arr5 = [1,2,3,4,5];
var arr4 = [6,7,8,9,10];
var bothArr = arr5.concat(arr4);
console.log(bothArr);

//ES6:
const bothArr6 = [...arr5, ...arr4];
console.log(bothArr6);