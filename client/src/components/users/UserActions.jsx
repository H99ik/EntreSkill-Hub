import { FaEdit, FaTrash } from "react-icons/fa";

const UserActions = ({ user, onEdit, onDelete }) => {

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onEdit(user)}
        className="text-blue-600 hover:text-blue-800 transition"
        title="Edit User"
      >
        <FaEdit />
      </button>

      <button
        onClick={() => onDelete(user)}
        className="text-red-600 hover:text-red-800 transition"
        title="Delete User"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default UserActions;
