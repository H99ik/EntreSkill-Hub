import API from "./api";

// Get All Roadmaps
export const getRoadmaps = async () => {
  const { data } = await API.get("/roadmaps");
  return data;
};

// Get Roadmap By ID
export const getRoadmapById = async (id) => {
  const { data } = await API.get(`/roadmaps/${id}`);
  return data;
};

// Create Roadmap
export const createRoadmap = async (roadmapData) => {
  const { data } = await API.post("/roadmaps", roadmapData);
  return data;
};

// Update Roadmap
export const updateRoadmap = async (id, roadmapData) => {
  const { data } = await API.put(`/roadmaps/${id}`, roadmapData);
  return data;
};

// Delete Roadmap
export const deleteRoadmap = async (id) => {
  const { data } = await API.delete(`/roadmaps/${id}`);
  return data;
};

export const getRoadmapByEntrepreneur = async (id) => {
  const { data } = await API.get(`/roadmaps/entrepreneur/${id}`);
  return data;
};