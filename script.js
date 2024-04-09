const checkCompleted = [];
let idH2;
let titleH2;

sendTodo.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then(info => {
            if (!idH2 && !titleH2) {
                idH2 = document.createElement('h2');
                document.body.appendChild(idH2);

                titleH2 = document.createElement('h2');
                document.body.appendChild(titleH2);
            }


            idH2.textContent = `Id: ${info.id}`;
            titleH2.textContent = `Title: ${info.title}`;

            todoInfo = info;

            return info;
        })
        .then(info2 => {
            checkCompleted.push(info2.completed);
            console.log(checkCompleted)
        })
        .catch(e => {
            console.log(e);
            const h2 = document.createElement('h2');
            h2.appendChild(document.createTextNode(`O-O-O-OPS ${e.message}`));
            document.body.appendChild(h2);
        });
}

let trueH2;
let falseH2;

calcStats.onclick = () => {
    const trueCount = checkCompleted.reduce((acc, currentValue) => {
        return currentValue === true ? acc + 1 : acc;
    }, 0);

    const falseCount = checkCompleted.reduce((acc, currentValue) => {
        return currentValue === false ? acc + 1 : acc;
    }, 0);
    if (!trueH2 && !falseH2) {
        trueH2 = document.createElement('h3');
        document.body.appendChild(trueH2);
        falseH2 = document.createElement('h3');
        document.body.appendChild(falseH2);
    }
    trueH2.textContent = `True count: ${trueCount}`;
    falseH2.textContent = `False count: ${falseCount}`;
}