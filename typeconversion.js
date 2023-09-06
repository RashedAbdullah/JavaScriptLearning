console.log(`TypeConversion is here`);

//we can conver type of vlaues: number to string and more...


// string to number:


//stringed number:
console.log(Number(`23`))  //23;
// empty string:
console.log(Number(``)) //0;
// space:
console.log(Number(` `)) //0;
// multiple space:
console.log(Number(`    `)) //0;
//space between  stringed numbers:
console.log(Number(`1999 2923`)) //NaN
// string:
console.log(Number(`Rashed`)) //NaN

//parseFloat:
console.log(parseFloat(`10`))  //10
console.log(parseFloat(`10.55`))  //10.55

//parseInt:
console.log(parseInt(`10`)); //10;
console.log(parseInt(`10.55`)); //10; (not ceil);

// unary operator: (+)
let unary = `10`;
console.log(unary); //10(string);
let converted = + unary;
console.log(converted); //10(number);

//Date:
let newDate = new Date();
console.log(Number(newDate)); //1693982388145 (after every refresh will be different); it's like "newDate.getTime()";



//Number to String:


//in variable:
let a = 10;
console.log(String(a));  //10(string);
//single number:
console.log(String(30));  //30(string);
//added number:
console.log(String(50+50));  //100(string);

//Date:
console.log(String(newDate)); //Wed Sep 06 2023 12:42:41 GMT+0600 (Bangladesh Standard Time) 

//toString:
let x = 55;
console.log(x.toString()); //55(string);
//after added:
console.log((45 + 45).toString()); //90(string);




//Boolean to Number:
console.log(Number(false)); //0;
console.log(Number(true)); //1;


// Boolean to String:
console.log(String(true)); //true(string);
console.log(String(false)); //false(string);




// Automatic type conversion:

/* when JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type;
then result is cannot be allways what we expect;  */

console.log((10 + null));  //10(number); (couse 'null' coverted to 0);
console.log((`10` + null)); //10null;
console.log((`10` + 5)); //105(string);
console.log((10 - 5)); //5(number);
console.log((10 * 5)); //50(number);



// Automatic convert to string:

//object:
const obj = {name: `Labib`};
console.log(obj.toString());  //[object Object]
//array:
const arr = [`Labib`, `Rashed`];
console.log(arr.toString());  //Labib,Rashed
//new Date():
let aDate = new Date();
console.log(aDate.toString()); //Wed Sep 06 2023 13:15:31 GMT+0600 (Bangladesh Standard Time)