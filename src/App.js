import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/pages/login";
import Success from "../src/pages/success";
function App() {
  return (
    <Router>
            
      <Routes>
                
        <Route path="/" element={<Login />} />
                
        <Route path="/success" element={<Success />} />
              
      </Routes>
          
    </Router>
  );
}
export default App;
