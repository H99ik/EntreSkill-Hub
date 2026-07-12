import api from "./api";

// Get All Users
export const getAllUsers = async () => {
  return await api.get("/users");
};

// Delete User
export const deleteUser = async (id) => {
  return await api.delete(`/users/${id}`);
};

// Update User
export const updateUser = async (id, data) => {
  return await api.patch(`/users/${id}`, data);
};
