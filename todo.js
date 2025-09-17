//lấy phần tử từ HTML
const taskInput= document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

//Hàm thêm task
function addTask() {
    const taskText = taskInput.ariaValueMax.trim();

    if (taskText !== "") {
        //tạo thẻ li
        const li = document.createElement("li");
        li.textContent = taskText; //gán nội dung

        //tạo nút xóa
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌"

        //khi bấm xóa -> xóa task
        deleteBtn.addEventListener("click", function() {
            li.remove;
        });

        //gắn nút xóa vào li
        li.appendChild(deleteBtn);
        taskList.appendChild(li); //thêm vào ul

        taskInput.value = ""; //reset ô input
    }
}

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