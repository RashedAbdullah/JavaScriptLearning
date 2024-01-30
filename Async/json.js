// const obj = {
//     name: "Rashed",
//     age: 24,
//     profession: "student"
// }
// const jsonfile = JSON.stringify(obj);
// console.log(jsonfile);
// const toObj = JSON.parse(jsonfile);
// console.log(toObj);
// console.log(obj)


// const arrJson = [
//     {
//         name: "Rahsed",
//         age: 24,
//         profession: "student"
//     },
//     {
//         name: "Anayet",
//         age: 21,
//         profession: "student"
//     },
//     {
//         name: "Labib",
//         age: 3,
//         profession: "student"
//     },
//     {
//         name: "Habib",
//         age: 34,
//         profession: "student"
//     },
//     {
//         name: {
//             fname: "Rashed",
//             lname: "Abdullah",
//             fullName: "Rashed Abdullah"
//         },
//         age: 40,
//         profession: "student"
//     },
//     {
//         name: "Mahmud",
//         age: 23,
//         profession: "student"
//     }
// ]

// let jsonFile = JSON.stringify(arrJson);
// console.log(jsonFile.name);

// arrJson.map((elem)=>[
//     console.log(elem.name)
// ]);




// console.log("Before function");
// async function forUser(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if(!response.ok){
//             throw new Error("You make somthing error");
//         }

//         const users = await response.json();
//         console.log(users);
//         const everyUser = users.map(e=>e.body);
//         console.log(everyUser);
//     } catch(err){
//         console.log(err.message);
//     } finally{
//         console.log("This is finally");
//     }
//     console.log("end of async");
// }

// forUser();
// console.log("After end of function");


// console.log("This is befor function");
// async function usersData(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if(!response.ok){
//             throw new Error("This error when we cannot have any value");
//         }

//         const singleUser = await response.json();
//         // console.log(singleUser)
//         singleUser.map(e=>console.log(e.id));
//     } catch(err){
//         console.log(err);
//     } finally {
//         console.log("Why we use finally, i don't know");
//     }
// }

// usersData();
// console.log("This is after invoked function");


// async function thisfuncForUserApi(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if(!response.ok){
//             throw new Error("this error from me");
//         } else {
//             const responseData = await response.json();
//             // console.log(responseData)
//             responseData.forEach(e=>console.log(e.id));
//         }
        
//     } catch(err){
//         console.log(err);
//     }
//     console.log("after try catch fetch api");
// }
// thisfuncForUserApi();



// async function asyncFunc(){
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     const fetchAPI = await fetch(url);
//     if(!fetchAPI.ok){
//         const err = new Error("Your api is not working...");
//         console.log(err);
//     } else {
//         const jsonFile = await fetchAPI.json();
//         const slicedValues = jsonFile.splice(85, 10);
//         slicedValues.map(value=>console.log(value.id));
//         console.log(jsonFile)
//     }
// }
// asyncFunc();