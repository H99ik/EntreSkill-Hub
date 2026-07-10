import API from "./api";

// Get All Resources
export const getResources = async () => {
  const { data } = await API.get("/resources");
  return data;
};

// Get Resource By ID
export const getResourceById = async (id) => {
  const { data } = await API.get(`/resources/${id}`);
  return data;
};

// Create Resource
export const createResource = async (resourceData) => {
  const { data } = await API.post("/resources", resourceData);
  return data;
};

// Update Resource
export const updateResource = async (id, resourceData) => {
  const { data } = await API.put(`/resources/${id}`, resourceData);
  return data;
};

// Delete Resource
export const deleteResource = async (id) => {
  const { data } = await API.delete(`/resources/${id}`);
  return data;
};
