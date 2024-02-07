console.log("Rashed".padStart(20, "*"));
console.log("Rashed".padEnd(20, "*"));

// deafult parameter befor ES6:
function deafultPara(a, b) {
  // first way:
  a = a || 5;
  // scnd way:
  if (!b) {
    b = 10;
  }

  return a + b;
}
console.log(deafultPara(20, 20));
console.log(deafultPara());

// Now:
const deafultParameter = (a = 5, b = 10) => {
  console.log();
  return a + b;
};
console.log(deafultParameter());
console.log(deafultParameter(20, 20));

// Rest operator:
const restFunc = (...rest) => {
  return rest.reduce((prev, crr) => (prev += crr));
};

console.log(restFunc(2, 1, 1, 1, 1));

// Spread operator:
const arr = ["Rashed", "Labib", "Ismat", "Mahmud", "Rakib"];
console.log(...arr);

// Destructuring array:
const [myName, newphewName, scndnewphew /*ignor this*/, , Rakib] = arr;
console.log(newphewName);

const obj = {
  a: "Rashed",
  b: "Labib",
};
const obj2 = {
  ...obj,
};

const obj3 = obj;
console.log(obj === obj2); //false
console.log(obj === obj3); //true

obj.a = "Ismat";
console.log(obj2); //{a: 'Rashed', b: 'Labib'}

// Destructuring object:
const { a, b } = obj2;
console.log(b); // Labib

// Enhace object:
let num1 = 5,
  num2 = 10;
const enhanceObj = {
  num1,
  num2,
  func() {
    console.log("This is also a function");
  },
};
console.log(enhanceObj);
enhanceObj.func();

// mutli level object destrtucturing:
const obj1 = {
  fname: "Labib",
  lname: "Irfan",
  address: {
    home: "Sonagazi",
    city: "Feni",
    more: {
      sister: "Ismat",
      brother: "No one",
    },
  },
};
const {
  fname,
  lname,
  address: {
    home,
    city,
    more: { sister, brother },
  },
} = obj1;
console.log(sister);

// array to object:
const arrToObj = [
  ["a", 10],
  ["b", 20],
];
console.log(Object.fromEntries(arrToObj)); //{a: 10, b: 20}

const symbol = Symbol("Rashed Abdullah");
console.log(symbol);
