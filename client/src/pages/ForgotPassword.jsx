import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { MdEmail } from "react-icons/md";
import { FaLock, FaTimes, FaCopy, FaCheck } from "react-icons/fa";

import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import { forgotPassword } from "../services/authService";

function ForgotPassword() {
  // navigate hook to redirect after OTP generation
  const navigate = useNavigate();

  // email state
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // state for OTP modal and generated OTP
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [copied, setCopied] = useState(false);

  // handle forgot password form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter your email.");
    }

    try {
      setLoading(true);

      const data = await forgotPassword({ email });

      setGeneratedOtp(data.otp);
      setShowOtpModal(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to generate OTP.");
    } finally {
      setLoading(false);
    }
  };

  // handle copying OTP to clipboard
  const handleCopyOtp = async () => {
    try {
      await navigator.clipboard.writeText(generatedOtp);

      setCopied(true);

      toast.success("OTP copied successfully!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      toast.error("Failed to copy OTP.");
    }
  };

  // Render the Forgot Password form
  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your registered email to receive a reset OTP."
    >
      {showOtpModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowOtpModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md animate-in fade-in zoom-in"
          >
            <button
              onClick={() => setShowOtpModal(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center
             text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
            >
              <FaTimes size={18} />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
                <FaLock className="text-3xl text-blue-600" />
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                OTP Generated
              </h2>

              <p className="text-gray-500 mt-2">Development Mode Demo</p>

              <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 mt-3">
                <span className="text-xs font-semibold text-orange-700">
                  Development Mode
                </span>
              </div>

              <p className="text-xs text-orange-500 mt-2">
                This OTP is shown only while developing the application.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-600 to-indigo-700 p-6 shadow-xl">
                <p className="text-xs uppercase tracking-widest text-blue-100">
                  One Time Password
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <h1 className="text-5xl font-bold tracking-[12px] text-white">
                    {generatedOtp}
                  </h1>

                  <button
                    onClick={handleCopyOtp}
                    className="ml-4 flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-white transition hover:bg-white/30"
                  >
                    {copied ? (
                      <>
                        <FaCheck />
                        Copied
                      </>
                    ) : (
                      <>
                        <FaCopy />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowOtpModal(false);
                  navigate("/verify-reset-otp", {
                    state: {
                      email,
                      otp: generatedOtp,
                    },
                  });
                }}
                className="w-full mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 py-3 text-white font-semibold hover:shadow-xl transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={MdEmail}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 py-3.5 text-white font-semibold hover:shadow-xl transition"
        >
          {loading ? "Generating OTP..." : "Send OTP"}
        </button>

        <p className="text-center text-gray-600">
          Remember your password?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Back to Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default ForgotPassword;
