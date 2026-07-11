import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import SearchBar from "../components/common/SearchBar";

function ManageUsers() {
  // State
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // ==========================
  // API Functions
  // ==========================
  const fetchUsers = async () => {
    // Backend Later
  };

  // ==========================
  // Event Handlers
  // ==========================
  const handleEdit = (id) => {
    console.log("Edit:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete:", id);
  };

  // ==========================
  // useEffect
  // ==========================
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>

        <p className="mt-2 text-gray-500">
          View, search and manage all registered users.
        </p>
      </div>

      {/* Search */}
      <SearchBar
        placeholder="Search users..."
        value={search}
        onChange={setSearch}
      />

      {/* Users Table */}
    </DashboardLayout>
  );
}

export default ManageUsers;
