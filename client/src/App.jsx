import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import login from "./pages/login";
import "./App.css";
import React from "react";

function App() {
  return (
    <browserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<login />} />
        </Routes>
      </Router>
    </browserRouter>
  );
}

export default App;
