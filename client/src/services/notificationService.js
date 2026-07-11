import API from "./api";

// Get Logged-in User Notifications
export const getNotifications = async () => {
  const { data } = await API.get("/notifications");
  return data;
};

// Mark Notification as Read
export const markAsRead = async (id) => {
  const { data } = await API.put(`/notifications/${id}`);
  return data;
};
