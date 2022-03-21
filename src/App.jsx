import React from "react";
import { Route, Routes } from "react-router";
import './index.css';
import Home from "./screens/index"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
