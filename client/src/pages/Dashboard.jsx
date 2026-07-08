import DashboardLayout from "../components/layout/DashboardLayout";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatCard from "../components/dashboard/StatCard";
import QuickActions from "../components/dashboard/QuickActions";
import ProgressCard from "../components/dashboard/ProgressCard";

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

      <div className="mt-8">
        <ProgressCard />
      </div>
      
    </DashboardLayout>
  );
}

export default Dashboard;
