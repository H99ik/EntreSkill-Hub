import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import { loginUser } from "../services/AuthService";

function Login() {
  // navigate hook to redirect after login
  const navigate = useNavigate();

  //email and password state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please fill in both email and password fields.");
    }

    try {
      setLoading(true);
      const data = await loginUser({ email, password });

      // Store the token in local storage
      localStorage.setItem("userInfo", JSON.stringify(data));

      toast.success("Welcome back!");

      if (data.role === "admin") {
        navigate("/admin");
      } else if (data.role === "mentor") {
        navigate("/mentor");
      } else if (data.role === "entrepreneur") {
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue your entrepreneurial journey."
    >
      <form onSubmit={handleLogin} className="space-y-6">
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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={FaLock}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 py-3.5 text-base font-semibold
           text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl disabled:opacity-70 
           disabled:cursor-not-allowed"
        >
          {loading ? "Signing In..." : "Login"}
        </button>

        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create Account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Login;
