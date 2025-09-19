const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Thêm công việc
addBtn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${input.value} <button class="delete">❌</button>`;
    list.appendChild(li);
    input.value = "";
  }
});

// Event delegation để xoá
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
