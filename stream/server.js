const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    var html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
    res.status(200).send(html);
});

app.get('/stream', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/event-stream');
    send(res);
});

let iterator = 0;

function send(res) {
    res.write("data: " + `Contador Atual em: ${iterator++}\n\n`);
    setTimeout(() => send(res), 1000);
}

// ##############################
app.listen(4000, err => {
    if (err) {
        console.log("Erro ao executar o servidor!");
        return;
    } else {
        console.log("Servidor executando em 127.0.0.1:4000!");
    }
});