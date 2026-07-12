import UserTableRow from "./UserTableRow";

const UsersTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-xl shadow bg-white">
      <table className="min-w-full">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Role</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <UserTableRow
                key={user._id}
                user={user}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-10 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
