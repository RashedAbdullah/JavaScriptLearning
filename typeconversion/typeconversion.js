// Number to String:
const numberToString = String(10);
console.log(typeof numberToString);

const num = 50;
const numtoStr = num.toString();
console.log(typeof numtoStr);
const trueValue = true;
console.log(trueValue.toString());

//String to Number:
const stringToNumber = Number("50");
console.log(typeof stringToNumber);

// String/Number/undefined/null to Boolean:
const str = "Rashed";
const empty = "";
const nums = 5;
const nums0 = 0;
console.log(Boolean(str)); //true.
console.log(Boolean(empty)); //false.
console.log(Boolean(nums)); //true.
console.log(Boolean(nums0)); //false.
console.log(Boolean(Infinity)); //true.
console.log(Boolean(-Infinity)); //true.
console.log(Boolean(null)); //false.
console.log(Boolean(undefined)); //false.
console.log(Boolean({})); //true
console.log(Boolean([])); //true
