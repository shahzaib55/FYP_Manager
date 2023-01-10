import Dashboard from "../pages/dashboard";
import Supervisor from "../components/supervisor/page";
import Groups from "../components/groups/page";
import Students from "../components/students/page";
import Tasks from "../components/task";
import Announcement from "../components/announcement";
import Main from '../components/main'
import {Route, Routes } from "react-router-dom";
import Profile from "../components/profile";
import React from "react";
import Login from "../pages/login";
import Form from '../components/add/add_student'
import Projects from '../components/projects/page'
function MainRout() {
  return (

    <React.Fragment>
      <Routes>
      {/*  */}
        {/* <Route  path="/main" element={<Main />} />
        <Route  path="/dashboard" element={<Main />} />
        <Route  path="/projects" element={<Projects />} />
        <Route  path="/supervisor" element={<Supervisor />} />
        <Route  path="/groups" element={<Groups />} />
        <Route  path="/students" element={<Students />} />
        <Route  path="/Taks" element={<Tasks />} />
        <Route  path="/announcement" element={<Announcement />} />
        <Route  path="/profile" element={<Profile />} />
       
        <Route  path="/form" element={<Form />} /> */}
        <Route  path="/login" element={<Login />} />

        <Route  index element={<Main />} />
        <Route  path="/" element={<Main />} />
        <Route  path="projects" element={<Projects />} />
        <Route  path="supervisor" element={<Supervisor />} />
        <Route  path="groups" element={<Groups />} />
        <Route  path="students" element={<Students />} />
        <Route  path="Taks" element={<Tasks />} />
        <Route  path="announcement" element={<Announcement />} />
        <Route  path="profile" element={<Profile />} />
       
        <Route  path="form" element={<Form />} />

        

        {/* 
        

        */}
      </Routes>
    </React.Fragment>
  );
}

export default MainRout;
