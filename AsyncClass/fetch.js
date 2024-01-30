

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(res => {
//         console.log(res)
//         res.map(value =>{
//             const divElem = document.querySelector(".divElem");
//             const div = document.createElement("div");
//             divElem.appendChild(div)
//             div.innerHTML = `<p>${value.name}</p>`
//         })
//     })
//     .catch(err => console.log(err.message));



// function fetchData(){
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(response =>{
//         console.log(response);
//         return "my name is Rashed Abdullah"
//     })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// }
// fetchData();



// async function asyncFunc(){
//     try {
//         const data = await fetch('https://jsonplaceholder.typicode.com/users');
//         const jsonData = await data.json();
//         console.log(jsonData)
//         jsonData.map(value =>{
//             const divElem = document.querySelector(".divElem");
//             const div = document.createElement("div");
//             divElem.appendChild(div)
//             div.innerHTML = `<p>${value.name}</p>`
//         })
        
//     } catch(err){
//         console.log(err)
//     }
// }
// asyncFunc()



// async function fetchDataFunc(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const jsonData = await response.json();
//         jsonData.map(value =>{
//             const divElem = document.querySelector(".divElem");
//             const div = document.createElement("div");
//             divElem.appendChild(div);
//             div.innerHTML = `<p>${value.title}</p>`;
//         });
//     } catch(err){
//             const divElem = document.querySelector(".divElem");
//             const div = document.createElement("div");
//             divElem.appendChild(div);
//             div.innerHTML = `<p>${err.message}</p>`;
//     }
// }
// fetchDataFunc();



// async function asyncFunc(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const jsonRes = await response.json();
//         jsonRes.map(value =>{
//             const divElem = document.querySelector(".divElem");
//             const div = document.createElement("div");
//             divElem.appendChild(div);
//             div.innerHTML = `<p>${value.name}</p>`
//         })
//     } catch(err){
//         console.log(err)
//     }
// }
// asyncFunc();