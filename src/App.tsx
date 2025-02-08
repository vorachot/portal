import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tickets from "./pages/Tickets";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/" element={<Tickets />} />
      </Routes>
    </Router>
  );
};

export default App;
