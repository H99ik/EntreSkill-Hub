import { FaEdit, FaTrash } from "react-icons/fa";

function IdeaActions({ idea, onEdit, onDelete }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onEdit(idea)}
        className="text-blue-600 transition hover:text-blue-800"
        title="Edit Business Idea"
      >
        <FaEdit />
      </button>

      <button
        onClick={() => onDelete(idea)}
        className="text-red-600 transition hover:text-red-800"
        title="Delete Business Idea"
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default IdeaActions;
