console.log(`'set' is collection of unique values; some like array`);

const setSomthing = new Set([23,54,32,23,23,34,54]);
console.log(setSomthing); //'23' printed first one only, couse 'set' is unique;


//size:
console.log(setSomthing.size); //4 (only); ('length' in array)


//add:
const blankSet = new Set();

blankSet.add(23);
blankSet.add(24);
blankSet.add(25);
blankSet.add(24);
console.log(blankSet);


//input variable in array:
let a = `labib`;
let b = `ismat`;
let c = `rashed`;
let d = `ismat`;

const variableInSet = new Set([a,b,c,d]);
console.log(variableInSet); //cannot print 'd', couse similler of 'b';


//forEach: (like array);
variableInSet.forEach((value,index,array)=>{console.log(value)});


//values:
console.log(variableInSet.values()); //SetIterator {'labib', 'ismat', 'rashed'};

//it's iterator, so we can use 'for of';
for(i of variableInSet){
    console.log(i); //working good;
    console.log(variableInSet[i]); //undefined;
};