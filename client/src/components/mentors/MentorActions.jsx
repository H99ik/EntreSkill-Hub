import { FaEdit, FaTrash } from "react-icons/fa";

function MentorActions({ mentor, onEdit, onDelete }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onEdit(mentor)}
        className="text-blue-600 hover:text-blue-800"
      >
        <FaEdit />
      </button>

      <button
        onClick={() => onDelete(mentor)}
        className="text-red-600 hover:text-red-800"
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default MentorActions;
