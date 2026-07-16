import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

function RoadmapStep({ step }) {
  return (
    <div className="flex h-52 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-x1 font-semibold text-gray-800">{step.title}</h3>

          <p className="mt-2 text-gray-600">{step.description}</p>

          <div className="mt-4">
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                step.completed
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {step.completed ? "Completed" : "In Progress"}
            </span>
          </div>
        </div>

        <div className="ml-4">
          {step.completed ? (
            <FaCheckCircle className="text-3xl text-green-500" />
          ) : (
            <FaRegCircle className="text-3xl text-gray-400" />
          )}
        </div>
      </div>
    </div>
  );
}

export default RoadmapStep;
