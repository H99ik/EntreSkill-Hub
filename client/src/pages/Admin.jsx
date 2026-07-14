import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import { useEffect, useState } from "react";
import { getAllUsers } from "../services/userService";
import { getMentors } from "../services/mentorService";
import { getResources } from "../services/resourceService";
import { getBusinessIdeas } from "../services/businessIdeaService";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivityCard from "../components/dashboard/RecentActivityCard";
import {
  FaUsers,
  FaUserPlus,
  FaLightbulb,
  FaBookOpen,
  FaChalkboardTeacher,
} from "react-icons/fa";

function Admin() {
  const [stats, setStats] = useState({
    users: 0,
    mentors: 0,
    resources: 0,
    ideas: 0,
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [users, mentors, resources, ideas] = await Promise.all([
        getAllUsers(),
        getMentors(),
        getResources(),
        getBusinessIdeas(),
      ]);

      setStats({
        users: users.data.length,
        mentors: mentors.data.length,
        resources: resources.data.length,
        ideas: ideas.data.length,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const adminActions = [
    {
      title: "Manage Users",
      path: "/manage-users",
      icon: <FaUsers className="text-blue-600" />,
    },
    {
      title: "Manage Mentors",
      path: "/manage-mentors",
      icon: <FaChalkboardTeacher className="text-orange-500" />,
    },
    {
      title: "Manage Resources",
      path: "/manage-resources",
      icon: <FaBookOpen className="text-purple-600" />,
    },
    {
      title: "Manage Ideas",
      path: "/manage-ideas",
      icon: <FaLightbulb className="text-emerald-600" />,
    },
  ];

  const adminActivities = [
    {
      id: 1,
      title: "New User Registered",
      description: "A new entrepreneur joined the platform",
      time: "Today",
      icon: <FaUserPlus />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Mentor Added",
      description: "A new mentor profile was created",
      time: "Today",
      icon: <FaChalkboardTeacher />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 3,
      title: "Resource Published",
      description: "Learning resource added successfully",
      time: "Today",
      icon: <FaBookOpen />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      title: "Business Idea Created",
      description: "A new startup idea was added",
      time: "Today",
      icon: <FaLightbulb />,
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <DashboardLayout>
      <WelcomeCard
        description="Manage users, mentors, resources and business ideas from one dashboard."
        buttonText="Manage Platform"
      />

      <div className="mt-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

        <p className="mt-2 text-gray-500">
          Manage users, business ideas, mentors, resources and platform
          activities.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Users"
          value={stats.users}
          icon={<FaUsers className="text-2xl text-white" />}
          color="bg-blue-600"
        />

        <StatCard
          title="Business Ideas"
          value={stats.ideas}
          icon={<FaLightbulb className="text-2xl text-white" />}
          color="bg-emerald-600"
        />

        <StatCard
          title="Resources"
          value={stats.resources}
          icon={<FaBookOpen className="text-2xl text-white" />}
          color="bg-purple-600"
        />

        <StatCard
          title="Mentors"
          value={stats.mentors}
          icon={<FaChalkboardTeacher className="text-2xl text-white" />}
          color="bg-orange-500"
        />
      </div>

      <div className="mt-10">
        <QuickActions actions={adminActions} />
      </div>

      <div className="mt-10">
        <RecentActivityCard activities={adminActivities} />
      </div>
      
    </DashboardLayout>
  );
}

export default Admin;
