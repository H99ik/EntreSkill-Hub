import MentorTableRow from "./MentorTableRow";

function MentorsTable({ mentors, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Expertise</th>
            <th className="px-6 py-4 text-left">Experience</th>
            <th className="px-6 py-4 text-left">Rating</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {mentors.length > 0 ? (
            mentors.map((mentor) => (
              <MentorTableRow
                key={mentor._id}
                mentor={mentor}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-10 text-center text-gray-500">
                No mentors found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MentorsTable;
