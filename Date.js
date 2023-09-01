console.log(`DateObject is here`);

console.log(Date());

//new Date()  (four way);

//Date.now
console.log(new Date());
//year,month,day,hours,minutes,seconds,milliseconds
console.log(new Date(1999, 10,30, 12, 45, 58, 1000));
//milliseconds:
console.log(new Date(2000));
//Date string: (does't know how to work);
// console.log(new Date(`january`))

console.log(new Date(-2000000000))
console.log(new Date(86400000))

//toUTCString: (it's recommended);

const d = new Date();
console.log(d.toUTCString());
console.log(d.toISOString());

const newDate = new Date();
let dateUTC = document.querySelector(`.dateUTC`);
dateUTC.innerHTML = newDate.toDateString();

//  Date.parse() to convert to milliseconds;
console.log(Date.parse(`1999 nov 30`));

// get...()
console.log(d.getTime()); // all milliseconds from 1970 to today
console.log(d.getFullYear()); //Only return year (2023);
console.log(d.getMonth()+1); //8(9)
console.log(d.getUTCMonth()+1); //8(9)
console.log(d.getDate());
console.log(d.getUTCDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMilliseconds());
console.log(d.getSeconds());
console.log(d.getUTCSeconds());
console.log(d.getTimezoneOffset()); //what is this?


// set...()
console.log(d.setFullYear(2023));
console.log(d.setMonth(10));
