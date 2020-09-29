var eventList = document.querySelector('ul');
var evtSource = new EventSource("http://127.0.0.1:4000/stream"); // { withCredentials: true }

console.log(evtSource.withCredentials);
console.log(evtSource.readyState);
console.log(evtSource.url);

evtSource.onopen = function () {
    console.info("Conexão ao servidor aberta.");
};

evtSource.onmessage = function (e) {
    var li = document.createElement("li");

    li.textContent = "Mensagem recebida: " + e.data;
    eventList.appendChild(li);
};

evtSource.onerror = function () {
    console.error("Falha na emissão dos eventos.");
};

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    alert('Conexão ao servidor finalizada');
    console.info('Conexão ao servidor finalizada.');
    evtSource.close();
});