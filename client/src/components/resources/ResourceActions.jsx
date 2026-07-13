import { FaEdit, FaTrash } from "react-icons/fa";

function ResourceActions({ resource, onEdit, onDelete }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onEdit(resource)}
        className="text-blue-600 hover:text-blue-800 transition"
        title="Edit Resource"
      >
        <FaEdit />
      </button>

      <button
        onClick={() => onDelete(resource)}
        className="text-red-600 hover:text-red-800 transition"
        title="Delete Resource"
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default ResourceActions;
