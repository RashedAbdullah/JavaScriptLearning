const person = [
  {
    name: "Pir Shaheb",
    age: 22,
    address: {
      homeTown: {
        thana: "goripur",
      },
    },
  },
  {
    name: "Light Yagami",
    age: 24,
    address: {
      homeTown: {
        thana: "raipura",
      },
    },
  },
  {
    name: "Rezaul Karim",
    age: 28,
    address: {
      homeTown: {
        
      },
    },
  },
];

console.log(person.map((p) =>p?.address?.homeTown?.thana ?? "Mathbaria"));
// Nullish Coalescing operator- set a default value instead of undefined or null;


// ternary operator
person.map((p) =>p?.address?.homeTown ? p?.address?.homeTown?.thana : "Mathbaria");