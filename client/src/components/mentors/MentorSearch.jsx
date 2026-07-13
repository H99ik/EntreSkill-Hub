import { FaSearch } from "react-icons/fa";

function MentorSearch({ search, setSearch }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search mentors by name or expertise..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default MentorSearch;
