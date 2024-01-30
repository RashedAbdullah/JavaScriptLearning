// let mapArr = [32,4,54,43];

// forEach:
// mapArr.forEach(function(value, index, array){
//     console.log(value)
// })

// map:
// let mapFunc = mapArr.map(function(value){
//     return value;
// })
// console.log(mapFunc)





// let obj = {
//     name: `Rashed`,
//     age: 24,
//     addess: `Feni`
// }

// console.log(obj[`age`])

// console.log(obj.name);
// obj[`age`] = 23;

// console.log(obj[`age`]);




let arr = [
    {
        name: "Labib",
        age: 25
    },
    {
        name: "Noman",
        age: 15
    },
    {
        name: "Rashed",
        age: 22
    },
    {
        name: "Habib",
        age: 13
    },
    {
        name: "Mahmud",
        age: 35
    },
]

// let values = arr.filter(function(value){
//     if(value.age > 20){
//         return value;
//     }
// })
// console.log(values);

// let reduce = arr.reduce(function(prev, crnt){
//     crnt.age > prev.age ;

//     return prev.age > 20, crnt.name;
// }, 0)

// console.log(reduce)

// let mostValues = 0;
// for(let i = 0; i < arr.length; i++){
//     mostValues += arr[i].age;
// }
// console.log(mostValues);


const thisYearCost = [
    {
        id: 0,
        obj: "Books",
        cost: 1000,
    },
    {
        id: 1,
        obj: "Dinner",
        cost: 5000,
    },
    {
        id: 2,
        obj: "Shopping",
        cost: 1990,
    },

    {
        id: 3,
        obj: "Recharges",
        cost: 1020,
    },
    {
        id: 4,
        obj: "incomes",
        cost: 10000,
    }
]

// let most = 0;
// for(let i = 0; i < thisYearCost.length; i++){
//     most += thisYearCost[i].cost;
// }
// console.log(most);