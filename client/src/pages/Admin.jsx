import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import {
  FaUsers,
  FaLightbulb,
  FaBookOpen,
  FaChalkboardTeacher,
} from "react-icons/fa";

function Admin() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

        <p className="mt-2 text-gray-500">
          Manage users, business ideas, mentors, resources and platform
          activities.
        </p>
      </div>

      <StatCard
        title="Users"
        value="24"
        icon={<FaUsers className="text-white text-2xl" />}
        color="bg-blue-600"
      />

      <StatCard
        title="Business Ideas"
        value="12"
        icon={<FaLightbulb className="text-white text-2xl" />}
        color="bg-emerald-600"
      />

      <StatCard
        title="Resources"
        value="18"
        icon={<FaBookOpen className="text-white text-2xl" />}
        color="bg-purple-600"
      />

      <StatCard
        title="Mentors"
        value="8"
        icon={<FaChalkboardTeacher className="text-white text-2xl" />}
        color="bg-orange-500"
      />
    </DashboardLayout>
  );
}

export default Admin;
