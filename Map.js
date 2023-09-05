console.log(`Map, it's not a syntactic sugar`);

//(it's like as object, example of 'set', he is like as array);

//Map is a new data structor; not map who method of array; Map can accept function, boolean, intejer, charactar or string, anything of data;



//new Map;
const newMapCreate = new Map([
    [`myName`, `Rashed Abdullah`],
    [`myFather`, `Mowlana Abdullah`],
    [`myMother`, `Rabea Akter`]]);

console.log(newMapCreate);




//for input a value in Map  =  set:
const newMap = new Map();
console.log(newMap);

newMap.set(`Full Name`, `Labib irfan`);  //Map(1) {'Full Name' => 'Labib irfan'}
console.log(newMap);
newMap.set(`Nephew`, `Rashed Abdullah`); //Map(2) {'Full Name' => 'Labib irfan', 'Nephew' => 'Rashed Abdullah'}
console.log(newMap);


//for access a data    =   get:
console.log(newMap.get(`Full Name`));  //Labib irfan
console.log(newMap.get(`Nephew`));  //Rashed Abdullah


//for chake a value   =   has:
console.log(newMap.has(`Full Name`)); //true;

//to remove a item   =   delete:
newMap.delete(`Nephew`);
console.log(newMap);  // Map(1) {'Full Name' => 'Labib irfan'}

//to clear all item   =  clear:
newMap.clear();
console.log(newMap); // Map(0) {size: 0}





const lbb = new Map();

lbb.set(`Name`, `Labib irfan`);
lbb.set(`Father`, `Abdul halim irfan`);
lbb.set(`Mother`, `Bibi Mariam Maria`);

console.log(lbb);


// size:
console.log(lbb.size);


//forEach:
lbb.forEach((value, key) => console.log(`${key}: ${value}`));

console.log(`___________`);


//for of:
for(let [key, value] of lbb.entries()){
    console.log(`${key}: ${value}`);
}


//for in:
for(i in lbb){
    console.log(lbb[i]);  //Brwoser totally ignoring this;
}