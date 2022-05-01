import React from "react";
import { Route, Routes } from "react-router";
import './index.css';
import Books from "./screens/Books/Books";
import Home from "./screens/index"
import Projects from "./screens/Projects/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
