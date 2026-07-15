import { useEffect, useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";
import EntrepreneurSearchBar from "../components/mentors/EntrepreneurSearchBar";
import EntrepreneurTable from "../components/mentors/EntrepreneurTable";

import { getAllUsers } from "../services/userService";

function MyEntrepreneurs() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEntrepreneurs();
  }, []);

  const fetchEntrepreneurs = async () => {
    try {
      const response = await getAllUsers();

      const entrepreneurs = response.data.filter(
        (user) => user.role === "entrepreneur",
      );

      setUsers(entrepreneurs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Entrepreneurs</h1>

        <p className="mt-2 text-gray-500">
          View and guide entrepreneurs on their startup journey.
        </p>
      </div>

      <EntrepreneurSearchBar searchTerm={search} setSearchTerm={setSearch} />

      <div className="mt-8">
        <EntrepreneurTable users={users} search={search} />
      </div>
    </DashboardLayout>
  );
}

export default MyEntrepreneurs;
