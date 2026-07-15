import { FaChartLine } from "react-icons/fa";

function ProgressCard({
  progress = 62,
  completedSteps = 3,
  totalSteps = 5,
  title = "Learning Progress",
  description = "You're making great progress toward building your startup.",
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>

          <p className="mt-2 text-gray-500">{description}</p>
        </div>

        <div className="rounded-full bg-blue-100 p-4">
          <FaChartLine className="text-3xl text-blue-600" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm text-gray-600">
          <span>Roadmap Completion</span>
          <span>{progress}%</span>
        </div>

        <div className="h-3 w-full rounded-full bg-slate-200">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-xl bg-slate-50 p-4 text-center">
          <h3 className="text-2xl font-bold text-blue-600">{completedSteps}</h3>

          <p className="mt-1 text-sm text-gray-500">Completed</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4 text-center">
          <h3 className="text-2xl font-bold text-emerald-600">{totalSteps}</h3>

          <p className="mt-1 text-sm text-gray-500">Total Steps</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4 text-center">
          <h3 className="text-2xl font-bold text-orange-500">
            {totalSteps - completedSteps}
          </h3>

          <p className="mt-1 text-sm text-gray-500">Pending</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
