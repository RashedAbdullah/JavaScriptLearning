console.log(`Bitwise opeations is here`);

//for convert a number to binary:
let a = 20;
console.log(a.toString(2)); //10100

//we know: computer think binary way; and he make operation in bitwise; leke this:
let x = 5;
let y = 6;
console.log(x.toString(2)); //101;
console.log(y.toString(2)); //110;


//Binary AND:
console.log((x & y)); //100
//Binary OR:
console.log((101 | 110)); //111
//Binary XOR:
console.log((101 ^ 110)); //11
//Binary NOT:
console.log((~ 101)); //-102
//Binary zero fill left shif
console.log((101 << 110)); //1654784
//Signed right shift
console.log((101 >> 110)); //0

