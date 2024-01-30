const arr = [
  {
    name: "somthing",
    age: 50,
    // address: ["Feni", "Daka"]
  },
];

// If he doesn't have any data, then cannot show error, but return undefined.
console.log(
  arr.map((optnl) => {
    return optnl.address?.map((adrs) => {
      return adrs;
    });
  })
);

// nullish:
const n = null;
let u;
console.log(n ?? "It's was null");
console.log(u ?? "It's was undefined");
console.log((u || u) ?? "It's was null or undefined");

// Defference between nullish and or operator:
let notANumber = NaN;
console.log(notANumber || "it was not a number"); // it was not a number
console.log(notANumber ?? "it was not a number"); // NaN
