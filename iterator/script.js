const arr = [2, 4, 6, 8, 10];
const str = "Rashed";
const obj = { name: "Labib", age: 3 };

// for check is iterator or not:
console.log(arr[Symbol.iterator]);
console.log(str[Symbol.iterator]);
console.log(obj[Symbol.iterator]); //undefined

// for make iterator:
const iterate = arr[Symbol.iterator]();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next()); //{value: 10, done: false}
console.log(iterate.next()); //{value: undefined, done: true}

const iterateStr = str[Symbol.iterator]();
console.log(iterateStr.next());
console.log(iterateStr.next());
console.log(iterateStr.next());
console.log(iterateStr.next());
console.log(iterateStr.next());
console.log(iterateStr.next()); //{value: 'd', done: false}
console.log(iterateStr.next()); //{value: undefined, done: true}

console.log(isIterable(arr));
