console.log(`Default parameter`);


//When we don't set arguement, then will set a default parameter;

//ES5:
function defaultPara(name, profession) {
    name ? name = name : name = 'Rashed Abdullah';
    profession ? profession = profession : profession = 'Student';
    console.log('My name is: ' + name + ' And im a ' + profession);
}

defaultPara();
defaultPara('Labib', 'Child');


//ES6:
function defaultPara6(name = `ismat`, profession = `Child`) {
    console.log(`My name is: ${name} and i'm a ${profession}`);
}
defaultPara6();
defaultPara6(`Rashed`, `Student`);


//function constructor

//ES5:
function funcConst(name, age){
    name ? name = name : name = 'Jahid';
    age ? age = age : age = 25;
    this.name = name;
    this.age = age;
}
var jahid = new funcConst();
console.log(jahid.name);
console.log(jahid.age);

var labib = new funcConst('Labib', 3);
console.log(labib.name);
console.log(labib.age);

var ismat = new funcConst('ismat', -1);
console.log(ismat.name);
console.log(ismat.age);


//ES6:
function funcConst6(name = 'Muhammad', age = 7) {
    this.name = name;
    this.age = age;
}

const muhammad = new funcConst6();
console.log(muhammad.name);
console.log(muhammad.age);

const shamim = new funcConst6('Shamim', 22);
console.log(shamim.name);
console.log(shamim.age);

const sojib = new funcConst6('Abdul akhir', 19);
console.log(sojib.name);
console.log(sojib.age);