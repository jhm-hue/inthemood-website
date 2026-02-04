import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Film from "./pages/Film";
import Tech from "./pages/Tech";
import About from "./pages/About";
import Mood from "./pages/Mood";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film" element={<Film />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/about" element={<About />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
