let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);

const arr = ["Labib", "Ismat", "Mahmud", "Rashed", "Imtiaz", "Itisam"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("Break........");

let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

let winner = true;
while (winner) {
  const rang = Math.floor(Math.random() * 10 + 1);
  if (rang === 5) {
    console.log("Winner is " + rang);
    winner = false;
  } else {
    console.log(rang);
  }
}

// do while:
const doWhile = false;

do {
  console.log("Hello do while loop " + doWhile);
} while (doWhile);

// Nested loop:
let star = 10;
for (let i = 1; i <= star; i++) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result += "*" + " ";
  }
  console.log(result);
}

// Length of string with while loop:
let myName = "Rashed Abdullah";
let length = 0;
while (true) {
  if (myName.charAt(length) == "") {
    break;
  } else {
    length++;
  }
}
console.log(length);
console.log(myName.length);
