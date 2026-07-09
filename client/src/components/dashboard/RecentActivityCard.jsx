import DashboardCard from "./DashboardCard";

import {
  FaLightbulb,
  FaBookOpen,
  FaUserFriends,
  FaCheckCircle,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "New Business Idea Generated",
    description: "AI Based Grocery Delivery",
    time: "5 min ago",
    icon: <FaLightbulb />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Resource Completed",
    description: "Business Planning Fundamentals",
    time: "30 min ago",
    icon: <FaBookOpen />,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 3,
    title: "Mentor Session Booked",
    description: "Startup Strategy Discussion",
    time: "2 hours ago",
    icon: <FaUserFriends />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Roadmap Milestone Completed",
    description: "Market Research",
    time: "Today",
    icon: <FaCheckCircle />,
    color: "bg-orange-100 text-orange-600",
  },
];

function RecentActivityCard() {
  return (
  <DashboardCard
    title="Recent Activity"
    action={
      <button className="text-blue-600 font-medium hover:underline">
        View All
      </button>
    }
  >
    <div className="space-y-5">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-start gap-4 border-b last:border-none pb-4"
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${activity.color}`}
          >
            {activity.icon}
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">
              {activity.title}
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              {activity.description}
            </p>
          </div>

          <span className="text-xs text-gray-400 whitespace-nowrap">
            {activity.time}
          </span>
        </div>
      ))}
    </div>
  </DashboardCard>
);
}

export default RecentActivityCard;
