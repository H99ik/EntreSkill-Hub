import { FaLaptopCode, FaPaintBrush, FaSeedling, FaArrowRight, } from "react-icons/fa";

const ideas = [
  {
    id: 1,
    title: "Freelance Web Development",
    category: "Technology",
    investment: "₹10,000",
    level: "Beginner",
    icon: <FaLaptopCode />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Graphic Design Studio",
    category: "Creative",
    investment: "₹5,000",
    level: "Beginner",
    icon: <FaPaintBrush />,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 3,
    title: "Organic Farming Consultancy",
    category: "Agriculture",
    investment: "₹20,000",
    level: "Intermediate",
    icon: <FaSeedling />,
    color: "bg-green-100 text-green-600",
  },
];

function RecommendedIdeas() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Recommended Business Ideas
        </h2>

        <button className="text-blue-600 font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-slate-50 transition"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${idea.color}`}
              >
                {idea.icon}
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">{idea.title}</h3>

                <p className="text-sm text-gray-500">{idea.category}</p>

                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {idea.level}
                  </span>

                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {idea.investment}
                  </span>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800">
              View
              <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedIdeas;
