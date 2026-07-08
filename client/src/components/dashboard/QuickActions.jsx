import { FaRocket, FaBookOpen, FaUserFriends, FaLightbulb } from "react-icons/fa";

function QuickActions() {
  const actions = [
    "Explore Ideas",
    "Learning Center",
    "Find Mentor",
    "My Roadmap",
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {actions.map((action) => (
          <button
            key={action}
            className="rounded-xl border border-slate-200 p-4 text-left transition hover:border-blue-600 hover:bg-blue-50"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;