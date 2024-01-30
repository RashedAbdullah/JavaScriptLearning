const sets = new Set();
sets
  .add("Rashed")
  .add("Labib")
  .add("Mahmud")
  .add("Ahmadullah")
  .delete("Mahmud");

// sets.delete("Rashed");
// sets.clear();
console.log(sets);
console.log(sets.size);

// array to Set:
const arr = [5, 6, 7, 8, 9, 10];
const arrToSet = new Set(arr);
console.log(arrToSet);

// string to Set:
const str = "Strings";
const strToSet = new Set(str);
console.log(strToSet);

for (let itr of strToSet) {
  console.log(itr);
}

// Set to array:
console.log([...strToSet]);
console.log(Array.from(strToSet));

// Array to Set, again Set to array with unique values:
const arrRep = [2, 5, 4, 3, 4, 2, 4, 5];
console.log([...new Set(arrRep)]);

const arr1 = new Set([2, 4, 6]);
const arr2 = new Set([4, 2, 8]);
console.log([...new Set([...arr1, ...arr2])]);

// not unique values:
const intersections = new Set([...arr1].filter((a) => arr2.has(a)));
console.log([...intersections]);

// Unique values:
const uniques = new Set([...arr1].filter((a) => !arr2.has(a)));
console.log([...uniques]);

// WeakSet:
const ws = new WeakSet([{ a: 5 }, { b: 10 }]);
ws.add({ c: 15 });
console.log(ws);
