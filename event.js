console.log(`'Event' is here`);

function textChange(){
    const changText = document.querySelector(`.changText`);
    changText.innerHTML = `My Name is Labib irfan`;
}

const addEvent = document.querySelector(`.addEvent`);

// it's also a way to print event on HTML:
addEvent.onclick = ()=> console.log(`Hello world`);


// eventListener:
//1
const eventListener1 = document.querySelector(`.eventListener1`);
eventListener1.addEventListener(`click`, ()=>console.log(`Hello world`))
//2
const eventListener2 = document.querySelector(`.eventListener2`);
function addEventListenerFunc(){
    console.log(`this is second way to make addEventListener`);
}
eventListener2.addEventListener(`click`, addEventListenerFunc); //(function body)
// multiple addEventlistener:
eventListener1.addEventListener(`click`, ()=>console.log(`I'm Labib irfan`));
eventListener1.addEventListener(`mouseover`, ()=>console.log(`My mother is maria`));
//for parameter:
function para(texts){
    console.log(texts);
}
eventListener2.addEventListener(`click`, ()=>{para(`With paramenter and arguments`)})

// window.eventListener:
function windowResize(){console.log(`window resized by user`)};
window.addEventListener(`resize`, windowResize);
window.addEventListener(`load`, ()=>console.log(`window loaded`));
window.addEventListener(`resize`, ()=>console.log(`clicked wondow event`));
window.addEventListener(`keydown`,()=>console.log(`window keydown`)); //(don't know how work);
window.addEventListener(`scroll`, ()=>console.log(`You're scrolling now`));
// and more huge option for window.addEventListener;


//Third parameter of addEventListener:
const div = document.querySelector(`.div`);
const button = document.querySelector(`.button`);

div.addEventListener(`click`, ()=>console.log(`this is div`), true); //printed second  (after 'true' printed first)
button.addEventListener(`click`, ()=>console.log(`this is button`), true); //printed first (after 'true' printed last)
// it's default system of event, named as 'bubling' 
// when we want to print div befor button then third paramenter: true (named as 'capture')

//removeEventListener:
const removeListen = document.querySelector(`.removeListen`);

function remove(){
    window.removeEventListener(`scroll`, windowResize());
} //totaly not working;