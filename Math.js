console.log(`Math is here`);

// he dos'nt have any constructor;

console.log(Math.round(45.49)); //45
console.log(Math.round(45.51)); //56
console.log(Math.ceil(43.1)) //44 (বাড়াবে)
console.log(Math.floor(43.1)) //43 (কমাবে)\
console.log(Math.trunc(43.54)) //43 (অতিরিক্ত কেটে ফেলে দিবে)
console.log(Math.trunc(43.33)) //43 (অতিরিক্ত কেটে ফেলে দিবে)

console.log(Math.sign(0)); // 0 (return 0 or one)
console.log(Math.sign(32)); // 1 (return 0 or one)
console.log(Math.sign(-43)); // -1 (return 0 or one)

console.log(Math.pow(3,4)); //it's i cannot understood;
console.log(Math.sqrt(3,4)); //it's i cannot understood;
console.log(Math.sin()) //it's i cannot understood;
console.log(Math.log()) //it's i cannot understood;
console.log(Math.log2()) //it's i cannot understood;
console.log(Math.log10()) //it's i cannot understood;
console.log(Math.log1p()) //it's i cannot understood;
// console.log(Math.LOG10E()) //it's i cannot understood;

console.log(Math.abs(-45.45)) // 45.45 "abs" meaning absolute; that's return positive from negetive number


//Maximum and minumum;
console.log(Math.max(34,54,65,75,24,23,65,23,78,32,56, -455, -343));
console.log(Math.min(34,54,65,75,24,23,65,23,78,32,56, -455, -343));

//random: return a random number after every refresh
console.log(Math.random())
console.log(Math.random())
console.log(Math.random() * 10)

// for a random integers;
console.log(Math.floor(Math.random() * 10)) // 0 to 9
console.log(Math.floor(Math.random() * 11)) // 0 to 10;
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10;

function mathRandom(min, max) {
    return Math.floor(Math.random() * (min - max + 1))+ min;
}
console.log(mathRandom(1,6));


function ludoFunc(){
    const randomBTN = document.querySelector(`.randomBTN`);
    const randomDisplay = document.querySelector(`.randomDisplay`);

    randomDisplay.innerHTML = Math.floor(Math.random() * 6) + 1;
}