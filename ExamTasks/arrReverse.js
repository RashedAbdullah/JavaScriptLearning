let arr = [1,2,3,4,5]

let temp;
for(let i = 0,j = arr.length - 1; i < arr.length; i++,j--){
    if(i > j){
        break;
    }
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

console.log(arr);