import API from "./api";

// Get All Business Ideas
export const getBusinessIdeas = async () => {
  const { data } = await API.get("/business-ideas");
  return data;
};

// Get Business Idea By ID
export const getBusinessIdeaById = async (id) => {
  const { data } = await API.get(`/business-ideas/${id}`);
  return data;
};

// Create Business Idea
export const createBusinessIdea = async (ideaData) => {
  const { data } = await API.post("/business-ideas", ideaData);
  return data;
};

// Update Business Idea
export const updateBusinessIdea = async (id, ideaData) => {
  const { data } = await API.put(`/business-ideas/${id}`, ideaData);
  return data;
};

// Delete Business Idea
export const deleteBusinessIdea = async (id) => {
  const { data } = await API.delete(`/business-ideas/${id}`);
  return data;
};
