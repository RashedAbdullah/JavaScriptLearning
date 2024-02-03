const arr = [2, 3, 4, 5, 7, 3, 2, 9, 12, 23];
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  arr[i] = arr[i] + 1;
  console.log(arr[i]);
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// even and odd numbers:
let even = [];
let odd = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}
console.log(even);
console.log(odd);

// Traverse multidimensional array:
const multidymentionalArr = [
  [32, 4, 5, 34, 62],
  [34, 56, 34, 6],
  [6, 34, 24, 54],
];

for (let i = 0; i < multidymentionalArr.length; i++) {
  for (let j = 0; j < multidymentionalArr[i].length; j++) {
    console.log(`${i}: ${multidymentionalArr[i][j]}`);
  }
}

console.log("Break...");

const multiArr = [
  [
    [5, 10, 15, 20, 25, 30],
    [6, 11, 16, 21, 26, 31],
  ],
  [
    [5, 10, 15, 20, 25, 30],
    [6, 11, 16, 21, 26, 31],
  ],
];

for (let i = 0; i < multiArr.length; i++) {
  for (let j = 0; j < multiArr[i].length; j++) {
    for (let k = 0; k < multiArr[j][j].length; k++) {
      console.log(`${j}: ${multiArr[i][j][k]}`);
    }
  }
}

const fiveDimArr = [
  [
    [
      [
        ["Rashed", "Faruque"],
        ["Noman", "irfan"],
      ],
      [
        ["Nayeem", "Faysal"],
        ["Labib", "Ismat"],
      ],
    ],
  ],
];

for (let i = 0; i < fiveDimArr.length; i++) {
  for (let j = 0; j < fiveDimArr[i].length; j++) {
    for (let k = 0; k < fiveDimArr[i][j].length; k++) {
      for (let l = 0; l < fiveDimArr[i][j][k].length; l++) {
        for (let m = 0; m < fiveDimArr[i][j][k][l].length; m++) {
          console.log(fiveDimArr[i][j][k][l][m]);
        }
      }
    }
  }
}

// Reverse array:
let reverseArr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0; i < reverseArr.length / 2; i++) {
  let temp = reverseArr[i];
  reverseArr[i] = reverseArr[reverseArr.length - 1 - i];
  reverseArr[reverseArr.length - 1 - i] = temp;
}
console.log(reverseArr);

console.log(reverseArr.concat(arr));

console.log(reverseArr);

// it's cannot mute original array:
let rvrs = Array.from(reverseArr);
rvrs[2] = 200;
console.log(rvrs);

// forEach:
const forEachArr = [3, 4, 3, 5, 3, 2];
forEachArr.forEach((value, index, array) => {
  console.log(value);
});

console.log("Break...");
// behind the scenes:
const forEachFunc = (value, cb) => {
  for (let i = 0; i < value.length; i++) {
    cb(value[i], i, value);
  }
};
forEachFunc(reverseArr, (value, index, array) =>
  console.log(value, index, array)
);

console.log("Break...");

const oneMoreForEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
};
oneMoreForEach(arr, (value, i, arr) => {
  console.log(value, i, arr);
});

const sumOfArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumOfArr([2, 34, 43, 43, 43]));

console.log([2, 3, 5, 10].map((value, index) => value * 2));
const testArr = [3, 3, 4].map((value, index) => console.log(value + index));

// filter behind the scenes.
const filtereFunc = (arr, cb) => {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

console.log(
  filtereFunc(arr, (value) => {
    return value % 2 === 0;
  })
);
console.log(filtereFunc(arr, (value) => value === 3));

const reduce = [5, 5, 5, 5].reduce((prev, crr) => {
  return prev + crr;
}, 0);
console.log(reduce);
const reduce2 = [5, 5, 5, 5].reduce((prev, crr) => {
  return (prev += crr);
}, 0);
console.log(reduce2);

// Maximum value with reducer:
console.log(
  [3, 5, 32, 5, 23, 3].reduce((prev, crr) => {
    return Math.max(prev, crr);
  })
);

// Reduce behind the scenes:
const reduceFunc = (arr, cb, acc) => {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
};
console.log(
  reduceFunc(
    [4, 4],
    (prev, crr) => {
      return prev + crr;
    },
    0
  )
);

console.log(
  reduceFunc(
    [3, 5, 2, 4, 54, 23],
    (prev, crr) => {
      return Math.max(prev, crr);
    },
    0
  )
);

const min = [3, 5, 2, 4, 54, 23];
console.log(
  reduceFunc(
    min,
    (prev, crr) => {
      return Math.min(prev, crr);
    },
    min[0]
  )
);
