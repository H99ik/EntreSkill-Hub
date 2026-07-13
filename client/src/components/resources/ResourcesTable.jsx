import ResourceTableRow from "./ResourceTableRow";

function ResourcesTable({ resources, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left">Title</th>
            <th className="px-6 py-4 text-left">Type</th>
            <th className="px-6 py-4 text-left">Duration</th>
            <th className="px-6 py-4 text-left">Category</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {resources.length > 0 ? (
            resources.map((resource) => (
              <ResourceTableRow
                key={resource._id}
                resource={resource}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-10 text-center text-gray-500">
                No resources found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ResourcesTable;
