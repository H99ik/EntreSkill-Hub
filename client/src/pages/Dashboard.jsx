import DashboardLayout from "../components/layout/DashboardLayout";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatCard from "../components/dashboard/StatCard";
import QuickActions from "../components/dashboard/QuickActions";
import ProgressCard from "../components/dashboard/ProgressCard";
import RecentActivityCard from "../components/dashboard/RecentActivityCard";
import RecommendedIdeas from "../components/dashboard/RecommendedIdeas";
import UpcomingSessions from "../components/dashboard/UpcomingSessions";
import LearningTimeline from "../components/dashboard/LearningTimeline";
import Achievements from "../components/dashboard/Achievements";
import { useNavigate } from "react-router-dom";

import {
  FaLightbulb,
  FaBookOpen,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";

function Dashboard() {

  const navigate = useNavigate();

  const entrepreneurActions = [
    {
      title: "Explore Ideas",
      path: "/business-ideas",
      icon: <FaLightbulb className="text-blue-600" />,
    },
    {
      title: "Learning Center",
      path: "/resources",
      icon: <FaBookOpen className="text-emerald-600" />,
    },
    {
      title: "Find Mentor",
      path: "/mentors",
      icon: <FaUserFriends className="text-purple-600" />,
    },
    {
      title: "My Progress",
      path: "/dashboard",
      icon: <FaChartLine className="text-orange-500" />,
    },
  ];

  const entrepreneurActivities = [
    {
      id: 1,
      title: "New Business Idea Generated",
      description: "AI Based Grocery Delivery",
      time: "5 min ago",
      icon: <FaLightbulb />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Resource Completed",
      description: "Business Planning Fundamentals",
      time: "30 min ago",
      icon: <FaBookOpen />,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      id: 3,
      title: "Mentor Session Booked",
      description: "Startup Strategy Discussion",
      time: "2 hours ago",
      icon: <FaUserFriends />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      title: "Roadmap Milestone Completed",
      description: "Market Research",
      time: "Today",
      icon: <FaChartLine />,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <DashboardLayout>
      <WelcomeCard
        description="Ready to transform your skills into a successful business? Continue your entrepreneurial journey today."
        buttonText="Explore Ideas"
        onButtonClick={() => navigate("/business-ideas")}
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Business Ideas"
          value="24"
          icon={<FaLightbulb className="text-white text-2xl" />}
          color="bg-blue-600"
        />

        <StatCard
          title="Resources"
          value="15"
          icon={<FaBookOpen className="text-white text-2xl" />}
          color="bg-emerald-600"
        />

        <StatCard
          title="Mentors"
          value="8"
          icon={<FaUserFriends className="text-white text-2xl" />}
          color="bg-purple-600"
        />

        <StatCard
          title="Progress"
          value="62%"
          icon={<FaChartLine className="text-white text-2xl" />}
          color="bg-orange-500"
        />
      </div>

      <div className="mt-8">
        <QuickActions actions={entrepreneurActions} />
      </div>

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ProgressCard />

        <RecentActivityCard activities={entrepreneurActivities} />

        <RecommendedIdeas />

        <UpcomingSessions />

        <LearningTimeline />

        <Achievements />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
