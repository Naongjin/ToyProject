import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import LogIn from "./pages/LogIn";
import SignUp_agree from "./pages/SignUp_agree";
import SignUp from "./pages/SignUp";
import SignUp_complete from "./pages/SignUp_complete";
import Profile from "./pages/profile";
import Profile_edit from "./pages/Profile_edit";
import Project from "./pages/Project/Project";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp_agree" element={<SignUp_agree />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUp_complete" element={<SignUp_complete />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Profile_edit" element={<Profile_edit />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
