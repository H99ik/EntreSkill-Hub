import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { FaLock } from "react-icons/fa";

import AuthLayout from "../components/auth/AuthLayout";
import InputField from "../components/auth/InputField";
import { resetPassword } from "../services/authService";

function ResetPassword() {
  // Navigation
  const navigate = useNavigate();
  const location = useLocation();

  // Get email from Verify OTP page
  const email = location.state?.email;

  // Redirect if user comes here directly
  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  // Form State
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Password Visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Loading
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check empty fields
    if (!password || !confirmPassword) {
      return toast.error("Please fill in all fields.");
    }

    // Passwords match
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    // Strong password validation
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/\d/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    ) {
      return toast.error("Please create a stronger password.");
    }

    try {
      setLoading(true);

      await resetPassword({
        email,
        password,
      });

      toast.success("Password reset successfully!");

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Create a strong password for your account."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          label="New Password"
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={FaLock}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <InputField
          label="Confirm Password"
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={FaLock}
          showPassword={showConfirmPassword}
          setShowPassword={setShowConfirmPassword}
        />

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
          <h3 className="mb-3 font-semibold text-gray-700">
            Password Requirements
          </h3>

          <div className="space-y-2 text-sm">
            <p
              className={
                password.length >= 8 ? "text-green-600" : "text-gray-500"
              }
            >
              ✓ Minimum 8 characters
            </p>

            <p
              className={
                /[A-Z]/.test(password) ? "text-green-600" : "text-gray-500"
              }
            >
              ✓ One uppercase letter
            </p>

            <p
              className={
                /[a-z]/.test(password) ? "text-green-600" : "text-gray-500"
              }
            >
              ✓ One lowercase letter
            </p>

            <p
              className={
                /\d/.test(password) ? "text-green-600" : "text-gray-500"
              }
            >
              ✓ One number
            </p>

            <p
              className={
                /[!@#$%^&*]/.test(password) ? "text-green-600" : "text-gray-500"
              }
            >
              ✓ One special character
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Updating Password..." : "Reset Password"}
        </button>

        <p className="text-center text-gray-600">
          Remember your password?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-semibold text-blue-600 hover:underline"
          >
            Back to Login
          </button>
        </p>
      </form>
    </AuthLayout>
  );
}

export default ResetPassword;
