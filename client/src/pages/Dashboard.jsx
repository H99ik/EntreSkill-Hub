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


import {
  FaLightbulb,
  FaBookOpen,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";

function Dashboard() {
  return (
    <DashboardLayout>
      <WelcomeCard />

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
        <QuickActions />
      </div>

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ProgressCard />

        <RecentActivityCard />

        <RecommendedIdeas />

        <UpcomingSessions />

        <LearningTimeline />

        <Achievements />
      </div>

    </DashboardLayout>
  );
}

export default Dashboard;
