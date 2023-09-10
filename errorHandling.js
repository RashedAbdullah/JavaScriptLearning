console.log(`Error Handling is here`);


// try and catch:

try{
    console.lo(`this is error handling named as try catch`); //cannot printed;
} catch (err) {
    console.log(`error is here`); // printed in console.

    document.querySelector(`.errInput`).innerHTML = err; // printed error in HTML

    const errFunc = ()=>{alert(err)};
    // errFunc(); //printed as a alert;
}


// throw:
let myAge = 24;
try{
    if (myAge == 24){
        throw `your dob in ${1999}`;
    } else {
        console.log(`we don't know about your born`);
    }
} catch (err){
    console.log(err);
};


let submitBtn = document.querySelector(`#submitbtn`);

submitBtn.addEventListener(`click`, ()=>{
    let inputed = document.querySelector(`.inputed`);
    let inputBox = document.querySelector(`.inputbox`);
    try{
        if(inputBox.value == 0) {
            inputed.innerHTML = `it's not a number`;
        } else if(inputBox.value == 1999){
            inputed.innerHTML = `it's your birthDay`;
        }
    } catch(err){
        inputed.innerHTML = err;
    }
})


// finally:
try{
    throw `it's for 'finally' statment`;
} catch (err){
    console.log(err);
} finally {
    console.log(`i'll run allways, you hove error or not`);
}



// Error():
const newErr = new Error(`this is error constructor (object)`);
console.log(newErr);  // Error: this is error constructor (object)

try{
    if(myAge > 22){
        throw new Error(`Hey Rashed, you need to think about your future seriously`)
    } else {
        console.log(`You are too young! have fun`);
    }
} catch (err) {
    console.log(err)
} finally {
    console.log(`i'm 'finally', my work is run in every situation`);
}