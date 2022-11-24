import Dashboard from "../../pages/dashboard";
import Projects from "../projects";
import Supervisor from "../supervisor";
import Groups from "../groups";
import Students from "../students";
import Tasks from "../task";
import Announcement from "../announcement";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function MainRout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Groups />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/supervisor" element={<Supervisor />} />
        <Route exact path="/groups" element={<Groups />} />
        <Route exact path="/students" element={<Students />} />
        <Route exact path="/Taks" element={<Tasks />} />
        <Route exact path="/announcement" element={<Announcement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRout;
