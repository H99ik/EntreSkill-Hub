function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* home page content goes here  hero section */}

      <section className="flex flex-col justify-center items-center main-bg h-screen px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-700">
          Transform Skill into Startups
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
          Discover business idias, roadmaps, and resources and mentorshipe to
          turn your skills into successful ventures.
        </p>

        <div className="mt-8 flex gap-4">
          <button className=" bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition">
            Explore Ideas
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
