// Object's key only can be string, but Map's key can be anythings. like number, object and others.

const map = new Map([
  [4, 5],
  ["Name", "Labib"],
  [{ name: "Rashed" }, { father: "Abdullah" }],
  [true, false],
]);
console.log(map);

console.log(map.entries());
console.log(map.keys());
console.log(map.values());

map.forEach((v, k) => {
  console.log(k, v); // returned only last key and value.
});

for (let [k, v] of map) {
  console.log(k, v); // Same problem; maybe for non-primitive value.
}

const weak = new WeakMap([[[], []]]);
console.log(weak);
