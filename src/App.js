import "./App.css";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Projects from "./components/projects";
import MainRout from "./components/Routes/mainRoute";
import Sidebar from "./components/sidebar";
import Students from "./components/students";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
    
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
