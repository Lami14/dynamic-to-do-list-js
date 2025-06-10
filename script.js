document.addEventListener("DOMContentLoaded", () => {  
    
    const addButton = document.getElementById("add-task-btn");  
    const taskInput = document.getElementById("task-input");  
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a "Remove" button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // When clicked, remove the task from the list
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the li
        li.appendChild(removeBtn);

        // Append the li to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add task when "Add Task" button is clicked
    addButton.addEventListener("click", addTask);

    // Add task when pressing "Enter" in the input field
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

});
