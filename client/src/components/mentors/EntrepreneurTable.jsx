import { useMemo } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function EntrepreneurTable({ users, search }) {
  const navigate = useNavigate();

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Role</th>
            <th className="px-6 py-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr
                key={user._id}
                className="border-b last:border-none hover:bg-slate-50"
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {user.name}
                </td>

                <td className="px-6 py-4 text-gray-600">{user.email}</td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => navigate(`/roadmap/${user._id}`)}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                  >
                    <FaEye />
                    View Roadmap
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-10 text-center text-gray-500">
                No entrepreneurs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EntrepreneurTable;
