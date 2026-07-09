import { FaMedal, FaStar, FaTrophy, FaRocket } from "react-icons/fa";

const achievements = [
  {
    id: 1,
    title: "First Idea Created",
    icon: <FaRocket />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "5 Courses Completed",
    icon: <FaMedal />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Top Performer",
    icon: <FaStar />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 4,
    title: "Startup Ready",
    icon: <FaTrophy />,
    color: "bg-purple-100 text-purple-600",
  },
];

function Achievements() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Achievements & Badges
        </h2>

        <button className="text-blue-600 hover:underline font-medium">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {achievements.map((badge) => (
          <div
            key={badge.id}
            className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <div
              className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center text-2xl ${badge.color}`}
            >
              {badge.icon}
            </div>

            <h3 className="mt-3 font-semibold text-gray-800">{badge.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
