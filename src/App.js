import React from 'react';
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Leaderboard from './pages/Leaderboard';
import Dashboard from "./pages/Dashboard";
import "./App.css";
import {Routes, Route} from "react-router-dom";

import "./App.css";

function App() {
  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
