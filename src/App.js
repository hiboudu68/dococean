import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Settings from "./pages/Settings";
import Info from "./pages/Info";
import Play from "./pages/play";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/info" element={<Info />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </Router>
  );
}
