import ResourceActions from "./ResourceActions";
import { FaBookOpen, FaVideo, FaFilePdf } from "react-icons/fa";

function ResourceTableRow({ resource, onEdit, onDelete }) {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-6 py-4 font-medium">{resource.title}</td>

      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium
      ${
        resource.type === "Course"
          ? "bg-green-100 text-green-700"
          : resource.type === "Video"
            ? "bg-red-100 text-red-700"
            : "bg-orange-100 text-orange-700"
      }`}
        >
          {resource.type === "Course" && <FaBookOpen />}
          {resource.type === "Video" && <FaVideo />}
          {resource.type === "PDF" && <FaFilePdf />}

          {resource.type}
        </span>
      </td>

      <td className="px-6 py-4 text-gray-600">
        {resource.type === "PDF" ? (
          <span className="text-gray-400">—</span>
        ) : (
          resource.duration
        )}
      </td>

      <td className="px-6 py-4">{resource.category}</td>

      <td className="px-6 py-4">
        {resource.isActive ? (
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            Active
          </span>
        ) : (
          <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
            Inactive
          </span>
        )}
      </td>

      <td className="px-6 py-4">
        <ResourceActions
          resource={resource}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
}

export default ResourceTableRow;
