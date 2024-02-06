console.log("Rashed".padStart(20, "*"));
console.log("Rashed".padEnd(20, "*"));

// deafult parameter befor ES6:
function deafultPara(a, b) {
  // first way:
  a = a || 5;
  // scnd way:
  if (!b) {
    b = 10;
  }

  return a + b;
}
console.log(deafultPara(20, 20));
console.log(deafultPara());
