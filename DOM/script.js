const menu = document.getElementById("menu");
// const elements = [...menu.children];

// let abcd = [];
// let efg = [];
// for(let i = 0; i < elements.length; i++){
//     if(elements[i].tagName === "DIV"){

//         const lastLi = [...elements[i].children[0].children];
//             lastLi.forEach(elem => {
//                 efg.push(elem);
//             });

//         continue;

//     } else {
//         abcd.push(elements[i]);
//     }
// };

// const fullArr = abcd.concat(efg);
// fullArr.forEach(elem=>{
//     console.log(elem);
// });

// const h3 = document.createElement('h3');
// const h4 = document.createElement('h4');
// h3.innerHTML = "this is h3 element";
// h4.innerHTML = "this is h4"

// menu.appendChild(h3);
// menu.insertBefore(h4, h3);

const btn = document.querySelector(".btn");

let i = 0;
btn.addEventListener("click", () => {
  const li = document.createElement("li");

  menu.insertAdjacentElement("beforeend", li);
  li.innerText = i = i + 5;
});

// menu.insertAdjacentElement("beforebegin", li);
// menu.insertAdjacentElement("beforeend", li);
// menu.insertAdjacentElement("afterend", li);

const form = document.querySelector("#formValue");
const setValue = document.querySelector(".setValue");
const inputBox = document.querySelector(".inputBox");

form.addEventListener("keypress", (e) => {
  console.log(e);

  setValue.innerText = inputBox.value;
  // console.log(e.target.value)

  // e.preventDefault();
});

const x = document.querySelector(".x");
const y = document.querySelector(".y");

function addValues(e) {
  x.innerText = `X value is: ${e.clientX}`;
  y.innerText = `Y value is: ${e.clientY}`;
}

const mouse = document.querySelector(".mosue");
mouse.addEventListener("mousemove", (e) => {
  addValues(e);
});

const inc = document.querySelector(".inc");
console.log(inc);
const dic = document.querySelector(".dic");
const incDinc = document.querySelector(".inc-dinc-value");
console.log(incDinc);

let plus = 0;

inc.addEventListener("click", () => {
  incDinc.innerText = plus++;
});

dic.addEventListener("click", () => {
  incDinc.innerText = plus--;
});
