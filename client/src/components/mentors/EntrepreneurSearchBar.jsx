import { FaSearch } from "react-icons/fa";

function EntrepreneurSearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search entrepreneurs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default EntrepreneurSearchBar;
