// Task 1: Understand and use template strings and arrow functions:
function greetUser(name){
    return `Welcom mister ${name}`;
}
console.log(greetUser("Mahmud"));

const greetUserArrow = name => {
    return `Welcom mister ${name}`;
}
console.log(greetUserArrow(`Hamid`));


// Task 2: Explore the use of the spread operator.
const fruits = ["Apple", "Mango", "Orange"];
const newFruits = [...fruits, "Banana", "Coconut", "Egg fruit"];
console.log(newFruits);



const numbers = [32,43,32,22,34,54];

// Task 3: Practice using array methods.
const mapedValue = numbers.map(values=>{
    return values;
});
console.log(mapedValue)

// Even numbers with  filter.
const evenNums = numbers.filter(even =>{
    return even % 2 === 0;

});
console.log(evenNums);

// find method for find first number getter than 5.
const getter5 = numbers.find(value =>{
    return value > 5;
});
console.log(getter5);

// forEach for print every number in log.
numbers.forEach(value =>{
    console.log(value);
});



// Understand and apply array and object destructuring.
const colors = ["White", "Black", "Red"];

const [White, Black, Red] = colors;

const person = {
    name: "Hasan Mahmud",
    age: 24,
    Profession: "Student"
}
const {name, age, Profession} = person;


// Work with JSON data and perform operations using fetch.
async function jsonFromPlaceholder(){
    try {
        const URL = 'https://jsonplaceholder.typicode.com/comments';
        const fetchData = await fetch(URL);
        const convertToJson = await fetchData.json();
        console.log(convertToJson); //need more use.

        // add item:
        const addedInJson = {
            name: "Rashed",
            age: 24
        }
        console.log(convertToJson.push(addedInJson));

        // Remove:
        console.log(convertToJson.pop(addedInJson));
    } catch(err){
        console.log(err.message);
    }
}
jsonFromPlaceholder();




// Task 6: Understand truthy and falsy values, and use the ternary operator and short-circuiting.
function showtrueOrFalsyValue(value){
    if(!value){
        return false;
    } else {
        return true;
    }
}
console.log(showtrueOrFalsyValue(NaN));


function evenOddFunc(evenAndOddNums){
    return evenAndOddNums % 2 === 0? "this is Even Number" : "This is Odd number";

}
console.log(evenOddFunc(44));



// e short-circuiting with the && operator.
function andOperator(){
    let a = 50;
    let b = 45;
    if(a > 40 && b < 40){
        console.log("Your condation is true");
    } else {
        console.log("Your condation is false");
    }
}
andOperator();


// Task 7: Utilize local storage and session storage with JSON data.
const obj = {
    name: "Rashed",
    age: 24
}

// localStorage:
localStorage.setItem(Object.keys(obj), Object.values(obj));
const getItems = localStorage.getItem("name,age");
console.log(getItems);
localStorage.clear()

// sessionStorage:
sessionStorage.setItem(Object.keys(obj), Object.values(obj));
const sessionGetItems = sessionStorage.getItem("name,age");
console.log(sessionGetItems);
sessionStorage.clear();


// Task 8: Understand the difference between dot and bracket notation for object properties.
const myInfo = {
    name: "Rashed",
    age: 24
}
console.log(myInfo.name);
console.log(myInfo["age"]);



// Task 9: Practice dynamic filtering and updating an array of objects.
const arrOfObj = [
    {
        name: "Samsung A51",
        category: "Mobile",
        price: 25000,
        rating: 4
    },
    {
        name: "IPhone 15 pro max",
        category: "Mobile",
        price: 200000,
        rating: 3,
    },
    {
        name: "MSI Modern 15",
        category: "Laptop",
        price: 70000,
        rating: 5
    },
    {
        name: "MSI Modern 13",
        category: "Laptop",
        price: 45000,
        rating: 1
    }
];

const filteredPrice = arrOfObj.filter(under100kProducrs=> under100kProducrs.price < 100000);
console.log(filteredPrice);

// Implement a user interface (React component) that allows users to select a category and dynamically displays filtered products.


// Task 10: Sort an array of objects based on a specific property.
function sortFunc(){
    let afterSortValue = [];
    afterSortValue.push(arrOfObj.rating)
    return afterSortValue; // Need more practice.
}
console.log(sortFunc());



// Task 12: Combine filtering and mapping on an array of objects.
const books = [
    {
        title: "the happiness",
        auther: "Yahya Mamun",
        publishedYear: 2013
    },
    {
        title: "the happiness",
        auther: "Yahya Mamun",
        publishedYear: 2023
    },
    {
        title: "the traveling",
        auther: "Hasan yasin",
        publishedYear: 2015
    },
    {
        title: "the Holy days",
        auther: "john harry",
        publishedYear: 2020
    }
]

const newBooks = books.filter(publishedAfter18=>{
    return publishedAfter18.publishedYear >2018
});
console.log(newBooks);

const mapOfbooks = newBooks.map(value=>{
    return `${value.title} by ${value.auther}`
});
console.log(mapOfbooks);


// Task 13: Fetch data from an external API and display it dynamically.
fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));

// with async await:
const albumDataFunc = async ()=>{
    try {
        const URL = "https://jsonplaceholder.typicode.com/albums";
        const fetchData = await fetch(URL);
        const fetchToJSON = await fetchData.json();
        console.log(fetchToJSON);
    } catch(err){
        console.log(err);
    }
}
albumDataFunc();



// Task 16: Use the reduce method to calculate the total price of items in a shopping cart.
const shoppingCart = [
    {
        name: "MSI Modern 15",
        price: 4
    },
    {
        name: "Samsung A51",
        price: 25000
    },
    {
        name: "IPhoe 15 pro max",
        price: 150000
    },
    {
        name: "MSI Modern 15",
        price: 69000
    },
    {
        name: "MSI Modern 15",
        price: 69000
    }
]
const mostPrice = shoppingCart.reduce((prev, current)=>{
    prev += current.price;
    return prev;
},0);
console.log(mostPrice);


// Task 17: Group an array of objects by a specific property using the reduce method.
const groupByCetagory = [
    {
        name: "Samsung A51",
        category: "Mobile",
        price: 25000,
        rating: 4
    },
    {
        name: "MSI Modern 13",
        category: "Laptop",
        price: 45000,
        rating: 1
    },
    {
        name: "IPhone 15 pro max",
        category: "Mobile",
        price: 200000,
        rating: 3,
    },
    {
        name: "MSI Modern 15",
        category: "Laptop",
        price: 70000,
        rating: 5
    },
    {
        name: "Green peas",
        category: "vegetable",
        price: 100,
        rating: 5
    },
    {
        name: "Potato",
        category: "vegetable",
        price: 50,
        rating: 5
    },
]

const cetagoryWithGroup = groupByCetagory.reduce((acc, current)=>{
    if(current.category === "Laptop"){
        acc.push(current);
    }
    return acc;
},[]);
console.log(cetagoryWithGroup);

const cetagoryWithGroup2 = groupByCetagory.reduce((acc, current)=>{
    if(current.category === "vegetable"){
        acc.push(current);
    }
    return acc;
},[]);
console.log(cetagoryWithGroup2);

const cetagoryWithGroup3 = groupByCetagory.reduce((acc, current)=>{
    if(current.category === "Mobile"){
        acc.push(current);
    }
    return acc;
},[]);
console.log(cetagoryWithGroup3);



// Task 19: Count the instances of specific properties in an array of objects using the reduce method.
const votesReport = [
    {
        candidate: "nizam uddin",
        candidateVote: 23996
    },
    {
        candidate: "Obaydul qader",
        candidateVote: 5000
    },
    {
        candidate: "Shahab uddin",
        candidateVote: 12000
    },
    {
        candidate: "Andalib",
        candidateVote: 29796
    },
    {
        candidate: "Atik",
        candidateVote: 13596
    },
];
const countingVotes = votesReport.reduce((acc, crnt)=>{
    if(crnt.candidateVote >= crnt.candidateVote){
        return acc;
    }
},[])
console.log(countingVotes); // for review...



// Task 20: Implement filtering logic using the reduce method.
const stockProducts = [
    {
        name: "PC",
        price: 34545,
        inStock: true
    },
    {
        name: "One+",
        price: 34045,
        inStock: true
    },
    {
        name: "Samsung A51",
        price: 34445,
        inStock: false
    },
    {
        name: "IPhone 13",
        price: 34543,
        inStock: false
    },
    {
        name: "Realme",
        price: 23333,
        inStock: true
    },
    {
        name: "Samsung note 20",
        price: 74545,
        inStock: false
    },
]
const inStocks = stockProducts.reduce((acc, current)=>{
    if(current.inStock){
        acc.push(current)
    }
    return acc;
},[])
console.log(inStocks);


// Task 21: Concatenate values of a specific property in an array of objects using the reduce method.
const comments = [
    {
        auther: "Rashed Abdullah",
        content: "The reality of humanity",
        comment: "the book is good"
    },
    {
        auther: "Rakib khan",
        content: "Muslim's right",
        comment: "it was a big and nice book"
    },
    {
        auther: "Ridwan kahn",
        content: "Broken mind",
        comment: "it's a uniqe book"
    },
]

const allCommentInOneString = comments.reduce((acc,crnt)=>{
    acc += crnt.comment;
    return acc;

},"")
console.log(allCommentInOneString);




// Task 22: Calculate the average rating from an array of objects using the reduce method.
const bookReviews = [
    {
        auther: "Rashed Abdullah",
        content: "The reality of humanity",
        review: 4
    },
    {
        auther: "Rakib khan",
        content: "Muslim's right",
        review: 2
    },
    {
        auther: "Ridwan kahn",
        content: "Broken mind",
        review: 4
    },
    {
        auther: "Rashed Abdullah",
        content: "The reality of humanity",
        review: 3
    },
    {
        auther: "Rakib khan",
        content: "Muslim's right",
        review: 1
    },
    {
        auther: "Ridwan kahn",
        content: "Broken mind",
        review: 3
    },
]

const averageRiview = bookReviews.reduce((acc, crnt)=>{
    acc += crnt.review / bookReviews.length;
    return acc;
}, 0)
console.log(averageRiview);