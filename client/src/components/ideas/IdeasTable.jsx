import IdeaTableRow from "./IdeaTableRow";

function IdeasTable({ ideas, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left">Title</th>
            <th className="px-6 py-4 text-left">Category</th>
            <th className="px-6 py-4 text-left">Level</th>
            <th className="px-6 py-4 text-left">Investment</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {ideas.length > 0 ? (
            ideas.map((idea) => (
              <IdeaTableRow
                key={idea._id}
                idea={idea}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-10 text-center text-gray-500">
                No business ideas found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default IdeasTable;
