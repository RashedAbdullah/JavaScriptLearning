//  array destructuring:
// const arr = [2,3,4,5,6,7,8];

// const [a,b,c,d,e,f,g,h] = arr;

// console.log(c);

//Object destructuring:
const obj = {
    Person: "Habibullah",
    age: 45,
    Person2: "Rashed",
    age: 24,
    Person3: "Huda mia",
    age: 28,
    morePeople: {
        Person4: "Labib",
        age: 3,
        Person5: "Ismat",
        age: 1
    }
}
// const {Person,age} = obj;
// console.log(Person);

// Rest:
// const {Person, Person2, ...morePeople} = obj;
// // console.log(Person);
// console.log(morePeople);

// const {age, Person3} = morePeople;
// console.log(first)

// // change object key name:
// const {Person, Person1:habib} = obj;


// Objet in object:
// const {Person, Person2, Person3, morePeople:{Person4,Person5}} = obj;
// console.log(Person4);
// console.log(Person5);


const aboutMe = {
    myName: "Rashed",
    age: 24,
    Profession: "Student",
    Skills: {
        Programming: "JavaScript",
        Besics: "HTML CSS",
        Language: {
            Native: "Bangla",
            Professional: "English",
            AndMore: "Arabic, English"
        }
    }
}

const {myName,age,Profession, Skills:{Programming,Besics,Language}} = aboutMe;
console.log(Programming);

const {Native, Professional,AndMore} = Language;
console.log(Native);


// Second largest number:
// const arr = [ 23,54,54,5634,54,6734,34];
// for(let i = 0; i < arr.length; i++){
//     if(i >= i){
//         console.log(arr[i]);
//     }
// }