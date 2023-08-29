console.log(`API (Aplication programming interface)`);


//forms API:

// (for show validation message)
function valitation(){

    const validInput = document.querySelector(`#APIInput`);

    if(validInput.validity.rangeOverflow){
        validInput.setCustomValidity(`Please, you have to input under 90`);
    } else if(validInput.validity.rangeUnderflow){
        validInput.setCustomValidity(`Plese input the over 50`);
    } else if(validInput.validity.valueMissing){
        validInput.setCustomValidity(`You need to write somthing`);
    }
    
    if(!validInput.checkValidity()){
        const validMsg = document.querySelector(`.APIform`);
        validMsg.innerHTML = validInput.validationMessage;

    }
};



// History API:

function back(){
    window.history.back();
}

function forward(){
    window.history.forward();
}

function backTo(x){
    window.history.go(x);
}

function getHistory(){
    alert(window.history.length);
}


//Storage API:

// (Storage API);

function lclStorage(key, value){
    localStorage.setItem(key, value);
}

function getlclStorage(key){
    alert(localStorage.getItem(key));
}

function removelclStorage(key){
    localStorage.removeItem(key);
}

function clearlclStorage(){
    localStorage.clear();
}

// (session API):

// ... 




//  Worker API:

// Then solution is worker API:

let work;

function startWorker(){
    if(typeof Worker !== `undefined`){


        // if worker already not defined;
        if(typeof work == `undefined`){
            // new worker:
        work = new Worker(`worker.js`);
        }

    // Listener for worker.js 
    work.onmessage = function(event){
        document.querySelector(`.demoworker`).innerHTML = event.data;
    }
    } else {
        alert(`Sorry, your browser does not support Web worker`);
    }

}

function stopWorker(){
    if(typeof Worker !== `undefined`){
        work.terminate();
        work = undefined;
    } else {
        alert(`Stoped your worker`);
    }
}

//  (it's finally working, but somthing i desnt understand);