// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 flex space-x-6">
      <Link to="/">Home</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/roadmaps">Roadmaps</Link>
      <Link to="/placement">Placement</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
