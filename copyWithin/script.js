const arr = ["Rashed", "Labib", "Mahmud", "Habib"];
arr.copyWithin(2, 1, 3); //(target, start, end). [ 'Rashed', 'Labib', 'Labib', 'Mahmud' ]
console.log(arr);

// Target is required, start is optional - default value 0, end is also optional - default value Array.length, never changes array's length, overwrites original array, returns modified array.