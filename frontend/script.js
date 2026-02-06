const API_URL = "http://localhost:5000/api/tasks";

const form = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const task = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    status: document.getElementById("status").value,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  form.reset();
  loadTasks();
});

async function loadTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    const text = document.createElement("span");
    text.innerText = `${task.title} - ${task.status}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = async () => {
      await fetch(`${API_URL}/${task._id}`, {
        method: "DELETE",
      });
      loadTasks();
    };

    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Toggle Status";
    toggleBtn.onclick = async () => {
      const newStatus = task.status === "pending" ? "completed" : "pending";

      await fetch(`${API_URL}/${task._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      loadTasks();
    };

    text.style.textDecoration =
      task.status === "completed" ? "line-through" : "none";
    li.appendChild(text);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

loadTasks();
