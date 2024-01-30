let arr = [1,2,3,4,5];

function myFind(myArr,cb){
    for(let i = 0; i < myArr.length; i++){
        if(cb(myArr[i])){
            return myArr[i];
        }
    }
}

let x = myFind(arr,(item) => item > 3)

console.log(x);