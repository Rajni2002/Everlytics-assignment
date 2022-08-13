async function getData() {
    const response = await fetch("http://localhost:3000/obj", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response.json()
}

function createTable(data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');

    data.thead.forEach(element => {
        const th = document.createElement('th');
        th.innerText = element;
        thead.appendChild(th);
    });

    data.entries.forEach(entry => {
        const tr = document.createElement('tr');
        entry.data.forEach(element => {
            const td = document.createElement('td');
            td.innerText = element;
            tr.appendChild(td);
        })
        table.appendChild(tr);
    })

    table.appendChild(thead);

    document.getElementsByTagName('body')[0].appendChild(table);
}

getData().then((data) => {
    createTable(data);
});