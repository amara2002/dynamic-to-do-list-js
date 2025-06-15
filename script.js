const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Load tasks when page loads
document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

// Add task on button click
addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = '';
  }
});

// Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      taskInput.value = '';
    }
  }
});

// Load tasks from localStorage
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  storedTasks.forEach(taskText => addTask(taskText, false));
}

// Add task to the DOM and optionally to localStorage
function addTask(taskText, save = true) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');
  removeBtn.onclick = () => {
    taskList.removeChild(li);
    removeFromStorage(taskText);
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
}

// Remove task from localStorage
function removeFromStorage(taskText) {
  let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  storedTasks = storedTasks.filter(task => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(storedTasks));
}
