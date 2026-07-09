import { FaArrowRight, FaMoneyBillWave, FaLayerGroup } from "react-icons/fa";

function IdeaCard({ idea }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Top Section */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
            {idea.category}
          </span>

          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
            {idea.level}
          </span>
        </div>

        <h2 className="mt-4 text-xl font-bold text-gray-800">{idea.title}</h2>

        <p className="mt-3 text-gray-500 text-sm leading-relaxed">
          {idea.description}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <FaMoneyBillWave className="text-green-600" />
            {idea.investment}
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaLayerGroup className="text-blue-600" />
            {idea.skill}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 px-6 py-4 flex justify-end">
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition">
          View Roadmap
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default IdeaCard;
