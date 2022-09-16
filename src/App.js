import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import GrantsPage from "./pages/GrantsPage";
import GrantPage from "./pages/GrantPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AccountPage from "./pages/AccountPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import "./App.css";




function App() {
  // const [loggedIn, setLoggedIn] = useState(!!window.localStorage.getItem('token'));
  return (
    <Router>
      <div id="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="grant/:id" element={<GrantPage />} />
          <Route path="grants" element={<GrantsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route exact path="/users/:id" element={<AccountPage />} />
          {/* <Route path="account" element={loggedIn ? <UsersPage /> : <LoginPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router >
  );
}

export default App;

