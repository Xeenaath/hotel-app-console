var readLine = require('readline');

var response = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

response.question('Vous allez bien ? :', function(saisie) {
    console.log(`Vous avez saisi : ${saisie}`);

    response.close();
});