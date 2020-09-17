var request = require('request');

var backendUrl = "https://cqlv2-hotel-web-api.herokuapp.com";

function listerClients(callbackFunction) {
    request(backendUrl + "/clients?start=0&size=3", {json: true}, function (err, res, listeDeClients) {
        if(err) {
            callbackFunction({
                error: err
            });
        }else{
            callbackFunction({
                data: listeDeClients   
            });
        }
    });
}

exports.listerClients = listerClients;