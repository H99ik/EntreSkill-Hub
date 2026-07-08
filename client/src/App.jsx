import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Mentor from "./pages/Mentor";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyResetOTP from "./pages/VerifyResetOTP";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
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

        <Route path="/mentor" element={<Mentor />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
