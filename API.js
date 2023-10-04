console.log(`API (Aplication programming interface)`);


//forms API:

/*
.validity.rangeOverflow
.validity.rangeUnderflow
.validity.valueMissing
.setCustomValidity()
.validationMessage
*/

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

// second form API:
function validOnClick(){

    const inputValue = document.querySelector(`#inputValue`);
    const sendMessage = document.querySelector(`.sendMessage`);

    if(inputValue.value <= 500 && inputValue.value >= 100){
        inputValue.setCustomValidity(`You set the number is ${inputValue.value}`);
    } else if(inputValue.validity.rangeOverflow){
        inputValue.setCustomValidity(`Sorry! input unded 500`);
    } else if (inputValue.validity.rangeUnderflow){
        inputValue.setCustomValidity(`Sorry boss! You must input over 100`);
    } else if (inputValue.validity.valueMissing){
        inputValue.setCustomValidity(`Hey boss! why you're don't input somthing!`)
    }

    if(!inputValue.checkValidity()){
        sendMessage.innerHTML = inputValue.validationMessage;
    }
}



// History API:
// (it's passed in DOM also)
function back(){
    history.back();
}

function forward(){
    history.forward();
}

function backTo(x){
    history.go(x);
}

function getHistory(){
    prompt(history.length);
}


//Storage API:

// (Storage API); (it's will be able after close browser also)
const presentStorage = document.querySelector(`#presentStorage`);

function lclStorage(key, value){
    localStorage.setItem(key, value);
}

function getlclStorage(key){
    presentStorage.innerHTML = localStorage.getItem(key);
}

function removelclStorage(key){
    localStorage.removeItem(key);
}

function clearlclStorage(){
    localStorage.clear();
}

// session API: (it's same of local storage, but after closing browser cannot be available)

// sessionStorage.setItem(), sessionStorage.getItem(), sessionStorage.removeItem(), sessionStorage.clear();




//  Worker API:


let work;

function startWorker(){
    if(typeof Worker !== `undefined`){
        //it's for when browser support worker;


        // if worker already not defined;
        if(typeof work == `undefined`){
            // new worker:
        work = new Worker(`worker.js`);
        }

        // Listener for worker.js:
        work.onmessage = function(event){
        document.querySelector(`.demoworker`).innerHTML = event.data;
        }


    } else {
        alert(`Sorry, your browser does not support Web worker`);
        //when browser cannot support worker, then this massage;
    }

}

function stopWorker(){
    if(typeof Worker !== `undefined`){
        work.terminate();
        work = undefined; //for reuse;
    } else {
        alert(`Stoped your worker`);
    }
}



// Petch API:

const displayFetch = document.querySelector(`.displayFetch`);

function getData(){

    console.log(`Before request (1)`);

    //fetch is async:
    fetch(`http://api.quran.com/api/v3/juzs`)
    .then((response) => response.json()) // .text() return json file as text;
    .then((data) => {

        //example of Async;
        console.log(data);
        console.log(`inside request (1)`);
        displayFetch.innerHTML = data.juzs[5].juz_number});
        console.log(`After request (1)`);

}


function fetchData(){

    fetch(`http://127.0.0.1:5500/notes.txt`)
    .then((data)=>{data})
    .then((showData)=>{
        console.log(`Async of fetch data 1`)
        showData})
        console.log(`Async of fetch data 2`)
}

fetchData();



const displayFetchAwait = document.querySelector(`.displayFetchAwait`);

console.log(`it's Async`)
async function getDataAwait(){
    const responseAwait = await fetch(`http://127.0.0.1:5500/notes.txt`);
    const dataAwait = await responseAwait.text();

    displayFetchAwait.innerHTML = dataAwait;
}



// GeoLocation API:

const displayLocation = document.querySelector(`.displayLocation`);

function myLocation(){
    if(navigator.geolocation){
        //if geolocation is available in browser, then...

        navigator.geolocation.getCurrentPosition(myPosition, showUserError);
        //if we want to move my position with my laptop/phone moving, we need to use "watchPosition" in place of "getCurrentPosition"

        // navigator.geolocation.watchPosition(myPosition, showUserError);
    } else {
        displayLocation.innerHTML = `Sorry bos! your browser cannot support geolocation`;
    }
}

//show position (latitude and longitude);
function myPosition(position){
    displayLocation.innerHTML = `My Latitude is ${position.coords.latitude} </br>My Longitude is ${position.coords.longitude}`
};


//show error to user:

function showUserError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        displayLocation.innerHTML = "if you want to buy somthig, please allow your location."
        break;
      case error.POSITION_UNAVAILABLE:
        displayLocation.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        displayLocation.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        displayLocation.innerHTML = "An unknown error occurred."
        break;
    }
  }