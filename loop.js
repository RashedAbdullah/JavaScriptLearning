console.log("Loop");

/*
for
do while
while
break
continue
*/


// for:

for(let i = 1; i <= 10; i++) {
    console.log("Apple market value right now" + i)
}


//we can make multiple statement; (mutliple varible in loop; (like here 'i' 'j'));
const someName = [`Labib`, `ismat`, `Rashed`, `Khalid`];
//    statement area
for(let i = 0, j = someName.length; i < j; i++){
    console.log(someName[i]);
};


//We can decleare loop like this;
let i = 0;
let j = someName.length;
for(; i < j; i++){
    console.log(someName[i])
};

let k = 0;
for(; ; k++){
    if(k == 11){
        break;
    } else {
        console.log(k)
    }
}

// --;

for(i = 10; ;i --){
    if(i == 0){
        break;
    }
    console.log(i);
}






//break;
for (let i = 1; i < 10; i ++) {
    if(i === 5) {
        break;
    }
    console.log("i will broken when called break;" + i)
}


//continue;
for(i = 1; i < 10; i++) {
    if(i === 4) {
        continue;
    }
    console.log('i will skip the number who called by continue' + i)
}








//for in: (for boject);


const lbb = {fName: `Labib`, lName: `irfan`, age: 3};

for(let i in lbb){
    document.querySelector(`.forIn`).innerHTML = lbb[i];
    console.log(i); //key
    console.log(lbb[i]); //value of objcet;
    console.log(`--`)
}

//'for in' not recommned for array;
const someNum = [23,43,54,34,22];

for(i in someNum){
    console.log(i); //index number;
    console.log(someNum[i]); //value of array;
    console.log(`--`);
}
//for array, 'for of' or 'forEach';
someNum.forEach((value, index)=>{console.log(index, value)});





// 'for of'
const someArr = [`Shahin afridi`, `Haris rouf`, `Naseem shah`, `Babar azam`];

for(i of someArr){
    console.log(i); //value;
    console.log(someArr[i]); //undefined;
}

const rsd = `Rashed`;
for(i of rsd){
    console.log(i); //it's working; couse it's iterable;
}

/* const objforof = {name: `Rashed`, father: `Abdullah`, mother: `Rabea akter`};
for(i of objforof){
    console.log(objforof[i]);
} */
         // it's not working; couse it's not iterable;







let Numbers = 1;
while(Numbers < 14){
    console.log("that's numner of " + Numbers)
    Numbers ++;
}
console.log("get out of the while loop");










let marketValue = 11;
do {
    console.log("samsung market value right now " + marketValue);
    marketValue ++;
} while (marketValue <= 20) {
    console.log("Market value is over " + marketValue)
}


let allStudent = 1;
do {
    console.log("Over all student of this jamia " + allStudent);
    allStudent ++;
} while (allStudent <= 30) {
    console.log("thats all of students of this jamia")
}

let backAgain = 1;
// do{
//     console.log(`My Number is right now ${backAgain}`);
//     backAgain++;
// } while (backAgain < 14) {
//     console.log(`Hello World! ${backAgain}`);
// }