// Our task:
// take order from the customer with the customer 
// manage ingredient and process the customer name
// process food and customer name
// complete order with the processed name



// No usages
const takeOrder = customer =>{
    let prossName = `Hungry ${customer}`
    return new Promise((resolve, reject)=>{
        resolve({
            name: prossName,
            msg: `The order has been taken for ${prossName}`
        });
        // reject("Your order have been canceled");
    })
}

let trueValue = true;
const manageIngredient = processedName =>{
    let prossName = `very ${processedName}`;
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(trueValue){
                resolve({
                    name: prossName,
                    msg: `Managing the ingredient for ${prossName}`
                });
            } else {
                reject(
                    new Error("This is error from user")
                )
            }
        }, 2000);
    })
}


const processFood = processedName =>{
    let prossName = `very ${processedName}`
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve({
                name: prossName,
                msg: `Proccesing the food for  ${prossName}`
            });
        }, 2000);
    })
}


const completeOrder = processedName =>{
    let prossName = `very ${processedName}`
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve({
                name: prossName,
                msg: `The order is complete ${prossName} can gobble it up`
            }); //gobble (গোগ্রাসে গেলা)
        }, 2000);
    })
}


// takeOrder("Fazle Rabbi")
//         .then(response => {
//             console.log(response);

//             manageIngredient("Fazle rabbi")
//                 .then(response => {
//                     console.log(response);

//                     processFood("Fazle Rabbi")
//                         .then(response => {
//                             console.log(response);

//                             completeOrder("Fazle Rabbi")
//                                 .then(response => {
//                                     console.log(response);
//                                 })
//                         })
//                 })
//         })



// this is response chain
// takeOrder("Fazle Rabbi")
//         .then( res => {
//             console.log(res.name);
//             console.log(res.msg);
//             return "Huda mia"
//         })
//         .then(res => {
//             console.log(res);
//             return "Habibullah"
//         })
//         .then(res =>{
//             console.log(res)
//         })


// takeOrder("Fazle rabbi")
//         .then(res =>{
//             console.log(res.msg)
//             return res.name;
//         })

//         .then(manageIngredient)
//         .then(res =>{
//             console.log(res.msg)
//             return res.name;
//         })

//         .then(processFood)
//         .then(res =>{
//             console.log(res.msg)
//             return res.name;
//         })

//         .then(completeOrder)
//         .then(res =>{
//             console.log(res.name)
//         })

//         .catch(rej =>{
//             console.log(rej.message)
//         });


// Async:
let arr = [];
async function testFunc(){
    try {
        const orderStatus = await takeOrder("Fazle Rabbi");
        console.log(orderStatus.msg);
        arr.push(orderStatus.msg)

        const manage = await manageIngredient(orderStatus.name);
        console.log(manage.msg);
        arr.push(manage.msg)

        const processing = await processFood(manage.name);
        console.log(processing.msg);
        arr.push(processing.msg)

        const completing = await completeOrder(processing.name);
        console.log(completing.msg);
        arr.push(completing.msg)

    } catch (err){
        console.log(err.message);
    }
    return arr;
}
testFunc();



// arr.map(value =>{
//     const divElem = document.querySelector(".divElem");
//     console.log(divElem)
//     divElem.innerHTML = value
//     console.log(value);
// })


