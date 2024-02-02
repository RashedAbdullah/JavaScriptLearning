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
