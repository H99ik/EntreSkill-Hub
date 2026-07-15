import DashboardLayout from "../components/layout/DashboardLayout";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatCard from "../components/dashboard/StatCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivityCard from "../components/dashboard/RecentActivityCard";
import UpcomingSessions from "../components/dashboard/UpcomingSessions";

import { getMentors } from "../services/mentorService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  FaUsers,
  FaCalendarAlt,
  FaStar,
  FaCheckCircle,
  FaBookOpen,
  FaUser,
} from "react-icons/fa";

function Mentor() {
  
  const navigate = useNavigate();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    fetchMentor();
  }, []);

  const fetchMentor = async () => {
    try {
      const response = await getMentors();

      if (response.data.length > 0) {
        setMentor(response.data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const mentorActions = [
    {
      title: "My Entrepreneurs",
      path: "/my-entrepreneurs",
      icon: <FaUsers className="text-blue-600" />,
    },
    {
      title: "My Resources",
      path: "/resources",
      icon: <FaBookOpen className="text-purple-600" />,
    },
    {
      title: "Sessions",
      path: "/mentor-sessions",
      icon: <FaCalendarAlt className="text-green-600" />,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: <FaUser className="text-orange-500" />,
    },
  ];

  const mentorActivities = [
    {
      id: 1,
      title: "Mentor Profile Loaded",
      description: "Welcome back to EntreSkill Hub.",
      time: "Today",
      icon: <FaUser />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "New Resource Available",
      description: "Business Planning Course",
      time: "Yesterday",
      icon: <FaBookOpen />,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <DashboardLayout>
      <WelcomeCard
        description={
          mentor
            ? `${mentor.expertise} Mentor with ${mentor.experience} of experience. Help entrepreneurs build successful startups.`
            : "Loading mentor..."
        }
        buttonText="View Sessions"
        onButtonClick={() => navigate("/mentor-sessions")}
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Experience"
          value={mentor?.experience || "0"}
          icon={<FaCheckCircle className="text-white text-2xl" />}
          color="bg-blue-600"
        />

        <StatCard
          title="Sessions"
          value={mentor?.sessions || 0}
          icon={<FaCalendarAlt className="text-white text-2xl" />}
          color="bg-purple-600"
        />

        <StatCard
          title="Rating"
          value={mentor?.rating || 0}
          icon={<FaStar className="text-white text-2xl" />}
          color="bg-emerald-600"
        />

        <StatCard
          title="Entrepreneurs"
          value="0"
          icon={<FaUsers className="text-white text-2xl" />}
          color="bg-orange-500"
        />
      </div>

      <div className="mt-8">
        <QuickActions actions={mentorActions} />
      </div>

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RecentActivityCard activities={mentorActivities} />

        <UpcomingSessions />
      </div>

    </DashboardLayout>
  );
}

export default Mentor;
