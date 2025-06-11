function addTask(taskText, save = true) {
  if (!taskText) {
    alert('Please enter a task.');
    return;
  }

  // Create list item and remove button
  const li = document.createElement('li');
  li.textContent = taskText;

  // ✅ Add a class to the li element
  li.classList.add('task-item'); // <-- This is the correct way

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  // Event handler for removing task
  removeBtn.onclick = () => {
    taskList.removeChild(li);
    removeFromLocalStorage(taskText);
  };

  // Append button and item to list
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = '';

  // Save to localStorage
  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
}function addTask(taskText, save = true) {
  if (!taskText) {
    alert('Please enter a task.');
    return;
  }

  // Create list item and remove button
  const li = document.createElement('li');
  li.textContent = taskText;

  // ✅ Add a class to the li element
  li.classList.add('task-item'); // <-- This is the correct way

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  // Event handler for removing task
  removeBtn.onclick = () => {
    taskList.removeChild(li);
    removeFromLocalStorage(taskText);
  };

  // Append button and item to list
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = '';

  // Save to localStorage
  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
        }
