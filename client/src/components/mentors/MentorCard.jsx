import {
  FaUserTie,
  FaStar,
  FaBriefcase,
  FaCalendarCheck,
} from "react-icons/fa";

function MentorCard({ mentor }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <FaUserTie className="text-3xl text-blue-600" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800">{mentor.name}</h2>

            <p className="text-gray-500">{mentor.expertise}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <FaBriefcase className="text-purple-600" />
            {mentor.experience}
          </div>

          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            {mentor.rating}
          </div>

          <div className="flex items-center gap-2 text-green-600">
            <FaCalendarCheck />
            {mentor.sessions} Sessions Completed
          </div>
        </div>

        <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          Book Session
        </button>
      </div>
    </div>
  );
}

export default MentorCard;
