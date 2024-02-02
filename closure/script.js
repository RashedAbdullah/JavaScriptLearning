var num = 20;
function outerFunc() {
  var num2 = 30;
  return function () {
    return num + num2;
  };
}
var func = outerFunc();
console.dir(func);
