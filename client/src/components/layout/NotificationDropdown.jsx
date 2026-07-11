import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import {
  getNotifications,
  markAsRead,
} from "../../services/notificationService";

function NotificationDropdown() {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const data = await getNotifications();
      setNotifications(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRead = async (id) => {
    await markAsRead(id);

    fetchNotifications();
  };

  return (
    <div className="relative">
      {/* Bell */}
      <button
        onClick={() => setOpen(!open)}
        className="relative text-gray-600 hover:text-blue-600"
      >
        <FaBell size={22} />

        {notifications.some((n) => !n.isRead) && (
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-xl border z-50">
          <div className="p-4 border-b font-semibold">Notifications</div>

          {notifications.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification._id}
                onClick={() => handleRead(notification._id)}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  notification.isRead ? "opacity-60" : "font-medium"
                }`}
              >
                <h3>{notification.title}</h3>

                <p className="text-sm text-gray-500">{notification.message}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationDropdown;
