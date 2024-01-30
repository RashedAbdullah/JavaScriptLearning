let arr = [1,2,3,4,5,6,7,8];

function myFilter(myArr,cb){
    let filtrArr = [];
    for(let i = 0; i < myArr.length;i++){
        if(cb(arr[i])){
            filtrArr.push(arr[i]);
        }
    }
    return filtrArr;
}

let x = myFilter(arr,function (item){
    if(item %2 !== 0){
        return true;
    }
})

console.log(x);

