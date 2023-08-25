console.log("operators")

//All Operators;
// + - * / % =;

let x = 5;
let y = 5;
console.log(x = y)
console.log(x + y) //10
console.log(x -= y) //0

let a = 10;
let b = 12;
console.log(a *= b) //120
console.log(a) //120
console.log(a /= b) //10
console.log(a); //10;
let c = 20;
let d = 9;
console.log(c %= d); //2
console.log(c); //2
console.log(c **= d); //512?
console.log(++c); //513


let e = 'Rashed';
let f = 'Abdullah';
console.log(e + " " + f);

console.log(e += " abdullah");
console.log(e);

console.log(5 + 5); // 10;
console.log(5 + "5"); //55;
console.log("5" + 5); //55;

console.log(5 + 5 + "5"); //105;
console.log("5" + 5 + 5); ///555;



//Arithmetic operator;
console.log(5 + 5); //10;
console.log(20 - 5); //15;
console.log(5 * 5); //25;
console.log(50 / 5); //10;
console.log(13 % 2); //1;
let g = 5;
console.log(g++) //5 ইনক্রিমেন্ট;
console.log(g); //6
console.log(++g); //7
console.log(g--); //7; ডিক্রিমেন্ট;
console.log(g); //6;
console.log(--g); //5;



//Assignment operator;
let h = 10; //for value assign;
let i = 10;
console.log(i += i); //20;
console.log(i); //20;
console.log(i -= 5); //15;
console.log(i *= 2); //30;
console.log(i /= 5); //6;
console.log(i %= 4); //2;



//comparison operator;
let j = 5;
let k = 5;
//equal;
console.log(j == k); //true;
console.log(j == 6); //false;
//not equal;
console.log(j != k); //false;
console.log(j != 6); //true;
//big
console.log(j > k); //false;
console.log(j > 6); //false;
console.log(j > 4); //true;
//small;
console.log(j < k); //false;
console.log(j < 4); //false;
console.log(j < 6); //true;
//equal or big;
console.log(j >= k); //true;
console.log(j >= 6); //false;
console.log(j >= 4); //true;
//small or equal;
console.log(j <= k); //true;
console.log(j <= 6); //true;
console.log(j <= 4); //false;

console.log(55 == "55"); //true;
console.log(55 === "55"); //false;

console.log(55 != "55"); //false;
console.log(55 !== "55"); //true;


//Logical operator;

//and operator;
console.log((50< 40) && (10> 9)); //false;
console.log((40< 50) && (10> 9)); //true;

//or operator;
console.log((10<11) || (10>11)); //true;
console.log((false) || (false)); //false;

console.log(!true); //false;
console.log(!false); //true;


//conditional operator;
let m = 5;
let n = 6;

let o = m < n ? 55: 60;
console.log(o); //55;

console.log(m < 2 ? 'Rashed': 'labib'); //labib;