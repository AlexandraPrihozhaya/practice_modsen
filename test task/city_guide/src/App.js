import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>       
  );
}

export default App;