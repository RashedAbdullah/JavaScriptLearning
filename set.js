console.log(`'set' is collection of unique values; some like array`);

const setSomthing = new Set([23,54,32,23,23,34,54]);
console.log(setSomthing); //'23' printed first one only, cause 'set' is unique;
// (Set(4) {23, 54, 32, 34})


//size:
console.log(setSomthing.size); //4 (only); ('length' in array)


//add:
const blankSet = new Set();

blankSet.add(23);
blankSet.add(24);
blankSet.add(25);
blankSet.add(24);
console.log(blankSet); //Set(3) {23, 24, 25}


//input variable in 'Set':
let a = `labib`;
let b = `ismat`;
let c = `rashed`;
let d = `ismat`;

const variableInSet = new Set([a,b,c,d]);
console.log(variableInSet); //cannot print 'd', cause similler of 'b';
// (Set(3) {'labib', 'ismat', 'rashed'})


//forEach: (like array);
variableInSet.forEach((value,index,array)=>{console.log(value)}); //labib, ismat, rashed


//values:
console.log(variableInSet.values()); //SetIterator {'labib', 'ismat', 'rashed'};

// keys:
console.log(variableInSet.keys()); //SetIterator {'labib', 'ismat', 'rashed'} ('Set' not have keys, so returns values);


//it's iterator, so we can use 'for of';
for(i of variableInSet){
    console.log(i); //working good;
    console.log(variableInSet[i]); //undefined;
};


// entries() returns [value,value] pairs instead of [key,value] pairs:
const entriesObj = {
    fName: `Rahsed`,
    lName: `Abdullah`
}

console.log(Object.entries(entriesObj)); //(2) [Array(2), Array(2)]
/*  0: (2) ['fName', 'Rahsed']
    1: (2) ['lName', 'Abdullah']
    length: 2    */


// [value, value] pairs:
const entriesSet = new Set([`Rashed`, `Labib`, `Khalid`]);
console.log(entriesSet); // Set(3) {'Rashed', 'Labib', 'Khalid'}

const entriesFnl =entriesSet.entries();

console.log(entriesFnl); //SetIterator {'Rashed' => 'Rashed', 'Labib' => 'Labib', 'Khalid' => 'Khalid'}

for(entry of entriesFnl){
    console.log(entry);
}
/*  (2) ['Rashed', 'Rashed']
    (2) ['Labib', 'Labib']
    (2) ['Khalid', 'Khalid']
*/


// type of 'Set':
console.log(typeof setSomthing); //object;


// 'Set' or not?:
console.log(setSomthing instanceof Set); //true