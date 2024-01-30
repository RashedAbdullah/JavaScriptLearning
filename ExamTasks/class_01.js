


// function higherOrd() {
//     let arg = arguments;
//     console.log(arg)
    
// }

// let x = higherOrd(function name(params) {
//     return 'jksajdfkj54541'
// },5,'lkjkjk',10,function name2(params) {
    
// },5,4,6,40)

// console.log(x);

let arr2 = [1,2,3,4,5,6];

function add(...arr){
    // let sum = arr.reduce((acc,curr)=>{
    //     acc += curr;
    //     return acc;
    // },0);

    // let sum = 0;
    // arr.map((item) =>{
    //     sum += item;
    // })

    sum = 0;
    let arr3 = arr.forEach((item)=>{
        return item * 2;
    })
    return arr3;
}

console.log(add(1,2,3,4,5));

