async function googleTranslate(){
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '8ed6b67c1cmshf50b35189b5f7b1p1675dejsn5b71da8fe138',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: 'English is hard, but detectably so'
        })
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

googleTranslate();