console.log(`JSON ih here`);

//'JSON' JavaScript Object Notation;

//JSON Syntax:
const JSONFile = `{
    "Family" :[
        {"Fname": "Rashed", "Lname": "Abdullah"},
        {"Fname": "Labib", "Lname": "irfan"}
    ]
}`
console.log(JSONFile);

// convert as a objcet:
const parsed = JSON.parse(JSONFile);
console.log(parsed); //{Family: Array(2)

//spacific ID:
console.log(parsed.Family[0].Lname); //Abdullah;
console.log(parsed.Family[1].Fname); //Labib;


//Object to JSON:
const rsd = {
    myName: `Rashed Abdullah`,
    Address: `Feni, Bangladesh`
}

const rsdJSON = JSON.stringify(rsd);
console.log(rsdJSON); //{"myName":"Rashed Abdullah","Address":"Feni, Bangladesh"}