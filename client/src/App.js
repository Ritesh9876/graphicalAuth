import './App.css';
import './common.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/dashboard" element={<h1>Congratulations</h1>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
