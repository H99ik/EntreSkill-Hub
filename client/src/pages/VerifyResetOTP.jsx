import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLayout from "../components/AuthLayout";
import OTPInput from "../components/OTPInput";
import { verifyResetOtp } from "../services/authService";

function VerifyResetOTP() {
  // navigate and location hooks
  const navigate = useNavigate();
  const location = useLocation();

  // retrieve email and demo OTP from location state
  const email = location.state?.email;
  const demoOtp = location.state?.otp;

  // state for OTP input, loading, and countdown timer
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const handleVerify = async (e) => {
    e.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      return toast.error("Please enter the complete OTP.");
    }

    try {
      setLoading(true);

      await verifyResetOtp({
        email,
        otp: enteredOtp,
      });

      toast.success("OTP Verified!");

      navigate("/reset-password", {
        state: {
          email,
        },
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Verify OTP"
      subtitle="Enter the 6-digit OTP to continue."
    >
      <form onSubmit={handleVerify} className="space-y-8">
        <OTPInput otp={otp} setOtp={setOtp} />

        <div className="text-center">
          <p className="text-gray-500">OTP expires in</p>

          <h3 className="mt-2 text-2xl font-bold text-red-500">
            {minutes}:{seconds}
          </h3>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 py-3.5 font-semibold text-white shadow-lg hover:shadow-xl transition"
        >
          Verify OTP
        </button>
      </form>
    </AuthLayout>
  );
}

export default VerifyResetOTP;
