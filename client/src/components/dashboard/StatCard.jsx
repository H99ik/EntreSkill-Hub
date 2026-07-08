import React from "react";

function StatCard({ title, value, icon, color }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}

export default StatCard;