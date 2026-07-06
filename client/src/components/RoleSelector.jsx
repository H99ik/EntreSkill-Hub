import { FaRocket, FaUserGraduate, FaCheckCircle } from "react-icons/fa";

function RoleSelector({ role, setRole }) {
  const roles = [
    {
      value: "entrepreneur",
      title: "Entrepreneur",
      description: "Build your startup",
      icon: FaRocket,
    },
    {
      value: "mentor",
      title: "Mentor",
      description: "Guide entrepreneurs",
      icon: FaUserGraduate,
    },
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">
        Choose Your Journey
      </label>

      <div className="grid grid-cols-2 gap-4">
        {roles.map((item) => {
          const Icon = item.icon;
          const selected = role === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setRole(item.value)}
              className={`relative rounded-2xl border-2 min-h-[120px] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg 
                ${
                  selected
                    ? "border-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-105"
                    : "border-gray-200 bg-white hover:border-blue-400"
                }
              `}
            >
              {selected && (
                <FaCheckCircle className="absolute top-3 right-3 text-white" />
              )}

              <Icon
                size={28}
                className={selected ? "text-white" : "text-blue-600"}
              />

              <h3 className="mt-3 font-bold text-lg">{item.title}</h3>

              <p
                className={`text-sm mt-1 ${
                  selected ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default RoleSelector;
