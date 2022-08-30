import React from "react";
import { BrowserRouter as Router, Route, Routes } from
  "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import GrantsPage from "./pages/GrantsPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="grant/:id" element={<GrantsPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

