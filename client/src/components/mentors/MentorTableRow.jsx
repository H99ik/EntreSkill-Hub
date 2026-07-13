import MentorActions from "./MentorActions";

function MentorTableRow({ mentor, onEdit, onDelete }) {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-6 py-4 font-medium">{mentor.name}</td>

      <td className="px-6 py-4">{mentor.expertise}</td>

      <td className="px-6 py-4">{mentor.experience}</td>

      <td className="px-6 py-4">⭐ {mentor.rating}</td>

      <td className="px-6 py-4">
        {mentor.isActive ? (
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
        <MentorActions mentor={mentor} onEdit={onEdit} onDelete={onDelete} />
      </td>
    </tr>
  );
}

export default MentorTableRow;
