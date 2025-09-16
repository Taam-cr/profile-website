//biến lưu số lần bấm
let count = 0;
//tìm button và đoạn văn bản theo id
const button = document.getElementById("btn");
const result = document.getElementById("result");
//lắng nghe sự kiện click
button.addEventListener("click", function() {
  count++;  //tăng biến thêm 1
  //cập nhật lại nội dung thẻ <p>
  result.textContent = "số lần bấm: " + count;
});