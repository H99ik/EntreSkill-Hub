import DashboardLayout from "../components/layout/DashboardLayout";
import AdminStatCard from "../components/admin/AdminStatCard";

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

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard title="Users" value="24" color="bg-blue-600" />

        <AdminStatCard
          title="Business Ideas"
          value="12"
          color="bg-emerald-600"
        />

        <AdminStatCard title="Resources" value="18" color="bg-purple-600" />

        <AdminStatCard title="Mentors" value="8" color="bg-orange-500" />
      </div>
    </DashboardLayout>
  );
}

export default Admin;
