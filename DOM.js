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
