// const { isValidElement } = require("react");
//lấy các phần tuer trong form
const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
//Lắng nghe sự kiện submit
// submit: sự kiện khi người dùng bấm nút Đăng ký.
// e.preventDefault(): chặn hành động mặc định (nếu không, form sẽ tự reload trang).
// Ta dùng JS để kiểm tra trước, nếu hợp lệ mới cho “gửi dữ liệu”.
form.addEventListener("submit", function(e) {
    e.preventDefault(); //chặn gửi form mặc định
// Coi như “cờ báo”.
// Nếu phát hiện lỗi → gán valid = false.
// Cuối cùng chỉ khi valid === true thì mới hiển thị “Đăng ký thành công”.
let valid = true;

//kiểm tra username
// .value: lấy dữ liệu người dùng nhập.
// .trim(): xoá khoảng trắng thừa.
// Nếu rỗng → báo lỗi.
// Nếu có nội dung → xoá lỗi cũ (nếu có).
if (username.value.trim() === "") {
    showError(username, "Tên đăng nhập không được để trống");
    valid = false;
} else {
    clearError(username);
}

//kiểm tra email
// Nếu email rỗng → báo lỗi.
// Nếu không rỗng nhưng sai định dạng (kiểm tra bằng regex isValidEmail) → báo lỗi.
// Nếu hợp lệ → xoá lỗi.
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
// Nếu mật khẩu < 6 ký tự → báo lỗi.
// Nếu đủ dài → hợp lệ.
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
// Tìm đến <small class="error"> nằm ngay dưới input.
// Gán textContent = thông báo lỗi.
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

//hàm kiểm tra định dạng email: Đây là regex (biểu thức chính quy).
//Kiểm tra email phải có dạng: chữ cái + @ + tên miền + . + phần mở rộng.
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}