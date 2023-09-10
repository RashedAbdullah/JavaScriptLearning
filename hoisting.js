console.log(`Hoisting is here`);
afunc();
function afunc(){console.log(`hoisted function`)};


// Declaration are hoisted:
x = 5;  //(it's value assign);
var x;  //(it's declaration);