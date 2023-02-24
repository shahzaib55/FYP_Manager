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
import AddStudent from "../components/add/add_student";
import AddProject from "../components/add/add_project";
import AddGroup from "../components/add/add_group";
import AddSupervisor from "../components/add/add_supervisor";
import ShowTask from "../components/assignment/page";
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

        <Route  index path="/" element={<Main />} />
        <Route  path="/main" element={<Main />} />
        <Route  path="projects" element={<Projects />} />
        <Route  path="supervisor" element={<Supervisor />} />
        <Route  path="groups" element={<Groups />} />
        <Route  path="students" element={<Students />} />
        <Route  path="tasks" element={<Tasks />} />
        <Route  path="announcement" element={<Announcement />} />
        <Route  path="profile" element={<Profile />} />
        <Route  path="Assignment" element={<ShowTask />} />
       
        <Route  path="form" element={<Form />} />
        <Route  path="students/AddStudent" element={<AddStudent />} />
        <Route  path="groups/AddGroup" element={<AddGroup/>} />
        <Route  path="projects/AddProject" element={<AddProject />} />
        <Route  path="supervisor/AddSupervisor" element={<AddSupervisor />} />
        
        {/* <Route  path="students/AddStudent" element={<AddStudent />} /> */}
        
        

        

        {/* 
        

        */}
      </Routes>
    </React.Fragment>
  );
}

export default MainRout;
