import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Settings from "./pages/Settings";
import Info from "./pages/Info";
import CookieCauchemar from "./pages/CookieCauchemar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/info" element={<Info />} />
        <Route path="/cookieCauchemar" element={<CookieCauchemar />} />
        </Routes>
    </Router>
  );
}
