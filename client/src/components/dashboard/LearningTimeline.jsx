import { FaCheckCircle, FaPlayCircle, FaClock, } from "react-icons/fa";

const timeline = [
  {
    id: 1,
    title: "Business Basics",
    status: "Completed",
    icon: <FaCheckCircle />,
    color: "text-green-600",
  },
  {
    id: 2,
    title: "Market Research",
    status: "Completed",
    icon: <FaCheckCircle />,
    color: "text-green-600",
  },
  {
    id: 3,
    title: "Business Model Canvas",
    status: "In Progress",
    icon: <FaPlayCircle />,
    color: "text-blue-600",
  },
  {
    id: 4,
    title: "Launch Strategy",
    status: "Upcoming",
    icon: <FaClock />,
    color: "text-orange-500",
  },
];

function LearningTimeline() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Learning Timeline
        </h2>

        <button className="text-blue-600 font-medium hover:underline">
          View Roadmap
        </button>
      </div>

      <div className="space-y-6">
        {timeline.map((step, index) => (
          <div key={step.id} className="flex gap-4 relative">
            {index !== timeline.length - 1 && (
              <div className="absolute left-4 top-10 w-0.5 h-10 bg-gray-200"></div>
            )}

            <div
              className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ${step.color}`}
            >
              {step.icon}
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="text-sm text-gray-500">
                {step.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningTimeline;