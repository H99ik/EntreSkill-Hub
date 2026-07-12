import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import SerchBar from "../components/ideas/SearchBar"
import UsersTable from "../components/users/UsersTable";
import { getAllUsers, deleteUser } from "../services/userService";
import toast from "react-hot-toast";

function ManageUsers() {
  // State
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    fetchUsers();
  }, []);

  // API Functions
  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data);
    } catch (err) {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  // Event Handlers
  const handleEdit = (user) => {
    console.log("Edit:", user);
  };

  const handleDelete = async (user) => {
    if (!window.confirm(`Delete ${user.name}?`)) return;

    try {
      await deleteUser(user._id);

      toast.success("User deleted");

      setUsers((prev) => prev.filter((u) => u._id !== user._id));
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) return <p className="text-center py-10">Loading users...</p>;

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
        onChange={(e)=> setSearchTerm(e.target.value)}
      />

      {/* Users Table */}
      <UsersTable
        users={filteredUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </DashboardLayout>
  );
}

export default ManageUsers;
