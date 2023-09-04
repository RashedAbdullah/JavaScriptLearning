console.log("Loop");

/*
for
do while
while
break
continue
*/

for(let i = 1; i <= 10; i++) {
    console.log("Apple market value right now" + i)
}


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

let Numbers = 15;
while(Numbers < 14){
    console.log("that's numner of " + Numbers)
    Numbers ++;
}
console.log("get out of the while loop");


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