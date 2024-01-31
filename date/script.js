const date = new Date();
console.log(date.toDateString()); //Wed Jan 31 2024
console.log(date.toLocaleDateString("bn")); //৩১/১/২০২৪
console.log(date.toTimeString()); //01:20:51 GMT+0600 (Bangladesh Standard Time)
console.log(date.toLocaleTimeString("bn")); //১:২০:৫৯ AM
console.log(date.toUTCString()); //Tue, 30 Jan 2024 19:21:05 GMT
console.log(date.toISOString()); //2024-01-30T19:21:12.488Z

console.log(date.getFullYear()); //2024
console.log(date.getMonth() +1); //1
console.log(date.getDate()); //31
console.log(date.getHours()); //2
console.log(date.getMinutes()); //24
console.log(date.getSeconds()); //42
console.log(date.getUTCDay()); //2
console.log(date.getDay()); //3