import ResourceActions from "./ResourceActions";

function ResourceTableRow({ resource, onEdit, onDelete }) {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-6 py-4 font-medium">{resource.title}</td>

      <td className="px-6 py-4">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {resource.type}
        </span>
      </td>

      <td className="px-6 py-4">{resource.duration}</td>

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
