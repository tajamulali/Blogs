function addComment() {
    let name = document.getElementById("name").value.trim();
    let comment = document.getElementById("comment").value.trim();

    if (name === "" || comment === "") {
        alert("Please enter both name and comment!");
        return;
    }

    let commentBox = document.createElement("div");
    commentBox.classList.add("comment");
    commentBox.innerHTML = `<strong>${name}</strong> <p>${comment}</p>`;

    document.getElementById("comments").appendChild(commentBox);

    // Clear input fields after submission
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
}

function performSearch() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let blogs = document.querySelectorAll(".blog-list .blog-item"); // Adjust class if needed
    let found = false;

    blogs.forEach(blog => {
        let title = blog.querySelector("h2, p").innerText.toLowerCase(); // Check inside h2 or p
        if (title.includes(input)) {
            blog.style.display = "block";
            found = true;
        } else {
            blog.style.display = "none";
        }
    });

    document.getElementById("noResults").style.display = found ? "none" : "block";
}

