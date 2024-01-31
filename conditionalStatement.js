console.log("Conditional Statemnet");

/*
if
if else
if  else if
switch
*/

if (true) {
  console.log("it's true");
}

if (false) {
  console.log("it's not true, so cannot print");
} else {
  console.log("So print it");
}

if (4 > 5) {
  console.log("I'm Labib irfan");
} else if (4 < 5) {
  console.log("i'm Rashed Abdullah");
} else {
  console.log("both are false");
}

let myAge = 23;
if (myAge >= 18 && myAge <= 40) {
  console.log("You are adault");
} else if (myAge > 40) {
  console.log("You are older man");
} else {
  console.log("You are child");
}

//নেস্টিং
let a = 20;
if (a > 10) {
  if (a < 10) {
    console.log("i'm okay");
  } else {
    console.log("i'm not okay");
  }
} else {
  console.log("prevous statement maybe false");
}

//switch
let today = "sunday";

switch (today) {
  case "friday":
    console.log("today is " + today);
    break;
  case "sunday":
    console.log("today is " + today);
    break;
  case "monday":
    console.log("today is " + today);
    break;
  default:
    console.log("Another day");
}

let rollNo = 5;

switch (rollNo) {
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
    console.log("Another student");
}

let timeSpend = 1999;
function aboutMyLife() {
  document.querySelector(`.yearInput`).innerHTML = timeSpend;
  let printYear = document.querySelector(`.printYear`);
  switch (timeSpend) {
    case 1999:
      console.log(timeSpend);
      printYear.innerHTML = `In this year you are born`;
      break;
    case 2000:
    case 2001:
    case 2002:
    case 2003:
    case 2004:
    case 2005:
    case 2006:
    case 2007:
    case 2008:
      console.log(timeSpend);
      printYear.innerHTML = `My children and my best Time`;
      break;
    case 2009:
    case 2010:
    case 2011:
    case 2012:
      console.log(timeSpend);
      printYear.innerHTML = `then you are stundet of jamia Rashidia`;
      break;
    case 2013:
    case 2014:
    case 2015:
    case 2016:
    case 2017:
      console.log(timeSpend);
      printYear.innerHTML = `Now you are student of jamia madania Feni`;
      break;
    case 2018:
    case 2019:
    case 2020:
    case 2021:
      console.log(timeSpend);
      printYear.innerHTML = `You are Student of Malibagh Jamia Dhaka`;
      break;
    case 2022:
      console.log(timeSpend);
      printYear.innerHTML = `You ar become a 'Mowlana'`;
      break;
    case 2023:
    case 2023:
      console.log(timeSpend);
      printYear.innerHTML = `From here start my Life tiring biring`;
      break;

    default:
      printYear.innerHTML = `About this year you know maybe later`;
      break;
  }
  timeSpend++;
}

let btn = true;

function BTNforOnOf() {
  let onOffBTN = document.querySelector(`.onOffBTN`);
  if (btn) {
    onOffBTN.value = `On`;
    btn = false;
  }

  if ((btn = false)) {
    onOffBTN.value = `Off`;
  }
}


const even = 20;
const odd = 15;
if (even % 2 === 0) {
  console.log("This is even number");
} else {
  console.log("This is odd number");
}
