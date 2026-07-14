import DashboardCard from "./DashboardCard";

function RecentActivityCard({ activities }) {
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
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 border-b pb-4 last:border-none"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${activity.color}`}
              >
                {activity.icon}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {activity.description}
                </p>
              </div>

              <span className="whitespace-nowrap text-xs text-gray-400">
                {activity.time}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No recent activity.</p>
        )}
      </div>
    </DashboardCard>
  );
}

export default RecentActivityCard;
