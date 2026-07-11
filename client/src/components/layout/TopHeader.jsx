import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import NotificationDropdown from "./NotificationDropdown";

function TopHeader() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};

  return (
    <header className="mb-8 flex items-center justify-between rounded-2xl bg-white p-5 shadow-md">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
        />
      </div>

      {/* Right Side */}
      <div className="ml-6 flex items-center gap-5">
        {/* Notification */}
        <button className="relative rounded-xl p-3 transition hover:bg-slate-100">
          <NotificationDropdown />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
}

export default TopHeader;
