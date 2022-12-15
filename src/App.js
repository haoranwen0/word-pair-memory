import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages import
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import Instructions from "./pages/Instructions";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Instructions />} />
        <Route path="/game" element={<Game />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminHome />} />
      </Routes>
    </Router>
  );
}

export default App;
