console.log(`Map, it's not a syntactic sugar`);

//(it's like as object, example of 'set', he is like as array);

//Map is a new data structor; not map who method of array; Map can accept function, boolean, intejer, charactar or string, anything of data;

// and in object 'key' allways 'string', but in Map 'key' can number, string and others;

//Order in 'Mep' important, not like Object;



//new Map;
const newMapCreate = new Map([
    [`myName`, `Rashed Abdullah`],
    [`myFather`, `Mowlana Abdullah`],
    [`myMother`, `Rabea Akter`]]);

console.log(newMapCreate); //Map(3) {'myName' => 'Rashed Abdullah', 'myFather' => 'Mowlana Abdullah', 'myMother' => 'Rabea Akter'}




//for input a value in Map  =  set:
const newMap = new Map();
console.log(newMap);

newMap.set(`Full Name`, `Labib irfan`); 
console.log(newMap); ////Map(1) {'Full Name' => 'Labib irfan'}
newMap.set(`Nephew`, `Rashed Abdullah`);
console.log(newMap); ////Map(2) {'Full Name' => 'Labib irfan', 'Nephew' => 'Rashed Abdullah'}


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

console.log(lbb); //Map(3) {'Name' => 'Labib irfan', 'Father' => 'Abdul halim irfan', 'Mother' => 'Bibi Mariam Maria'}


// size: (like 'length')
console.log(lbb.size); //3


//forEach:
lbb.forEach((value, key) => console.log(`${key}: ${value}`));
/*  Name: Labib irfan
    Father: Abdul halim irfan
    Mother: Bibi Mariam Maria */


//for of:
for(let [key, value] of lbb.entries()){
    console.log(`${key}: ${value}`);
};
/*  Name: Labib irfan
    Father: Abdul halim irfan
    Mother: Bibi Mariam Maria */


//for in:
for(i in lbb){
    console.log(lbb[i]);  //Brwoser totally ignoring this;
};


// type of Map:
console.log(typeof lbb); //object;

// instanceof:
console.log(lbb instanceof Map); //true;