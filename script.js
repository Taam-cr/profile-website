//biến lưu số lần bấm
let count = 0;
//tìm button và đoạn văn bản theo id
const result = document.getElementById("result");
const btninc = document.getElementById("inc");
const btndec = document.getElementById("dec");
const btnreset = document.getElementById("reset");
//hàm cập nhật giao diện
function updateresult() {
  result.textContent = "Sô lần bấm: " + count;
}
//lắng nghe sự kiện click
//nút tăng
btninc.addEventListener("click", function() {
  count++;
  updateresult();
});
//nut giam
btndec.addEventListener("click", function() {
  count--;
  updateresult();
});
btnreset.addEventListener("click", function() {
  count = 0;
  updateresult();
});

