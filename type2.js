const api = require('binance');
const binanceRest = new api.BinanceRest({
    key: '', // Get this from your account on binance.com
    secret: '', // Same for this
    timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
    recvWindow: 10000, // Optional, defaults to 5000, increase if you're getting timestamp errors
    disableBeautification: false,
    /*
     * Optional, default is false. Binance's API returns objects with lots of one letter keys.  By
     * default those keys will be replaced with more descriptive, longer ones.
     */
    handleDrift: true
    /* Optional, default is false.  If turned on, the library will attempt to handle any drift of
     * your clock on it's own.  If a request fails due to drift, it'll attempt a fix by requesting
     * binance's server time, calculating the difference with your own clock, and then reattempting
     * the request.
     */
});

// You can use promises
binanceRest.newOrder({
        symbol: 'BTCUSDT',
        side: 'BUY',
        type: 'LIMIT',
        timeInForce: 'GTC',
        quantity: '0.003',
        price: '6200',
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });


 
