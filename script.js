document.addEventListener("DOMContentLoaded", () => {  
      
    const addButton = document.getElementById("add-task-btn");  
    const taskInput = document.getElementById("task-input");  
    const taskList = document.getElementById("task-list");

    // Load tasks from localStorage on page load
    loadTasks();

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();  

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove task when the button is clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            saveTasks();  
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";  

        saveTasks();  
    }

    // Add task on button click
    addButton.addEventListener("click", addTask);

    // Add task on pressing Enter key
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        const items = taskList.querySelectorAll("li");
        items.forEach(item => {
            const taskOnly = item.firstChild.textContent;  
            tasks.push(taskOnly);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Load tasks from localStorage
    function loadTasks() {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            JSON.parse(storedTasks).forEach(task => {
                taskInput.value = task;
                addTask();
            });
        }
    }

});
