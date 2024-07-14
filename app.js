function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskList = document.getElementById('task-list');
        const listItem = createTaskItem(taskText);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function createTaskItem(taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const dateTimeSpan = document.createElement('span');
    dateTimeSpan.className = 'date-time';
    dateTimeSpan.textContent = ` (Added: ${new Date().toLocaleString()})`;
    listItem.appendChild(dateTimeSpan);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function () {
        markTaskComplete(listItem);
    };
    listItem.appendChild(completeButton);

    return listItem;
}

function markTaskComplete(listItem) {
    listItem.classList.add('completed');
    listItem.querySelector('button').remove();

    const dateTimeSpan = document.createElement('span');
    dateTimeSpan.className = 'date-time';
    dateTimeSpan.textContent = ` (Completed: ${new Date().toLocaleString()})`;
    listItem.appendChild(dateTimeSpan);

    const completedList = document.getElementById('completed-list');
    completedList.appendChild(listItem);
}
