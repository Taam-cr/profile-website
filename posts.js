const postList = document.getElementById("postList");

async function loadPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await response.json();

        postList.innerHTML = ""; //xóa "Đang tải..."
        data.forEach(post => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                 <h3>${post.title}</h3>
                 <p>${post.body}</p>
      `;
            postList.appendChild(div);
        });
    } catch (error) {
        postList.innerHTML = "Có lỗi khi tải dữ liệu";
        console.error(error)
    }
}

loadPosts();