function multiply(num, range){
    let result = 0;
    for(let i = 1; i < range; i++){
        result = num * i;
        const res =  `${num} * ${i} = ${result}`;
        console.log(res);
    }
    return result;
}

multiply(6, 11)