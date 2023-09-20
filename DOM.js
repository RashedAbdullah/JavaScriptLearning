console.log(`'DOM' is here`);
// 'D'ocument  'O'bject  'M'odel;

console.log(`POEM`);
// 'P'roperties  'O'bject  'E'vent  'M'ethods



// Document:
console.dir(document);
console.log(document.URL); //http://127.0.0.1:5500/index.html
console.log(typeof document); //object


// catch by id:
const idCatch = document.getElementById(`idCatch`);
console.log(idCatch); //<p id="idCatch"></p>

// Catch by class:
const catchByClass = document.getElementsByClassName(`catchByClass`);
console.log(catchByClass); //HTMLCollection [p.catchByClass]

// multiple class:
const multipleClass = document.getElementsByClassName(`multipleClass`);
console.log(multipleClass); //HTMLCollection(3) [p.multipleClass, p.multipleClass, p.multipleClass] (length:3)

// catch by tag name:
const catchByTagName = document.getElementsByTagName(`h4`);
console.log(catchByTagName); //HTMLCollection [h4]

// catch everything: (querySelector) (it's most useble)
const querySelectorClass = document.querySelector(`.querySelectorClass`); // (class);
const querySelectorId = document.querySelector(`#querySelectorId`) //(id);
// const everyP = document.querySelectorAll(`p`); //(.querySelectorAll);

console.log(querySelectorClass); //<p class="querySelectorClass"></p>
console.log(querySelectorId); //<p id="querySelectorId"></p>
// console.log(everyP); //NodeList(44) (mean i have still now 44 p tag)

// form selector:
const form1 = document.forms[`form1`];

const formValue = document.querySelector(`.formValue`);
// let vlaues = ``;
// for(let i = 0; i < form1.length; i++){
//     vlaues += form1.elements[i].value + `<br>`;
// }
// formValue.innerHTML = vlaues;
// and we have more huge selectors in document;
//document.body, document.images and more...



// push or change in HTML: (innerHTML)
idCatch.innerHTML = `id Catch by 'document.getElementById'`;

//push or change attribute:
const imgChange = document.querySelector(`#imgChange`);
imgChange.src = `./img/pxl2.jpg`;


// form validation:
function validationForm(){
    const validForm = document.forms[`form2`][`yourName`];
    if(validForm.value == `` || validForm.value < 1 || validForm.value > 1){
        alert(`plese input your name`);
        validForm.value = ``;
        return false;
    } else {
        validForm.value = ``;
        return true;
    }
}



// DOM CSS:
const cssStyle = document.querySelector(`.cssStyle`);
cssStyle.style.backgroundColor = `red`;
cssStyle.style.color = `white`;
cssStyle.style.fontSize = `30px`; //(no hyphen-, only camelCase)
cssStyle.style.padding = `50px`;





// DOM Animation:

function DOM_Animation(){
    const smallBox = document.querySelector(`.smallBox`);
    let position = 0;

    const interval = setInterval(() => {
        position ++;

        if(position < 250){
            smallBox.style.top = `${position + `px`}`;
            smallBox.style.left = `${position + `px`}`;
        } else {
            clearInterval(interval);
        }
    }, 10);
};

// another practice:
function animationPractice(){
    const smallBox2 = document.querySelector(`.smallBox2`);
    let positionMove = 0;

    const intervalSeting = setInterval(() => {
        positionMove ++;
        
        if(positionMove < 300){
            smallBox2.style.top = positionMove + `px`;
            smallBox2.style.left = positionMove + `px`;
        } else {
            clearInterval(intervalSeting);
        }
    }, 10);
}




// Event in evetn.js




// DOM Navigation: (nodeRelationship)
const parentNode = document.querySelector(`.parentNode`);
const child1 = document.querySelector(`.child1`);
const child2 = document.querySelector(`.child2`);

// parentNode:
console.log(child1.parentNode); //<div class="Navigation">…</div>
// childNodes:
console.log(parentNode.childNodes); //NodeList(5) [text, p.child1, text, p.child2, text]
// childNodes[index]:
console.log(parentNode.childNodes[3]); //<p class="child2">DOM Navigation</p>
// firstChild:
console.log(parentNode.firstChild); //#text
// lastChild:
console.log(parentNode.lastChild); //#text
// nextSibling:
console.log(child1.nextSibling); //#text
// previousSibling:
console.log(child2.previousSibling); //#text



console.log(child1.innerHTML); //DOM Navigation
console.log(child1.firstChild.nodeValue); //DOM Navigation
console.log(child1.childNodes); //NodeList [text]
console.log(child1.childNodes[0]); //"DOM Navigation"
console.log(child1.childNodes[0].nodeValue); //DOM Navigation
console.log(child1.firstChild.nodeValue[0]); //D
// child1.firstChild.nodeValue = `changed by Rashed`; (i'ts working)


// create element:
const createElement = document.createElement(`h3`); //<h3></h3>
// createTextNode:
const createTextNode = document.createTextNode(`This is 'createTextNode'`);
// appendChild: (for push element on other elemet as child)
createElement.appendChild(createTextNode); //(pushed created text on created element);
// pushing on HTML: (as last of child elemet)
const parentElement = document.querySelector(`.parentElement`); //(catched parentElement);
parentElement.appendChild(createElement); //added in last of child elements;

// add in frist of child elements:
const firstElement = document.querySelector(`.firstElement`); //(catched fist element);
parentElement.insertBefore(createElement, firstElement); //inserted in first of other elements;


// removeElement: (just catch a element and call 'remove()' func, okay)
const secondElement = document.querySelector(`.secondElement`);
function removeFunc(){secondElement.remove();} //just click and remove;
// 'removeChild' func for remove children;
// 'replaceChild()' for replace child element;



// tagName: HTMLCollection/  querySelctor: Nodelist: (both are object like array)

// NodeList:
const node = document.querySelectorAll(`.node`);
console.log(node); //NodeList(2) [p.node, p.node]
console.log(node); //NodeList(2) [p.node, p.node]
console.log(node.length); //2
// catch by index:
console.log(node[1]); //<p class="node">Hello world 2</p>

// HTMLCollection:
const TageNames = document.getElementsByTagName(`h3`);
console.log(TageNames); //HTMLCollection [h3]
console.log(TageNames.length); //1
// index:
console.log(TageNames[0]); //<h3>This is 'createTextNode'</h3>


// Defference between HTMLCollection and NodeList:
/*
HTMLCollection: collection of HTML elements.
NodeList: collection of document nodes.

NodeList: only catched by index number, but HTMLCollection can you catch index, id, name and more..
*/