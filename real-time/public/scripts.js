async function subscribe(id) {
    var connection = await fetch(`subscribe/${id}`);
    var response = await connection.json();
    console.log(response);
}

var eventSource = new EventSource('/sse');
eventSource.addEventListener("message", (e) => {
    try {
        console.log(e.data);
        var companies = JSON.parse(e.data);

        for (id in companies) {
            console.log(`#${id}`);
            document.querySelector(`#${id} .subscribers`).innerHTML = companies[id].subscribers;
        }

    } catch (error) {

    }
})