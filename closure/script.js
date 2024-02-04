// যে ফাংশান ল্যক্সিকাল স্কোপকে মনে রাখতে পারে এবং তার এক্সেস পায়, তাকেই ক্লোজার বলে। এমনকি যখন ঐ ফাংশান যখন ল্যাক্সিকাল স্কােপের বাইরে এক্সিকিউট হয়, তখনও তার এক্সেস পায়।

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
