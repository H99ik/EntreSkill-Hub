const categories = [
  "Frontend Development",
  "Backend Development",
  "Digital Marketing",
  "Business Planning",
  "Finance",
  "Startup Strategy",
  "Leadership",
  "Communication",
];

function ResourceCategories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Learning Categories</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-100 px-6 py-3 font-medium text-blue-700"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourceCategories;
