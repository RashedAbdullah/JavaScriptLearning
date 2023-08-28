console.log(`Date Object`);

console.log(Date());

//new Date()  (four way);

//Date.now
console.log(new Date());
//year,month,day,hours,minutes,seconds,milliseconds
console.log(new Date(1999, 10,30, 12, 45, 58, 1000));
//milliseconds:
console.log(new Date(2000));
//Date string:
// console.log(new Date(`january`))

console.log(new Date(-2000000000))
console.log(new Date(86400000))

//toUTCString:

const d = new Date();
console.log(d.toUTCString());
console.log(d.toISOString());