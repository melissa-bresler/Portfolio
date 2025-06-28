import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import AdventureExe from "./pages/games/AdventureExe";
import MemoryMeltdown from "./pages/games/MemoryMeltdown";
import KaaxsDawn from "./pages/games/KaaxsDawn";

const App: React.FC = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/adventureExe" element={<AdventureExe />} />{" "}
        <Route path="/memory-meltdown" element={<MemoryMeltdown />} />{" "}
        <Route path="/kaaxs-dawn" element={<KaaxsDawn />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
// useful link for getting started: https://create-react-app.dev/docs/getting-started
