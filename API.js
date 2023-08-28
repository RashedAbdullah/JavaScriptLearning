console.log(`API (Aplication programming interface)`);

//forms API:

// (for show validation message)
function valitation(){
    const validInput = document.querySelector(`#APIInput`);
    
    if(!validInput.checkValidity()){
        const validMsg = document.querySelector(`.APIform`);
        validMsg.innerHTML = validInput.validationMessage;

    }
}