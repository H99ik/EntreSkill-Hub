import { FaCalendarAlt, FaUserTag } from "react-icons/fa";

function AccountCard({
  user = {
    role: "Entrepreneur",
    createdAt: "July 2026",
  },
}) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Account Information
      </h2>

      <div className="space-y-6">
        {/* Member Since */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
              <FaCalendarAlt />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Member Since</h3>

              <p className="text-gray-500 text-sm">{user.createdAt}</p>
            </div>
          </div>
        </div>

        {/* Role */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 text-green-600 p-3 rounded-xl">
              <FaUserTag />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Current Role</h3>

              <p className="text-gray-500 capitalize text-sm">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Account Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
              🟢
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Account Status</h3>

              <p className="text-gray-500 text-sm">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;
