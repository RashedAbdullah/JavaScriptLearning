class Person {
    constructor(name, age, profession, foundation){
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.foundation = foundation;
    }

    study3(){
        return `${this.name} is a student of ${this.foundation}`
    }
}

class Student extends Person {
    constructor(name, age, profession, study){
        super(name, age, profession);
        this.study = study;
    }
}

const lbb = new Student("Labib", 3, "Child", "Nothing");
console.log(lbb.study3())


const rashed = new Person("Rashed", 24, "Student", "As sunnah skill instation");
// console.log(rashed.study());