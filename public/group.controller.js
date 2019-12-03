let timeGenerated = "";
const timeStamp = document.createElement('div');

function createTable(students,link) {
    const table = document.createElement('table');

    const tableHead = document.createElement('thead');
    if (link){
        tableHead.innerHTML = `<a href=${link}>Hang Out Link</a>`
    };
    const tableBody = document.createElement('tbody');

    let tr;
    let td;

    students.map(function (student) {
        tr = document.createElement('tr');
        td = document.createElement('td');

        td.appendChild(document.createTextNode(`(${student.skill}) ${student.name} `));
        tr.appendChild(td);
        tableBody.appendChild(tr);
    });
    
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    document.body.appendChild(table);
    timeStamp.innerHTML = timeGenerated;
    document.body.appendChild(timeStamp);
}

fetch('/group')
    .then(res => res.json())
    .then((result) => {
        let groups = result.groups;
        let links = result.links;
        timeGenerated = result.lastGenerated.toString();
        groups.map((group, index) => createTable(group, index < 4 ? links[index] : null));
    })
    .catch(err => console.log(err));
