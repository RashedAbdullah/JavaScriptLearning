console.log(`inheritance`);


//ProtoType based inheritance;
const Person = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}
let rsd = new Person(`Rashed`, 23, `Student`);
console.log(rsd);
console.log(rsd.name);
console.log(rsd.job);
console.log(rsd.age);

console.log(Person)