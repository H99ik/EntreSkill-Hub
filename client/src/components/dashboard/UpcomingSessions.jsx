import { FaVideo, FaUserTie, FaCalendarAlt, FaArrowRight, } from "react-icons/fa";

const sessions = [
  {
    id: 1,
    mentor: "Ravi Sharma",
    topic: "Startup Validation",
    date: "15 July 2026",
    time: "10:00 AM",
  },
  {
    id: 2,
    mentor: "Priya Patel",
    topic: "Marketing Strategy",
    date: "18 July 2026",
    time: "2:30 PM",
  },
  {
    id: 3,
    mentor: "Amit Verma",
    topic: "Business Finance",
    date: "20 July 2026",
    time: "11:30 AM",
  },
];

function UpcomingSessions() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Upcoming Mentor Sessions
        </h2>

        <button className="text-blue-600 font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="border border-gray-100 rounded-xl p-4 hover:bg-slate-50 transition"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <FaUserTie />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {session.mentor}
                  </h3>

                  <p className="text-sm text-gray-500">{session.topic}</p>

                  <div className="flex gap-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {session.date}
                    </span>

                    <span className="flex items-center gap-1">
                      <FaVideo />
                      {session.time}
                    </span>
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                Join
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingSessions;
