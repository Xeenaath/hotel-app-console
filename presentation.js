const readLine = require('readline');

const response = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Presentation {
    constructor(service) {
        this.service = service;
    }

    start() {
        console.log(
            `** Administration Hotel **
1. Lister les clients
2. Ajouter un client
3. Rechercher un client par nom
4. Vérifier la disponibilité d'une chambre
99. Sortir
`);
        response.question("Choississez un numéro : ", saisie => {
            switch (saisie) {
                case "1":
                    console.log("\n>> Liste des clients\n");

                    this.service.listerClients()
                        .then(listClients => console.log(
                            listClients
                                .map(client => `${client.nom} ${client.prenoms}`)
                                .join('\n')
                        ))
                        .catch(err => console.log(err))
                        .finally(() => {
                            console.log("\r");
                            this.start();
                        })

                    break;
                case '2':
                    console.log("\n>> Ajouter un client\n");
                    response.question("Entrez un Nom : ", saisieNom => {
                        response.question("Entrez un Prenom : ", saisiePrenom => {
                            this.service.posterClient(saisieNom, saisiePrenom)
                                .then(console.log(`${saisieNom} ${saisiePrenom} a été ajouté !`))
                                .catch(err => console.log(err))
                                .finally(() => {
                                    console.log("\r");
                                    this.start();
                                })
                        })
                    })
                    break;
                case '3':
                    console.log("\n>> Rechercher un client par nom\n");

                    response.question("Entrez le Nom à chercher: ", saisieNom => {
                        this.service.findByName(saisieNom)
                            .then(clients => console.log(clients))
                            .catch(err => console.log(err))
                            .finally(() => {
                                console.log("\r");
                                this.start();
                            })
                    })
                    break;
                case '4':
                    console.log("Cette fonctionnalité n'est pas encore dispo, revenez plus tard !");
                    break;
                case '99':
                    console.log("Au revoir !")
                    process.exit();
                    default:
                        console.log("\n Veuillez sélectionner 1, 2, 3, 4 ou 99 sinon ça ne marchera pas ! Try again =>")
                        this.start();
                        break;
            }
        });
    }
}

module.exports = {Presentation}
// function menu() {
//     console.log("** Administration Hotel **");
//     console.log("1. Lister les clients");
//     console.log("2. Ajouter un client");
//     console.log("99. Sortir");
// }
// function start() {
//     menu();
//     response.question("Votre choix : ", function (saisie) {
//         switch (saisie) {
//             case '1':
//                 service.listerClients(function (resultat) {
//                     if (resultat.error) {
//                         console.log("oops ...")
//                         start();
//                     } else {
//                         console.log(resultat.data);
//                         start();
//                     }
//                 })
//                 break;
//             case '2':
//                 break;
//             case '99':
//                 console.log("Au revoir !");
//                 response.close();
//                 break;
//         }
//     });
// }
// exports.start = start;