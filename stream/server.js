const app = require('express')();

app.get('/', (req, res) => {
    res.send("Servidor em execução!");
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

app.listen(4000);
console.log("Servidor ativo em 127.0.0.1:4000");