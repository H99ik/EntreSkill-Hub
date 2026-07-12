import UserActions from "./UserActions";

const UserTableRow = ({ user, onEdit, onDelete }) => {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-6 py-4 font-medium">{user.name}</td>

      <td className="px-6 py-4">{user.email}</td>

      <td className="px-6 py-4 capitalize">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {user.role}
        </span>
      </td>

      <td className="px-6 py-4">
        {user.isVerified ? (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Active
          </span>
        ) : (
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
            Pending
          </span>
        )}
      </td>

      <td className="px-6 py-4">
        <UserActions user={user} onEdit={onEdit} onDelete={onDelete} />
      </td>
    </tr>
  );
};

export default UserTableRow;
