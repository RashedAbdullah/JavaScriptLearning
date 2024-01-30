// g = > loop => func

// Pillar of OOP :
// Encapsulation
// Abstraction
// Inheritance
// Polymorphism

class Person {
    #protect;
    constructor(name, age, dis) {
      this.name = name;
      this.age = age;
      this.zella = dis;
    }
    setter(value) {
      this.#protect = value;
    }
    get getter() {
      return this.#protect;
    }
    sleeping() {
      return `${this.name} is sleeping`;
    }
  }
  
  class Cricketer extends Person {
    constructor(name, age, dis, role, nationality) {
      super(name, age, dis);
      this.role = role;
      this.nationality = nationality;
    }
    play() {
      return `${this.name} is playing CRICKET`;
    }
  
    sleeping() {
      return `${this.name} is sleeping at 12:00 am`;
    }
  }
  
  let mas = new Cricketer("sakib", 32, "magora", "cricket", "Bangladeshi");
  let p = new Person("karim", 32, "barisal");
  console.log(p.sleeping());
  console.log(mas.sleeping());
  console.log(p.getter);