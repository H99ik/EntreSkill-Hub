import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaLightbulb,
  FaBookOpen,
  FaUserFriends,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { logoutUser } from "../../services/authService";
import { sidebarMenus } from "../../data/sidebarMenu";

function Sidebar() {
  const navigate = useNavigate();

  // Mobile Menu
  const [isOpen, setIsOpen] = useState(false);

  // Profile Dropdown
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Logged-in User
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};

  const dashboardPath = {
    admin: "/admin",
    mentor: "/mentor",
    entrepreneur: "/dashboard",
  };

  // Menu Items
  const menuItems = sidebarMenus[userInfo.role] || sidebarMenus.entrepreneur;

  // Logout
  const handleLogout = () => {
    logoutUser();

    toast.success("Logged out successfully!");

    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col bg-slate-900 text-white shadow-2xl">
      {/* Logo */}
      <div className="border-b border-slate-700 px-6 py-6">
        <Link
          to={dashboardPath[userInfo.role] || "/dashboard"}
          className="text-2xl font-bold text-white"
        >
          🚀 EntreSkill Hub
        </Link>
      </div>

      {/* User Card */}
      <div className="border-b border-slate-700 px-6 py-6">
        <div className="flex items-center gap-4">
          {/* <FaUserCircle className="text-6xl text-blue-400" /> */}

          <div>
            <h2 className="text-lg font-bold">{userInfo.name || "User"}</h2>

            <p className="text-sm text-slate-300 capitalize">
              {userInfo.role || "Member"}
            </p>
          </div>
        </div>
      </div>

      <nav className="mt-6 flex-1 overflow-y-auto px-4 no-scrollbar">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  <Icon className="text-lg" />

                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="w-full border-t border-slate-700 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
