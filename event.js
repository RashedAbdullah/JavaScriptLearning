// alert(`Hello i'm Event `)


let today = document.getElementById("today");

function Show(){
    if(Number === String){
        today.innerHTML = print();
    } else {
        today.innerHTML = Date();
    }
}

let inJavaScript = document.querySelector("#inJs");

inJavaScript.onclick = function(){
    let showInIs  = document.querySelector("#showInJs");
    
    if(5 === 6){
        showInIs.innerHTML = `Hello Labib irfan`;
    } else if(6 === 7){
        showInIs.innerHTML = `Hello Rashed Abdullah`;
    } else {
        showInIs.innerHTML = `Sorry, i don't know anything about you`;
    }
    
}


// AddEventListener

const button = document.querySelector("#button");

button.addEventListener("click", function(){

    const buttonListener = document.querySelector("#buttonListener");
    const buttonListenerDate = document.querySelector("#buttonListenerDate");

    buttonListener.innerHTML = `Hello addEventListener, How are you?`;
    buttonListenerDate.innerHTML = Date();

})


const mouse = document.querySelector("#mouse");
mouse.addEventListener("mouseover", function(){
    const mouseListener = document.querySelector("#mouseListener");
    mouseListener.innerHTML = 'This Event will show when mouse overed';
})


// Bubbling (and modified by stopPropagation);
const head = document.querySelector("#head");
const child = document.querySelector("#child");

child.addEventListener("click", function(){
    console.log(`This is child`);
}, true);

head.addEventListener("click", function(event){
    event.stopPropagation();
    console.log(`This is head`);
}, true);

console.dir(head);



const link = document.querySelector("#link");

link.addEventListener("click", function(event){
    event.preventDefault();
});