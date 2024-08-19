import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import BlogPage from "./components/BlogPage";
import CreateBlog from "./components/CreateBlog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
