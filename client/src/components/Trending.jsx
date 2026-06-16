function Trending() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Trending Opportunities
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            AI
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            Web Development
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            Cyber Security
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            Content Creation
          </div>

        </div>

      </div>

    </section>
  );
}

export default Trending;