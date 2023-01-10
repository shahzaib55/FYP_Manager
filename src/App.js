import "./App.css";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainBody from "./components/main";
import Projects from "./components/projects/projects";
import Supervisor from "./components/supervisor/supervisor";
import Groups from "./components/groups/groups";
import Students from "./components/students/students";
import Task from "./components/task";
import Announcement from "./components/announcement";
import Profile from "./components/profile";
import Form from "./components/add/add_project";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="dashboard/main" element={<MainBody />} />
          <Route path="dashboard/dashboard" element={<MainBody />} />
          <Route path="dashboard/projects" element={<Projects />} />
          <Route path="dashboard/supervisor" element={<Supervisor />} />
          <Route path="dashboard/groups" element={<Groups />} />
          <Route path="dashboard/students" element={<Students />} />
          <Route path="dashboard/Taks" element={<Task />} />
          <Route path="dashboard/announcement" element={<Announcement />} />
          <Route path="dashboard/profile" element={<Profile />} />
          <Route path="dashboard/form" element={<Form />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
