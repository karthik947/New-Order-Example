//Global Modules
const crypto = require('crypto');

//Installed Modules
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


var burl = "https://api.binance.com";
var endPoint = "/api/v3/order";
var dataQueryString = "symbol=BTCUSDT&side=BUY&type=LIMIT&timeInForce=GTC&quantity=0.003&price=6200&recvWindow=20000&timestamp=" + Date.now();

var keys = {
    "akey" : '',
    "skey" : ''
}

var signature = crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');

var url = burl + endPoint + '?' + dataQueryString + '&signature=' + signature;

var ourRequest = new XMLHttpRequest();

ourRequest.open('POST',url,true);
ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']);

ourRequest.onload = function(){
    console.log(ourRequest.responseText);
}
ourRequest.send();

