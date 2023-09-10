console.log(`Hoisting is here`);
afunc();
function afunc(){console.log(`hoisted function`)};


// Declaration are hoisted:
x = 5;  //(it's value assign);
var x;  //(it's declaration);


/* 
y = 10;
let y; (it's also hoisted, but cannot take place in mamory as 'undefined')
*/


/*
'const' also be hoisted, but cannot reassign like 'var' and 'let';
*/