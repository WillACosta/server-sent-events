const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

// ##############################
app.use(express.static('public'));
// ##############################

// Simulação de um banco de dados com as informações
var globalVersion = 0;
var companies = {
    "ch1": {
        "subscribers": 0
    },
    "ch2": {
        "subscribers": 0
    },
    "ch3": {
        "subscribers": 0
    },
};

app.get('/', (req, res) => {
    var html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
    res.status(200).send(html);
});

// ##############################
/**
 * Sempre que está rota for chamada exibe as informações
 */
app.get("/subscribe/:id", (req, res) => {

    console.log(`Inscrito em: ${req.params.id}`);
    companies[req.params.id].subscribers++;

    console.log(companies); // Exibir o objeto com todos os canais

    globalVersion++;

    res.status(200).json({
        "Mensagem": `Inscrito em ${req.params.id}`
    });
});

// ##############################

app.get('/sse', (req, res) => {

    var localVersion = 0;

    res.set("content-type", "text/event-stream");
    res.set("Connection", "keep-alive");
    res.set("Cache-Control", "no-cache");
    res.set("Access-Control-Allow-Origin", "*");

    console.log('Conexão aberta pelo cliente!');

    setInterval(() => {
        if (localVersion < globalVersion) {
            res.status(200).write(`data: ${JSON.stringify(companies)}\n\n`);
            localVersion = globalVersion;
        }
    }, 1000);

});

// ##############################
app.listen(4000, err => {
    if (err) {
        console.log("Erro ao executar o servidor!");
        return;
    } else {
        console.log("Servidor executando em 127.0.0.1:4000!");
    }
});