// reducing numbers by the function parameter and argument:
const arr1 = [32, 34, 4, 35, 35, 32];
const arr2 = [53, 24, 54, 34, 53];
const arr3 = [54, 2, 45, 54, 35];
function reducer(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
  }
  return temp;
}
console.log(reducer(arr1));
console.log(reducer(arr2));
console.log(reducer(arr3));

function arg(a, b) {
  console.log(arguments);
}
arg(1, 2);

function arg2(a, b, c, d) {
  //we can delete that parameters when we use
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
arg2("Rashed", "Labib", "Mahmud", "Namyeem");
console.log("break...");
arg2(
  "Rashed",
  "Labib",
  "Mahmud",
  "Namyeem",
  "Rashed",
  "Labib",
  "Mahmud",
  "Namyeem"
);

function arg3() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
arg3(2, 3, 4, 3, 4, 5, 5, 3, 5, 5);
arg3(4, 23, 53, 23, 45, 34, 23, 54);

// Default argument:
function defaultArg(name = "Rashed", age = 24) {
  console.log(name, age);
}
defaultArg();
defaultArg("Labib", 3);

console.log("Rashed".split("")[0]);

function nameArg(name) {
  console.log(`Wellcome mr. ${name.split(" ")[0]}`);
}
nameArg("Rashed Abdullah Feni Bangladesh");

function divide(div) {
  function a() {
    return div % 3 === 0;
  }
  function b() {
    return div % 5 === 0;
  }
  if (a() && b()) {
    console.log("This is you can divide by 3 and 5");
  } else {
    console.log("This number is not valid");
  }
}

divide(15);

const arr = [
  3,
  (para) => console.log("This is array function" + " " + para),
  23,
];
// This is way to call function of array
arr[1]("Rashed");

// Two cb function for add and divition:
function addAndDivideFunc(a, b, add, divide) {
  return add(a, b), divide(a, b);
}

function addFunc(a, b) {
  return a + b;
}
function divideFunc(a, b) {
  return a - b;
}

console.log(addAndDivideFunc(7, 6, addFunc, divideFunc));

const func1 = (fName) => {
  return (lName) => {
    return `${fName} ${lName}`;
  };
};

console.log(func1("Rashed")("Abdullah")); // There is also have closure.
