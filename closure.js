console.log(`'Closure' is here`);
// must interview cuestion:


function aFunc(){
    let x = 5;
    function bFunc(){
        let y = 5;
        console.log(`sum is: ${x + y}`)
    }
    return bFunc();
}

const returnedFunc = aFunc(); //sum is: 10;



// global variable inside function:
function somthing(){
    c = 5; // (without variable it's global);
}


// lifetime of global variable until i'm in the page, but local variable until executing function
let global = 55; //global;
function func() {
    let local = 55; //local;
    return local + global;
}
console.log(func()); //(end of local variable, but not end of global);




// Global counter:
let a = 0;
function add(){
    return a += 1;
}
console.log(add()); //1
console.log(add()); //2
console.log(add()); //3
console.log(add()); //4

console.log(a); //4
console.log(a); //4


// Local counter:
let b = 0;
function adding(){
    let b = 0;
    return b += 1;
}
console.log(adding()); //1
console.log(adding()); //1 (cause every time he reset the value with 0);
console.log(adding()); //1

console.log(b); //0


// solve of this problem func in func:
function func1(){
    let a = 0;

    function func2(){
    return a += 1;
    }

    func2();
    return a;
}
console.log(func1()); //1
console.log(func1()); //1 (it's not working, cause we need to a away to call only inside func);


// this away:
function func3(){
    let a = 0;

    return function(){
        a += 1;
    }
}
const encrise = func3();

encrise();
encrise();
encrise();
encrise();
console.dir(encrise);