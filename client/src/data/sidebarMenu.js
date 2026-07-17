import {
  FaHome,
  FaLightbulb,
  FaBookOpen,
  FaUserFriends,
  FaUser,
  FaUsers,
  FaUserTie,
  FaMapMarkedAlt,
} from "react-icons/fa";

export const sidebarMenus = {
  entrepreneur: [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: FaHome,
    },
    {
      name: "Business Ideas",
      path: "/business-ideas",
      icon: FaLightbulb,
    },
    {
      name: "Resources",
      path: "/resources",
      icon: FaBookOpen,
    },
    {
      name: "Roadmap",
      path: "/roadmap",
      icon: FaMapMarkedAlt,
    },
    {
      name: "Mentors",
      path: "/mentors",
      icon: FaUserFriends,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: FaUser,
    },
  ],

  mentor: [
    {
      name: "Dashboard",
      path: "/mentor",
      icon: FaHome,
    },
    {
      name: "My Entrepreneurs",
      path: "/my-entrepreneurs",
      icon: FaUsers,
    },
    {
      name: "Resources",
      path: "/resources",
      icon: FaBookOpen,
    },
    {
      name: "Manage Resources",
      path: "/manage-resources",
      icon: FaBookOpen,
    },
    {
      name: "Roadmap",
      path: "/roadmap",
      icon: FaMapMarkedAlt,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: FaUser,
    },
  ],

  admin: [
    {
      name: "Dashboard",
      path: "/admin",
      icon: FaHome,
    },
    {
      name: "Manage Users",
      path: "/manage-users",
      icon: FaUsers,
    },
    {
      name: "Manage Mentors",
      path: "/manage-mentors",
      icon: FaUserTie,
    },
    {
      name: "Manage Resources",
      path: "/manage-resources",
      icon: FaBookOpen,
    },
    {
      name: "Business Ideas",
      path: "/manage-ideas",
      icon: FaLightbulb,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: FaUser,
    },
  ],
};
