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
    console.log("this is winner " + rang);
    winner = false;
  } else {
    console.log(rang);
  }
}
