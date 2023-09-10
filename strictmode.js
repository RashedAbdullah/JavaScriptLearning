// "use strict";

console.log(`'use strict' mode is here`);
// 'use strict' convert bad synatx of JS to erro;

// x = 5;

myFunc()
function myFunc(){
    y = 15;
    console.log(`somthing added`)
}


// in function :
function myFunc2(){
    "use strict";
    y = 15;
    console.log(`somthing added`)
}
myFunc2() //it's not working!



// not allowed:

// declaration without variable:
r = 434;

// object without varibale:
obj = {rsd: 232, lbb: 3423};

// delete varible:
let d = 34;
delete d;

// delete func:
function dtl(){`fds`}
delete dtl;

// same parameter:
function same(rsd,rsd){rsd,rsd};