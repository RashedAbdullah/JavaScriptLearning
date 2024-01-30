let arr = [1,2,3,4,5];

function myFindIndex(myArr,cb){
    for(let i = 0; i < myArr.length; i++){
        if(cb(myArr[i])){
            return i;
        }
    }
}

let x = myFindIndex(arr,(item) => item > 3)

console.log(x);