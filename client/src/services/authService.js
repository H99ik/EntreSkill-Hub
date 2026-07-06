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

// Get Profile
export const getProfile = async (token) => {
  const { data } = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};