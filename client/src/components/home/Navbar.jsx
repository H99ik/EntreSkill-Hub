import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">EntreSkill Hub</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/" className="hover:text-blue-600">
            About
          </Link>

          <Link to="/" className="hover:text-blue-600">
            Resources
          </Link>

          <Link to="/" className="hover:text-blue-600">
            Mentors
          </Link>

          <Link to="/login" className="text-blue-700 font-medium">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
          >
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          <Link to="/">Home</Link>

          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
