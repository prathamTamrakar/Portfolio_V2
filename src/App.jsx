import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackgroundEffects from "./components/BackgroundEffects";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

// Scroll restoration to top on route change (unless deep linking to an anchor)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="relative min-h-screen text-text-primary overflow-x-hidden font-sans">
      {/* Premium ambient backdrop and grid spacing */}
      <BackgroundEffects />
      
      {/* Floating navigation */}
      <Navbar />
      
      {/* Route scroll reset helper */}
      <ScrollToTop />
      
      {/* Main content layouts */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          {/* Catch-all fallback redirecting to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Minimalism footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
