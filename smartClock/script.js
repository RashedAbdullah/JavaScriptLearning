const parentBox = document.querySelector(".parent");
const timeBox = document.querySelector(".time");
const dateBox = document.querySelector(".date p");

const h2 = document.createElement("h2");

const localTimeFunc = () => {
  setInterval(() => {
    const date = new Date();
    timeBox.appendChild(h2);
    h2.innerText = date.toLocaleTimeString("bn");
  }, 1000);

  const date = new Date();
  dateBox.innerText = date.toLocaleDateString("bn");
};

localTimeFunc();
