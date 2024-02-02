function func(a, b, cb) {
  return cb(a, b);
}

function plus(a, b) {
  return a + b;
}
function noPlus(a, b) {
  return a - b;
}

console.log(func(2, 5, plus));
console.log(func(12, 15, plus));
console.log(func(7, 6, noPlus));
console.log(func(2, 5, (a, b) => a * b));
console.log(
  func(10, 50, function (a, b) {
    return a % b;
  })
);
