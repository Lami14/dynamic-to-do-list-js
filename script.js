// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the key DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Trim the user input to remove extra spaces
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Attach event to remove the task when button is clicked
        removeBtn.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        // Add the button to the list item
        listItem.appendChild(removeBtn);

        // Add the list item to the list
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed inside the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
