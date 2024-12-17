import React from "react";
import Create from "./components/Create.jsx";
import Read from "./components/Read.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
