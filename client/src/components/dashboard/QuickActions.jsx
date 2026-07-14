import { useNavigate } from "react-router-dom";

function QuickActions({ actions }) {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-xl font-bold">Quick Actions</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() => navigate(action.path)}
            className="group rounded-2xl bg-white border border-gray-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-blue-100 transition">
                  {action.icon}
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">
                    {action.title}
                  </h3>

                  <p className="text-sm text-gray-500">Open module</p>
                </div>
              </div>

              <span className="text-xl text-gray-400 group-hover:text-blue-600">
                →
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;
