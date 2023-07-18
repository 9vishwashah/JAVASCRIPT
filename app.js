// Get HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Add task to the list
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    const deleteBtn = document.createElement('button');

    taskTextSpan.textContent = taskText;
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);

    li.appendChild(taskTextSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = '';
  }
}

// Delete task from the list
function deleteTask(e) {
  const li = e.target.parentElement;
  taskList.removeChild(li);
}
