import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { updateProfile } from "../../services/authService";
import toast from "react-hot-toast";

function EditProfileForm({ user, setUser }) {
  const [formData, setFormData] = useState({
    name: user.name || "",
    phone: user.phone || "",
    startupGoal: user.startupGoal || "",
    bio: user.bio || "",
    skills: user.skills?.join(", ") || "",
    interests: user.interests?.join(", ") || "",
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
      
      // Get the user token from localStorage
      const updatedUser = await updateProfile(
        {
          ...formData,
          skills: formData.skills.split(",").map((item) => item.trim()),

          interests: formData.interests.split(",").map((item) => item.trim()),
        },
        userInfo.token,
      );

      setUser(updatedUser);

      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Profile update failed");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Phone</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Startup Goal */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Startup Goal
          </label>

          <input
            type="text"
            name="startupGoal"
            value={formData.startupGoal}
            onChange={handleChange}
            placeholder="Your startup goal"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Skills</label>

          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="React, Node.js, MongoDB"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="text-sm text-gray-500 mt-2">
            Separate multiple skills with commas.
          </p>
        </div>

        {/* Interests */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Interests
          </label>

          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="Technology, AI, Startups"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="text-sm text-gray-500 mt-2">
            Separate multiple interests with commas.
          </p>
        </div>

        {/* Bio */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            About Me
          </label>

          <textarea
            rows="5"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us something about yourself..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          <FaSave />
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfileForm;
