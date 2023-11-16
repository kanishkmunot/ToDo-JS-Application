let todoList = [];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  // Check if both task and date are entered
  if (todoItem.trim() === '' || todoDate.trim() === '') {
    alert('Please enter both task and date before adding.');
    return;
  }else{
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
  }
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <span style="margin-top: 19px; font-size: 20px; margin-right: 30px; font-weight: bold;">${item}</span>
      <span style="margin-top: 19px; font-size: 20px; margin-right: 30px; font-weight: bold;">${dueDate}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}