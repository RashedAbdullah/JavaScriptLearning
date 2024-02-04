class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  fullName() {
    return this.fname + " " + this.lname;
  }
}

const Labib = new Person("Labib", "Irfan");
console.log(Labib.fullName());
