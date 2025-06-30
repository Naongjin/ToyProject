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
import ProjectDetail from "./pages/Project/Project_detail";
import Group from "./pages/Group/Group";
import MyGroup from "./pages/Group/My_group";
import GroupDetail from "./pages/Group/Group_detail";
import MyGroupDetail from "./pages/Group/My_group_detail";
import GroupCreate from "./pages/Group/Create_group";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup_agree" element={<SignUp_agree />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup_complete" element={<SignUp_complete />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile_edit" element={<Profile_edit />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project_detail" element={<ProjectDetail />} />
        <Route path="/group" element={<Group />} />
        <Route path="/mygroup" element={<MyGroup />} />
        <Route path="/group_detail" element={<GroupDetail />} />
        <Route path="/mygroup_detail" element={<MyGroupDetail />} />
        <Route path="/group_create" element={<GroupCreate />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
