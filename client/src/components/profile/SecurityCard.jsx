import { useState } from "react";
import { FaLock, FaSave, FaEye, FaEyeSlash } from "react-icons/fa";
import { changePassword } from "../../services/authService";
import toast from "react-hot-toast";

function SecurityCard() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.newPassword !== formData.confirmPassword) {
        return toast.error("Passwords do not match");
      }

      const response = await changePassword({
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      toast.success(response.message);

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Password update failed");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-red-100 text-red-600 p-3 rounded-xl">
          <FaLock />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">Security</h2>

          <p className="text-gray-500">Update your account password.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Current Password */}
        <div className="relative">
          <input
            type={showCurrentPassword ? "text" : "password"}
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            placeholder="Enter current password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
          >
            {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* New Password */}
        <div className="relative">
          <input
            type={showNewPassword ? "text" : "password"}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
          >
            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-white transition hover:bg-red-700"
        >
          <FaSave />
          Change Password
        </button>
      </form>
    </div>
  );
}

export default SecurityCard;
