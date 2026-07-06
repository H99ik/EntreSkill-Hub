import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { registerUser } from "../services/authService";
import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import RoleSelector from "../components/RoleSelector";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Register() {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("entrepreneur");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  // useNavigate hook for navigation after successful registration
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      return toast.error("Please fill in all fields");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);
      const data = await registerUser({ name, email, password, role });

      localStorage.setItem("userInfo", JSON.stringify(data));

      toast.success("Registration successful!");

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your entrepreneurial journey with EntreSkill Hub."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={FaUser}
        />

        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={MdEmail}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={FaLock}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={FaLock}
          showPassword={showConfirmPassword}
          setShowPassword={setShowConfirmPassword}
        />

        <RoleSelector role={role} setRole={setRole} />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 py-3.5 font-semibold
           text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl disabled:opacity-70 
           disabled:cursor-not-allowed"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Register;
