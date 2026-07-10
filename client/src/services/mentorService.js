import API from "./api";

// Get All Mentors
export const getMentors = async () => {
  const { data } = await API.get("/mentors");
  return data;
};

// Get Mentor By ID
export const getMentorById = async (id) => {
  const { data } = await API.get(`/mentors/${id}`);
  return data;
};

// Create Mentor
export const createMentor = async (mentorData) => {
  const { data } = await API.post("/mentors", mentorData);
  return data;
};

// Update Mentor
export const updateMentor = async (id, mentorData) => {
  const { data } = await API.put(`/mentors/${id}`, mentorData);
  return data;
};

// Delete Mentor
export const deleteMentor = async (id) => {
  const { data } = await API.delete(`/mentors/${id}`);
  return data;
};
