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
import MyEntrepreneurs from "./pages/MyEntrepreneurs";
import Roadmap from "./pages/Roadmap";

import ProtectedRoute from "./components/auth/ProtectedRoute";

import About from "./pages/About";
import LearningResources from "./pages/LearningResources";
import MentorDirectory from "./pages/MentorDirectory";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC WEBSITE ================= */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning-resources" element={<LearningResources />} />
        <Route path="/mentor-directory" element={<MentorDirectory />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-reset-otp" element={<VerifyResetOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* ================= ADMIN ================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-users"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-mentors"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ManageMentors />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-resources"
          element={
            <ProtectedRoute allowedRoles={["admin", "mentor"]}>
              <ManageResources />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-ideas"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ManageIdeas />
            </ProtectedRoute>
          }
        />

        {/* ================= MENTOR ================= */}

        <Route
          path="/mentor"
          element={
            <ProtectedRoute allowedRoles={["mentor"]}>
              <Mentor />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-entrepreneurs"
          element={
            <ProtectedRoute allowedRoles={["mentor"]}>
              <MyEntrepreneurs />
            </ProtectedRoute>
          }
        />

        {/* ================= ENTREPRENEUR ================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["entrepreneur"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/business-ideas"
          element={
            <ProtectedRoute allowedRoles={["entrepreneur"]}>
              <BusinessIdeas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/resources"
          element={
            <ProtectedRoute allowedRoles={["entrepreneur"]}>
              <Resources />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mentors"
          element={
            <ProtectedRoute allowedRoles={["entrepreneur"]}>
              <Mentors />
            </ProtectedRoute>
          }
        />

        <Route
          path="/roadmap"
          element={
            <ProtectedRoute allowedRoles={["entrepreneur", "mentor"]}>
              <Roadmap />
            </ProtectedRoute>
          }
        />

        <Route
          path="/roadmap/:id"
          element={
            <ProtectedRoute allowedRoles={["entrepreneur", "mentor"]}>
              <Roadmap />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute allowedRoles={["entrepreneur", "mentor", "admin"]}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
