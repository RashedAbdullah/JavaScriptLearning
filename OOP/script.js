class Person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }

  fullName() {
    return this.fname + " " + this.lname;
  }
}

const Labib = new Person("Labib", "Irfan", 3);
console.log(Labib);
console.log(Labib.fullName());

const obj = {
  name: function () {
    console.log(this);
  },
  age: 24,
};
obj.name();

const MyName = function (fname, lname) {
  this.fname = fname;
  this.lname = lname;

  this.fullName = function () {
    return `${this.fname} ${this.lname}`;
  };
};

const rashed = new MyName("Rashed", "Abdullah");
console.log(rashed.fullName());
