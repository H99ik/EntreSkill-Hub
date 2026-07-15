import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

function RoadmapStep({ step }) {
  return (
    <div className="flex items-start gap-4 border-l-2 border-gray-200 pl-6 pb-8 last:pb-0">
      <div className="-ml-10 mt-1 rounded-full bg-white">
        {step.completed ? (
          <FaCheckCircle className="text-2xl text-green-500" />
        ) : (
          <FaRegCircle className="text-2xl text-gray-400" />
        )}
      </div>

      <div className="flex-1 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>

        <p className="mt-2 text-gray-500">{step.description}</p>

        <div className="mt-4">
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              step.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {step.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RoadmapStep;
