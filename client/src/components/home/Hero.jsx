function Hero() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <h1 className="text-5xl md:text-7xl font-bold text-blue-700 leading-tight">
            Transform Skills Into Startups
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover business ideas, mentorship, learning resources,
            and roadmaps that help turn your skills into successful ventures.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <button className="bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition">
              Get Started
            </button>

            <button className="border border-blue-700 text-blue-700 px-8 py-4 rounded-xl hover:bg-blue-50 transition">
              Explore Resources
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
            alt="Entrepreneurship"
            className="rounded-3xl shadow-xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;