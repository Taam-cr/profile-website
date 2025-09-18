//lấy phần tử từ HTML
const taskInput= document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

//lấy task từ LocalStorage nếu có, hoặc tạo mảng trổng
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//hàm render danh sách
function renderTasks() {
    taskList.innerHTML = ""; //xóa danh danh sách cũ
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", function(){
            tasks.splice(index, 1); //xóa 1 task trong mảng
            saveTasks(); //lưu lại
            renderTasks(); //render lại UI
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

//hàm lưu tasks vào localstorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Hàm thêm task
function addTask() {
    const taskText = taskInput.ariaValueMax.trim();
    if (taskText !== "") {
        tasks.push(taskText); //thêm vào mảng
        saveTasks();
        renderTasks();
        taskInput.value = "";
        // //tạo thẻ li
        // const li = document.createElement("li");
        // li.textContent = taskText; //gán nội dung

        // //tạo nút xóa
        // const deleteBtn = document.createElement("button");
        // deleteBtn.textContent = "❌"

        // //khi bấm xóa -> xóa task
        // deleteBtn.addEventListener("click", function() {
        //     li.remove;
        // });

        // //gắn nút xóa vào li
        // li.appendChild(deleteBtn);
        // taskList.appendChild(li); //thêm vào ul

        // taskInput.value = ""; //reset ô input
    }
}

//event
addBtn. addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

//render lần đầu khi load trang
renderTasks();

//khi bấm nút thêm
addBtn.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// taskInput.value.trim() → tránh nhập toàn khoảng trắng.

// addTask() gom toàn bộ logic lại, để không lặp code.

// deleteBtn.addEventListener("click", …) → xóa task khi bấm ❌.

// Có xử lý phím Enter, ngoài bấm nút “Thêm”.

// Reset input về rỗng sau khi thêm.