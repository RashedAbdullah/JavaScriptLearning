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

aFunc(); //sum is: 10;