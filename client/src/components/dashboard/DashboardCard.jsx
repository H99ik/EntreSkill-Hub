function DashboardCard({ title, action, children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 h-full ${className}`}
    >
      {(title || action) && (
        <div className="flex items-center justify-between mb-6">
          {title && (
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          )}

          {action && action}
        </div>
      )}

      {children}
    </div>
  );
}

export default DashboardCard;
