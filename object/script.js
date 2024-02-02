const obj = {
  x: 20,
  y: 10,
};

let z = "x";
obj[z];

delete obj.x;
// console.log(obj);

// Compersion between object:
const obj1 = {
  x: 10,
  y: 20,
};
const obj2 = {
  x: 10,
  y: 20,
};
if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
  console.log(obj1);
} else {
  console.log(obj2);
}

// Have or not?
console.log("x" in obj2); //true.

for (let i in obj1) {
  console.log(`${i}: ${obj1[i]}`);
}

console.log(Object.entries(obj1));
console.log(Object.keys(obj1));
console.log(Object.values(obj1));

// for immuteble objcet copy:
const objCreate = Object.assign({}, obj1);
console.log(objCreate);
objCreate.x = 40;
console.log(obj1);
console.log(objCreate);
