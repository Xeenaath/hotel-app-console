
class Service {
    constructor() {
        this.request = require('request-promise-native');
    }

    listerClients() {
        return this.request.get('https://hotel-web-api-spring.herokuapp.com/clients', { json: true});
    }

    findByName(nom) {
        return this.request.get(`https://hotel-web-api-spring.herokuapp.com/clients/nom=${nom}`, {json: true});
    }

    posterClient(saisieNom, saisiePrenom) {
        return this.request.post({
            url: 'https://hotel-web-api-spring.herokuapp.com/clients', 
            method: 'POST',
            json: {
                nom: saisieNom,
                prenoms: saisiePrenom
            }
        });   
    }
}

module.exports = { Service };















// var request = require('request');

// var backendUrl = "http://localhost:8080";

// function listerClients(callbackFunction) {


//     request(backendUrl + "/clients?start=0&size=3", {json: true}, function (err, res, listeDeClients) {
//         if(err) {
//             callbackFunction({
//                 error: err
//             });
//         }else{
//             callbackFunction({
//                 data: listeDeClients   
//             });
//         }
//     });
// }

// exports.listerClients = listerClients;