var num1 = 5;
var num2 = 4;
var sum = function () {
  return num1 + num2;
};
console.dir(sum); // [[Scopes]]:Scopes[1]

var num3 = 3;
var sum2 = function () {
  var num4 = 4;
  var num5 = 5;
  return function () {
    return num4 + num5;
  };
};

console.dir(sum2()); //0 : Closure (sum2) {num4: 4}, 1: Global {window: Window, self: Window, ...
