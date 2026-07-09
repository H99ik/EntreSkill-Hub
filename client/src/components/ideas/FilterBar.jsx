function FilterBar({
  category,
  setCategory,
  level,
  setLevel,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">All Categories</option>
        <option>Technology</option>
        <option>Agriculture</option>
        <option>Creative</option>
        <option>Education</option>
      </select>

      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

    </div>
  );
}

export default FilterBar;