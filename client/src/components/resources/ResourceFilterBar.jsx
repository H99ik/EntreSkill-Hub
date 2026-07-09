function ResourceFilterBar({ type, setType }) {
  return (
    <div className="mt-6">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full md:w-64 rounded-xl border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Resources</option>
        <option value="Course">Course</option>
        <option value="Video">Video</option>
        <option value="PDF">PDF</option>
      </select>
    </div>
  );
}

export default ResourceFilterBar;