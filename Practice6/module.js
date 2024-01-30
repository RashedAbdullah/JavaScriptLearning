// import {a,b} from './export.js';

//change the declaration name:
// import {a as var1,b as var2} from './export.js'; //Named import.

// import all exported value:
// import * as test from './export.js';

// default import we can catch with any name: 
import external, {a} from './export.js'

console.log(external);
console.log(a);
// console.log(var2);