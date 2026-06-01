const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const error = document.getElementById("error");
const toggleBtn = document.getElementById("themeToggle");

form.addEventListener("submit", function(e){

    e.preventDefault();

    if(taskInput.value.trim() === ""){
        error.textContent = "Please enter a task";
        return;
    }

    error.textContent = "";
    //create a task
    const card = document.createElement("div");
    card.classList.add("task-card");

    card.innerHTML = `
    <span>${taskInput.value}</span>
    <button class="btn secondary delete-btn">Delete</button>`;

    // Add a task to list 
    taskList.appendChild(card);

    // Delete a task
    card.querySelector(".delete-btn").addEventListener("click", () => {
    card.remove();
    // Clear input after adding
    taskInput.value = "";
});
});

// Dark Mode Toggle
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});