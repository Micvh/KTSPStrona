import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import KTSPHome from "./KTSPHome";
import KTSPOffers from "./KTSPOffers";
import KtspOferty from "./KtspOferty";
import KTSPContact from "./KTSPContact";
import KTSPAbout from "./KTSPAbout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<KTSPHome />} />
        <Route path="/oferty" element={<KTSPOffers />} />
        <Route path="/oferty/:id" element={<KtspOferty />} />
        <Route path="/o-nas" element={<KTSPAbout />} />
        <Route path="/kontakt" element={<KTSPContact />} />
      </Routes>
    </Router>
  );
}

export default App;