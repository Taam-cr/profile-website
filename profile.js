//ĐÊM SỐ LẦN BẤM
//biến lưu số lần bấm
let count = 0;
//tìm button và đoạn văn bản theo id
const result = document.getElementById("result");
const btninc = document.getElementById("inc");
const btndec = document.getElementById("dec");
const btnreset = document.getElementById("reset");
//hàm cập nhật giao diện
function updateResult() {
  result.textContent = "Sô lần bấm: " + count;
}
//lắng nghe sự kiện click
//nút tăng
btninc.addEventListener("click", function() {
  count++;
  updateResult();
});
//nut giam
btndec.addEventListener("click", function() {
  count--;
  updateResult();
});
btnreset.addEventListener("click", function() {
  count = 0;
  updateResult();
});


//TO - DO LIST
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Lấy task từ localStorage (nếu có)
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Hàm render danh sách
function renderTasks() {
  taskList.innerHTML = ""; // xóa danh sách cũ
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", function() {
      tasks.splice(index, 1);       // xóa 1 task trong mảng
      saveTasks();                  // lưu lại
      renderTasks();                // render lại UI
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Hàm lưu tasks vào localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Hàm thêm task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push(taskText); // thêm vào mảng
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
}

// Event
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Render lần đầu khi load trang
renderTasks();

//FORM ĐĂNG KÝ
//lấy các phần tuer trong form
const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
//Lắng nghe sự kiện submit
form.addEventListener("submit", function(e) {
    e.preventDefault(); //chặn gửi form mặc định
let valid = true;

//kiểm tra username
if (username.value.trim() === "") {
    showError(username, "Tên đăng nhập không được để trống");
    valid = false;
} else {
    clearError(username);
}

//kiểm tra email
if (email.value.trim() === "") {
    showError(email, "Email không được để trống");
    valid = false;
} else if (!isValidEmail(email.value.trim())) {
    showError(email, "Email không hợp lệ");
    valid = false;
} else {
    clearError(email);
}

//kiểm tra password
if (password.value.length < 6) {
    showError(password, "Mật khẩu phải ít nhất 6 ký tự");
    valid = false
} else {
    clearError(password);
}

//nếu hợp lệ thì in ra console
if (valid) {
    console.log("Form hợp lệ, gửi dữ liệu...");
    alert("Đăng ký thành công!");
}
});

//hàm hiển thị lỗi: Hàm showError / clearError
function showError(input, message) {
    const formControl = input.parentElement;
    const error = formControl.querySelector(".error");
    error.textContent = message;
}

//hàm xóa lỗi: Xoá thông báo lỗi khi input hợp lệ.
function clearError(input) {
    const formControl = input.parentElement;
    const error = formControl.querySelector(".error");
    error.textContent = "";
}

//hàm kiểm tra định dạng email:
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

//THEME
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});
