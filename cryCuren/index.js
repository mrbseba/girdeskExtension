//crrypto curency API
function cryptoAPI (){
    var apikey = {
        key:'5ee8a4e9-b1f3-4442-82d1-633d5c9fa5c1'
    }
        
    request('GET','https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + apikey.key)
    .then((r1) => {
        //extragerea datelor din JSON al API-ului
        var x1 = JSON.parse(r1.target.responseText);
        
        //afisarea valori ce tine de total market cap
        console.log("Total Marketcap " + x1.data.quote.USD.total_market_cap);
        document.getElementById("totalMarketCap").innerHTML = "Total marketcap: " + x1.data.quote.USD.total_market_cap;
        
        //afisarea total value in 24h
        console.log("Total Value 24h " + x1.data.quote.USD.total_volume_24h);
        document.getElementById("totalVolume").innerHTML = "Total volume 24: " + x1.data.quote.USD.total_volume_24h;
        //display the last update
        console.log("Last update: " + x1.data.quote.USD.last_updated);

    }).catch(err => {
        console.log(err);
    })  
        
    function request(method, url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.onload = resolve;
                xhr.onerror = reject;
                xhr.send();
            });
    }
}

//function test
function test(){
    alert("It is possible");
}