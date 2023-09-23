console.log(`'BOM' is here`);

// 'B'rowser 'O'bject 'M'odel;
//   https://www.w3.org/  (this org make rules for brwoser compenies);


/*
(BOM) winodw: 1-Document, 2-history, 3-location, 4-navigator, 5-screen,

(DOM) document: 1-HTML,

HTML: 1-head, 2-body,

head: 1-meta, 2-title ...,

body: 1-div, 2-img, 3-p ...,
*/



// window width and height:  (document)
const width = document.querySelector(`.width`);
const height = document.querySelector(`.height`);
width.innerHTML = `window width is ${window.innerWidth}`;
height.innerHTML = `window height is ${window.innerHeight}`;

// open and close window;
let getClsoeWindow;

function openWindow(){

    // where he will open? for this we have second parameter;
    getClsoeWindow = window.open(`https://github.com/RashedAbdullah`, `_top`);
}

function closeWindow(){
    getClsoeWindow.close();
}



// Screen:
const screenWidth = document.querySelector(`.screenWidth`);
const screenHeight = document.querySelector(`.screenHeight`);
const screenAvilWidth = document.querySelector(`.screenAvilWidth`);
const screenAvilHeight = document.querySelector(`.screenAvilHeight`);
const screenColorDepth = document.querySelector(`.screenColorDepth`);
const screenPixelDepth = document.querySelector(`.screenPixelDepth`);

screenWidth.innerHTML = `My screen width is ${screen.width}`;
screenHeight.innerHTML = `My screen height is ${screen.height}`;
screenAvilWidth.innerHTML = `My screen avil widht is ${screen.availWidth}`;
screenAvilHeight.innerHTML = `My screen avil height is ${screen.availHeight}`;
screenColorDepth.innerHTML = `My screen avil height is ${screen.colorDepth}`;
screenPixelDepth.innerHTML = `My screen avil height is ${screen.pixelDepth}`;



// Location:
const href = document.querySelector(`.href`);
const hostname = document.querySelector(`.hostname`);
const pathname = document.querySelector(`.pathname`);
const protocol = document.querySelector(`.protocol`);
const port = document.querySelector(`.port`);

href.innerHTML = `href: ${location.href}`; //(full address);
hostname.innerHTML = `hostname: ${location.hostname}`; //127.0.0.1
pathname.innerHTML = `pathname: ${location.pathname}`; // /index.html
protocol.innerHTML = `protocol: ${location.protocol}`; // http:
port.innerHTML = `port: ${location.port}`; // 5500

function github(){
    location.assign(`https://github.com/RashedAbdullah`);
}




// history:
function back(){
    history.back();
}

function forward(){
    history.forward();
}



// Navigator:
const appName = document.querySelector(`.appName`);
const appCodeName = document.querySelector(`.appCodeName`);
const platform = document.querySelector(`.platform`);
const cookieEnabled = document.querySelector(`.cookieEnabled`);
const product = document.querySelector(`.product`);
const appVersion = document.querySelector(`.appVersion`);
const userAgent = document.querySelector(`.userAgent`);
const language = document.querySelector(`.language`);
const online = document.querySelector(`.online`);
const javaEnabled = document.querySelector(`.javaEnabled`);

appName.innerHTML = `appName: ${navigator.appName}`;
appCodeName.innerHTML = `appCodeName: ${navigator.appCodeName}`;
platform.innerHTML = `platform: ${navigator.platform}`;
cookieEnabled.innerHTML = `cookieEnabled: ${navigator.cookieEnabled}`;
product.innerHTML = `product: ${navigator.product}`;
appVersion.innerHTML = `appVersion: ${navigator.appVersion}`;
userAgent.innerHTML = `userAgent: ${navigator.userAgent}`;
language.innerHTML = `Language: ${navigator.language}`;
online.innerHTML = `online: ${navigator.onLine}`;
javaEnabled.innerHTML = `javaEnabled: ${navigator.javaEnabled()}`;



// Popup Boxes: (1- alert box, 2-confirm box, 3-prompt box)
const confirm = document.querySelector(`.confirm`);
const prompt = document.querySelector(`.prompt`);

function alertFunc(){
    window.alert(`This is alert`);
}

function confirmFunc(){
    let txt;

    if(window.confirm(`'confirm': Press 'ok' or 'cancel'`)){
        txt = `it's okay`;
    } else {
        txt = `You canceled this`;
    };
    confirm.innerHTML = txt;
}
function promptFunc(){
    let txt;

    let person = window.prompt(`'prompt': enter somthing`, `Labib irfan`); //second are default value;

    if(person === null || person === ""){
        txt = `Please enter your name`;
    } else {
        txt = `Hello ${person} How are you?`
    }

    prompt.innerHTML = txt;

}



// Timing:
const timeout = document.querySelector(`.timeout`);
const interval = document.querySelector(`.interval`);

let setTime;
function setTimeoutFunc(){

    setTime = setTimeout(() => {
        timeout.innerHTML = `after 3 second i'll show`;
    }, 3000);

}

function stopTimeoutFunc(){
    clearTimeout(setTime);
}

// interval:
let setTimeInterval;
function startInterval(){

    setTimeInterval = setInterval(() => {
        interval.innerHTML = Date();
    }, 1000);
}

function stopInterval() {
    clearInterval(setTimeInterval);
}




// Cookies:
