import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container">
      <h2>Blog Page</h2>
      <div className="list-group">
        {blogs.map((blog) => (
          <div key={blog.id} className="list-group-item">
            <h5 className="mb-1">{blog.title}</h5>
            <p className="mb-1">{blog.content}</p>
            <small>Author: {blog.author}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
