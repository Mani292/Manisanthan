// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Resources from "./pages/Resources";
import Roadmaps from "./pages/Roadmaps";
import Placement from "./pages/Placement";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="p-8 text-2xl">Welcome to Priyanka’s BTech Portal 🎓</h1>} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
