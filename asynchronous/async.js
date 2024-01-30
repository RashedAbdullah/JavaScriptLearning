console.log("Start");
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data fetched");
            resolve();
        },3000);
    })
}
function processData(){
    fetchData();
    console.log("Processing Data");
}
processData();
console.log("End");