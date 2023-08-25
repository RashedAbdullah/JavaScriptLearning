console.log('Conditional Statemnet');

/*
if
if else
if  else if
switch
*/

if(true){
    console.log("it's true")
};

if(false){
    console.log("it's not true, so cannot print")
} else {
    console.log("So print it")
};

if(4 > 5){
    console.log("I'm Labib irfan")
} else if (4 < 5) {
    console.log("i'm Rashed Abdullah")
} else {
    console.log("both are false")
};

let myAge = 23;
if((myAge >= 18) && (myAge <= 40)){
    console.log("You are adault")
} else if(myAge > 40) {
    console.log("You are older man")
} else {
    console.log("You are child")
}

//নেস্টিং
let a = 20;
if(a > 10){
    if(a < 10) {
        console.log("i'm okay")
    } else {
        console.log("i'm not okay")
    }
} else {
    console.log("prevous statement maybe false")
}


//switch
let today = 'sunday';

switch(today){
    case "friday":
        console.log("today is " + today)
        break;
    case "sunday":
        console.log("today is " + today)
        break;
    case "monday":
        console.log("today is " + today)
        break;
    default:
        console.log("Another day")
}


let rollNo = 5;
switch(rollNo){
    case 1:
        console.log("Musharraf");
        break;
    case 2:
        console.log("Zakaria hibban");
        break;
    case 3:
        console.log("khalid");
        break;
    case 4:
        console.log("abrarur haque");
        break;
    case 5:
        console.log("abrarul islam");
        break;
    case 6:
        console.log("Rashed Abdullah");
        break;
    case 7:
        console.log("Mahdi hasan");
        break;
    default:
        console.log("Another student")
}