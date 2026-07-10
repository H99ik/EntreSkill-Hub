import API from "./api";
import axios from "axios";

// Register
export const registerUser = async (userData) => {
  const { data } = await API.post("/auth/register", userData);
  return data;
};

// Login
export const loginUser = async (userData) => {
  const { data } = await API.post("/auth/login", userData);
  return data;
};

// Forgot Password
export const forgotPassword = async (userData) => {
  const { data } = await API.post("/auth/forgot-password", userData);
  return data;
};

// Verify Reset OTP
export const verifyResetOtp = async (userData) => {
  const { data } = await API.post("/auth/verify-reset-otp", userData);
  return data;
};

// Reset Password
export const resetPassword = async (userData) => {
  const { data } = await API.post("/auth/reset-password", userData);
  return data;
};

// Get Profile
export const getProfile = async () => {
  const { data } = await API.get("/auth/profile");
  return data;
};

// Update Profile
export const updateProfile = async (profileData) => {
  const { data } = await API.put("/auth/profile", profileData);

  return data;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("userInfo");
};
