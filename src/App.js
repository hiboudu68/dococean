import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Settings from "./pages/Settings";
import Info from "./pages/Info";
import Play from "./pages/play";
import Source from "./pages/source";
import "./App.css";
import "./assets/fonts.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/info" element={<Info />} />
        <Route path="/play" element={<Play />} />
        <Route path="/source" element={<Source />} />
      </Routes>
    </Router>
  );
}
