console.log(`Template Literal`);

function templateLiteral(name, dob){
    console.log(`im ${name} and ${2023 - dob} year old!`)
}
templateLiteral(`Rashed Abdullah`, 1999);
templateLiteral(`Labib irfan`, 2020);


// Teget Templates;
const names = `Rashed Abdullah`;
const age = 23;

function aFunc(names, age){
    names = `Rashed Abdullah`;
    age = 23;
}
aFunc`i'm ${names} and my age is: ${age}`;