let todoList = []
displayItems()

function addTodo() {

    let inputElement = document.querySelector('#todo-input');
    let todoItem = inputElement.value;
    console.log(todoItem);
    todoList.push(todoItem);
    inputElement.value = '';

    displayItems();
}

function displayItems() {

    let displayElement = document.querySelector('#todo-items');
    for (let i = 0; i < todoList.length; i++) {

        displayElement.innerText = displayElement.innerText + todoList[i]

    }
    
}