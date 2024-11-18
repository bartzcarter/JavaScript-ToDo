let tasks = [];
let currentFilter = "all";

document.getElementById("addTodo").addEventListener("click", addTodo);
document
  .getElementById("todoInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTodo();
    }
  });

  function renderTasks() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
  
    // Filter tasks based on the current filter
    let filteredTasks = tasks;
    if (currentFilter === "completed") {
      filteredTasks = tasks.filter(task => task.completed);
    } else if (currentFilter === "active") {
      filteredTasks = tasks.filter(task => !task.completed);
    }
  
    // Render the filtered tasks
    filteredTasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.className = `list-group-item d-flex justify-content-between align-items-center ${
        task.completed ? "completed" : ""
      }`;
      listItem.setAttribute("data-index", index); // Set the correct index after reordering
  
      // Regex to find email addresses in the task text
      const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
      const taskTextWithLinks = task.text.replace(
        emailRegex,
        '<a href="mailto:$1">$1</a>'
      );
  
      listItem.innerHTML = `
        <span>${taskTextWithLinks}</span>
        <div>
          <button class="btn btn-success btn-sm mr-2" onclick="toggleComplete(this)">
            ${task.completed ? "Undo" : "Complete"}
          </button>
          <button class="btn btn-danger btn-sm" onclick="deleteTodo(this)">Delete</button>
        </div>
      `;
      todoList.appendChild(listItem);
    });
  }
  
  // Update toggleComplete function to use element-based index
  function toggleComplete(button) {
    const index = button.closest("li").getAttribute("data-index");
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
  }
  
  function deleteTodo(button) {
    const index = button.closest("li").getAttribute("data-index");
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }

// Initialize SortableJS for reordering
new Sortable(document.getElementById("todoList"), {
  animation: 150,
  onEnd: function (event) {
    // Update the task array to reflect the new order after reordering
    const [movedTask] = tasks.splice(event.oldIndex, 1);
    tasks.splice(event.newIndex, 0, movedTask);

    // Re-render the tasks and save the updated order
    saveTasks();
    renderTasks();
  },
});

function filterTasks(filter) {
  currentFilter = filter;
  document
    .querySelectorAll(".btn-group .btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .getElementById(`filter${capitalize(filter)}`)
    .classList.add("active");
  renderTasks();
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Load tasks from localStorage on page load
window.onload = function () {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
  }
};

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const newTask = { text: todoText, completed: false };
    tasks.push(newTask);
    todoInput.value = "";
    saveTasks();
    renderTasks();
  }
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
