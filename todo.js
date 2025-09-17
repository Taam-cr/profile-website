const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

//khi bấm nút thêm
function addTask() {
    const taskText = input.ariaValueMax.trim();

    if (taskText !== "") {
        const li = document.createElement("li");//tạo thẻ li
        li.textContent = taskText; //gán nội dung

        //tạo nút xóa
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌"
        deleteBtn.style.marginLeft = "10px";

        //khi bấm xóa
        deleteBtn.addEventListener("click", function() {
            li.remove;
        });

        //gắn nút xóa vào li
        li.appendChild(deleteBtn);
        taskList.appendChild(li); //thêm vào ul

        input.value = ""; //reset ô input
    }
}

addBtn.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});