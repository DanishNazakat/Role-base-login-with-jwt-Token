window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/allblogs");
    const blogsData = response.data.data;

    const blogSection = document.getElementById("blogSection");
    blogSection.innerHTML = ""; // clear "Loading..." message

    if (blogsData.length === 0) {
      blogSection.innerHTML = "<p>No blogs found.</p>";
      return;
    }

    blogsData.forEach(blog => {
      const blogDiv = document.createElement("div");
      blogDiv.classList.add("singleBlog");
      blogDiv.innerHTML = `
        <h2>${blog.tittle}</h2>
        <h4>By ${blog.authorName}</h4>
        <p>${blog.blogContent}</p>
        <hr>
      `;
      blogSection.appendChild(blogDiv);
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    document.getElementById("blogSection").innerHTML = "<p>Failed to load blogs.</p>";
  }
});
