// Reverse array:
const arr = [2, 4, 6, 8, 10];
const reversedArr = arr.reverse();
console.log(arr); // Reversed main array.

// toReversed:
const arr2 = [1, 3, 5, 7];
const rvrsed = arr2.toReversed();
console.log(rvrsed); // [7, 5, 3, 1]
console.log(arr2); // [1, 3, 5, 7]

// splice:
const forSplice = [4, 6, 8, 10];
const splicedArr = forSplice.splice(2,2,201,202);
console.log(splicedArr)
console.log(forSplice); // [ 4, 6, 201, 202 ]

// toSpliced:
const forSplice2 = [4, 6, 8, 10];
const splicedArr2 = forSplice.toSpliced(2,2,201,202);
console.log(splicedArr2) // [4, 6, 201, 202]
console.log(forSplice2); //  [4, 6, 8, 10]


// sort > toSorted.