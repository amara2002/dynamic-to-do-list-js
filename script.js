// Wait for the DOM to upload
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Validate input
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Event to remove task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to task item
        li.appendChild(removeBtn);

        // Append task item to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
