const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTaskBtn");

function addTask() {
  if (taskInput.value == "") {
    return;
  }

  const taskList = document.querySelector(".task-list");
  taskList.innerHTML += `
    <div class="task">
        <div class="task-content">
        ${taskInput.value}
        </div>

         <div class="task-buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            <button class="complete-btn">Complete</button>
    </div>`;
}
