var readLine = require('readline');
var service = require("./service.js");

var response = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu()  {
    console.log("** Administration Hotel **");
    console.log("1. Lister les clients");
    console.log("2. Ajouter un client");
    console.log("99. Sortir");
}
function start() {
    menu();
    response.question("Votre choix : ", function(saisie) {
        switch (saisie) {
            case '1':
                service.listerClients(function(resultat) {
                    if(resultat.error) {
                        console.log("oops ...")
                        start();
                    } else {
                        console.log(resultat.data);
                        start();
                    }
                })
                break;
            case '2':
                break;
            case '99':
                console.log("Au revoir !");
                response.close();
                break;
        }
    });
}
exports.start = start;