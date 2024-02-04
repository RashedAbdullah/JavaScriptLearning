// যে ফাংশান ল্যক্সিকাল স্কোপকে মনে রাখতে পারে এবং তার এক্সেস পায়, তাকেই ক্লোজার বলে। এমনকি ঐ ফাংশান যখন ল্যাক্সিকাল স্কােপের বাইরে এক্সিকিউট হয়, তখনও তার এক্সেস পায়।

// যে ফাংশান ল্যক্সিকাল স্কোপকে মনে রাখতে পারে এবং তার এক্সেস পায়, তাকেই ক্লোজার বলে:
var num = 20;
function outerFunc() {
  var num2 = 30;
  return function () {
    return num + num2;
  };
}
var func = outerFunc();
console.dir(func);

// এমনকি যখন ঐ ফাংশান যখন ল্যাক্সিকাল স্কােপের বাইরে এক্সিকিউট হয়, তখনও তার এক্সেস পায়:
function closureFunc() {
  var story = "This is a outer function scope";
  return function () {
    return story;
  };
}
var closureVariable = closureFunc();
console.log(closureVariable()); // This is a outer function scope

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i); // It's printing 10 after every 1 scnd. So solution is IIFEE
//   }, 1000 * i);
// }

for (var i = 0; i < 10; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, 1000 * n);
  })(i);
}
