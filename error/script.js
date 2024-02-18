const err = new Error("Errors...");
console.dir(err.message);

// throw custom error with any condation:
// this error have two methods: message and name.
// throw new Error("This is custom error");
// throw new RangeError();
// throw new ReferenceError();
// throw new SyntaxError();
// throw TypeError();

// const num = NaN;
// if (!num) {
//   throw new Error("num is false");
// }

console.log(NaN === NaN); //false
console.log(undefined === undefined); //true

try {
  console.log("trying...");
  throw new Error("Rashed Abdullah...");
} catch {
  console.log("Don't need parameter in catch when we're not using...");
}

try {
  console.log("trying...");
  throw new Error("Custom throwing error...");
} catch (e) {
  console.log(e.message);
}

class Customerr extends Error {
  constructor(errMsg) {
    super(errMsg);
  }
}
