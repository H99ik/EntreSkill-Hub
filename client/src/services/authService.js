import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register
export const registerUser = async (userData) => {
  const { data } = await axios.post(`${API_URL}/register`, userData);
  return data;
};

// Login
export const loginUser = async (userData) => {
  const { data } = await axios.post(`${API_URL}/login`, userData);
  return data;
};

// Forgot Password
export const forgotPassword = async (userData) => {
  const { data } = await axios.post(
    `${API_URL}/forgot-password`,
    userData
  );

  return data;
};

// Verify Reset OTP
export const verifyResetOtp = async (userData) => {
  const { data } = await axios.post(
    `${API_URL}/verify-reset-otp`,
    userData
  );

  return data;
};

// Reset Password
export const resetPassword = async (userData) => {
  const { data } = await axios.post(
    `${API_URL}/reset-password`,
    userData
  );

  return data;
};

// Get Profile
export const getProfile = async (token) => {
  const { data } = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};