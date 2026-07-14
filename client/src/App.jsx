import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import ManageUsers from "./pages/ManageUsers";
import Mentor from "./pages/Mentor";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyResetOTP from "./pages/VerifyResetOTP";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import BusinessIdeas from "./pages/BusinessIdeas";
import Resources from "./pages/Resources";
import Mentors from "./pages/Mentors";
import ManageMentors from "./pages/ManageMentors";
import ManageResources from "./pages/ManageResources";
import ManageIdeas from "./pages/ManageIdeas";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/verify-reset-otp" element={<VerifyResetOTP />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/manage-users" element={<ManageUsers/>} />

        <Route path="/manage-mentors" element={<ManageMentors />} />

        <Route path="/manage-resources" element={<ManageResources/>} />

        <Route path="/manage-ideas" element={<ManageIdeas/>} />

        <Route path="/mentor" element={<Mentor />} />

        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/business-ideas" element={<BusinessIdeas />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/mentors" element={<Mentors />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
