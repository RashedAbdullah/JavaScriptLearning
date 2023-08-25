console.log(`Map,
it's not a syntactic sugar`);

//Map is a new data structor; not map who method of array; Map can accept function, boolean, intejer, charactar or string, anything of data;

//new Map;
const newMap = new Map();
console.log(newMap);

//for set a value in Map;
newMap.set(`Full Name`, `Labib irfan`);
console.log(newMap);
newMap.set(`Nephew`, `Rashed Abdullah`);
console.log(newMap);

//for access a data; ('get' method);
console.log(newMap.get(`Full Name`));
console.log(newMap.get(`Nephew`));

//for chake a value;
console.log(newMap.has(`Full Name`)); //true;

//to remove a item;
newMap.delete(`Nephew`);
console.log(newMap);

//to clear all item;
newMap.clear();
console.log(newMap);





const lbb = new Map();

lbb.set(`Name`, `Labib irfan`);
lbb.set(`Father`, `Abdul halim irfan`);
lbb.set(`Mother`, `Bibi Mariam Maria`);

console.log(lbb);

//size method;
console.log(lbb.size);

//loop by forEach:
lbb.forEach((value, key) => console.log(`My key is: ${key} and My Value is: ${value}`));

console.log(`---------------`)

//loop by for of:
for(let [key, value] of lbb.entries()){
    console.log(`Key is: ${key} and Value is: ${value}`);
}