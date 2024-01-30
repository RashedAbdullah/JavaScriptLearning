const arr = [32,43,23,43,23,45,23,43,];
// const result = arr.find(function(value, index, array){
//     return value > 40;
// }, this);
// console.log(result);

//findIndex:
const findIndex = arr.findIndex((index)=>{
    return index < 30;
})
console.log(findIndex);