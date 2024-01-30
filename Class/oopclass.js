// OOP: object oriented programming.

// Understand the basics of classes and instantiation:
class Book{
    constructor(title, auther, publishedYear){
        this.title = title;
        this.auther = auther;
        this.publishedYear = publishedYear;
    }
}

const book1 = new Book("The hobbies", "Hasan mahmud", 2021);
const book2 = new Book("حياتي", "أحمد أمين", 1989);
console.log(book1, book2);


// Practice creating objects using the new keyword:
class Dog{
    constructor(name,  breed){
        this.name = name;
        this.breed = breed;
    }
}

// Create an instance of Dog using the new keyword:
const aDog = new Dog("Bailey", "German Shepherd");
console.log(aDog);


// Explore polymorphism with a common interface:
class Shape{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    draw(){
        return `The height of this table ${this.height} and width is ${this.width}`
    }
}
class  Circle extends Shape {
    constructor(height, width, weight){
        super(height, width);
        this.weight = weight;
    }
}
class Square extends Shape {
    constructor(height, width, weight){
        super(height, width);
        this.weight - weight;
    }
}

// Polymorphism:
const myTable = new Square("6.5 inch", "7.3 inch", "35 kg");
console.log(myTable.draw()); // The height of this table 6.5 inch and width is 7.3 inch

const myChair = new Circle("3.3 inch", "4.3 inch", "14 kg");
console.log(myChair.draw()); //The height of this table 3.3 inch and width is 4.3 inch


// Explore inheritance by creating a hierarchy of animal classes:
class Animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
}

const cow = new Animal("cow", "hambaaaa");
console.log(cow);

class Dogs extends Animal{
    constructor(name, sound, breed){
        super(name, sound);
        this.breed = breed;
    }
    makeSound() {
        return `This is a ${this.name} and his sound ${this.sound} is like cat`
    }
}

class Cats extends Animal {
    constructor(name, sound, diseases){
        super(name, sound);
        this.diseases = diseases;
    }
    makeSound(){
        return `This is a ${this.name} and his sound ${this.sound} is like dog`
    }
}

const myDog = new Dogs("Coco", "'woof'", "French Bulldog");
console.log(myDog.makeSound());

const myCat = new Cats("Bella", "'miaow'", "Rabies");
console.log(myCat.makeSound());


// Model an online shopping cart system using Object-Oriented Programming (OOP) principles in JavaScript:
class User {
    constructor(access, timeLimit){
        this.access = access;
        this.timeLimit = timeLimit;
    }
}

class PremiumUser extends User{
    constructor(access, timeLimit, limitation){
        super(access, timeLimit);
        this.limitation = limitation;
    }
}

const randomUser = new User("Youtube premium", "1 month");
console.log(randomUser); //access: 'Youtube premium', timeLimit: '1 month'

const premiumPerson = new PremiumUser("YT, Netflix", "1 month", "No limitation");
console.log(premiumPerson); //access: 'YT, Netflix', timeLimit: '1 month',limitation: 'No limitation'.



// Demonstrate polymorphism by having different types of products (e.g., physical products, digital downloads) that inherit from the Product class but may have specific behaviors:

class  PhysicalProducts{
    constructor(Computer, TV){
        this.Computer = Computer;
        this.TV = TV;
    }
    products(){
        return `${this.Computer} and my ${this.Computer} from same company`;
    }
}

class DigitalDownloads extends PhysicalProducts {
    constructor(cryptocurrency, MobileBanking){
        super(Computer, TV);
        this.cryptocurrency = cryptocurrency;
        this.MobileBanking = MobileBanking;
    }
}

const myDisitalProduts = new DigitalDownloads ("bitconins", "Bkash Amount");
console.log(myDisitalProduts.products());