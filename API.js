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

//  (it's finally working, but somthing i desn't understand);



// Petch API:

const displayFetch = document.querySelector(`.displayFetch`);

console.log(`it's Async`)
function getData(){
    fetch(`http://127.0.0.1:5500/notes.txt`)
    .then((response) => response.text())
    .then((data) => {
        //example of Async;
        console.log(`Hello world 1`);
        displayFetch.innerHTML = data});

    console.log(`Hello world 2`)
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
        //if we want to move my position with my laptop/phone moving, we need to use "watchPosition" in place of "getCurrentPosition"
        navigator.geolocation.getCurrentPosition(myPosition, showUserError);
        // navigator.geolocation.watchPosition(myPosition, showUserError);
    } else {
        displayLocation.innerHTML = `Sorry bos! your browser dosent support geolocation`;
    }
}

//show position (latitude and longitude);
function myPosition(position){
    displayLocation.innerHTML = `My Latitude is ${position.coords.latitude} </br>My Longitude is ${position.coords.longitude}`
}


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