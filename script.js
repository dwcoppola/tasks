function generateID() {
    tasks = document.querySelectorAll('.task');
    return tasks.length;
}

function newToDo() {
    let task = prompt("Name your task: ")
    if (task) {
        let list = document.querySelector('#main-list');
        let li = document.createElement('li');
        let idNumber = generateID();
        list.appendChild(li);
        li.className = "task list-group-item"
        li.id = idNumber;
        li.innerHTML = `<div><input onchange="completeToDo(${idNumber})"` + 
            `class="item" type="checkbox"/>` + 
            `<button onclick="deleteToDo(${idNumber})"` + 
            `class="btn btn-warning item">Del</button>` +    
            `<span class="item">${task.toUpperCase()}</span><div>`    
    }
}

function deleteToDo(idNumber) {
    let tasks = document.querySelectorAll('.task');
    for (task of tasks) {
        if (task.id === idNumber.toString()) {
            task.remove();
        }    
    }
}

function completeToDo(idNumber) {
    setTimeout(function(){
        let answer = confirm("Nice job completing the task. " + 
        "Would you like to remove this task from the list?");
        if (answer) {
            deleteToDo(idNumber);
        } else {}
    }, 500)
}
