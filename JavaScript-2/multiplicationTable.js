function doMultiply(num,range){
    for(let i=1; i<=range;i++){
        const res= i*num;
        console.log(`${num} X ${i} = ${res}`);
    }
}

doMultiply(5,10);
// doMultiply(8,15);
