async function salatAPI(){
    const url = 'https://muslimsalat.p.rapidapi.com/feni.json';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8ed6b67c1cmshf50b35189b5f7b1p1675dejsn5b71da8fe138',
            'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.today_weather)
        for(let key in result){
            console.log(`${key}: ${result[key]}`);
        }
    } catch (error) {
        console.error(error);
    }
}
salatAPI();