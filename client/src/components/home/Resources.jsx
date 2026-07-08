import { FaReact, FaRobot, FaPalette, FaBriefcase } from "react-icons/fa";

function Resources() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
          Learning Resources
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Follow curated roadmaps and guides to build your future.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaReact className="text-5xl text-blue-700 mb-5" />

            <h3 className="text-2xl font-bold mb-3">MERN Roadmap</h3>

            <p className="text-gray-600">
              Learn React, Node.js, Express and MongoDB.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaRobot className="text-5xl text-blue-700 mb-5" />

            <h3 className="text-2xl font-bold mb-3">AI Roadmap</h3>

            <p className="text-gray-600">
              Explore machine learning and AI opportunities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaPalette className="text-5xl text-blue-700 mb-5" />

            <h3 className="text-2xl font-bold mb-3">UI/UX Guide</h3>

            <p className="text-gray-600">
              Master modern design principles and tools.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaBriefcase className="text-5xl text-blue-700 mb-5" />

            <h3 className="text-2xl font-bold mb-3">Entrepreneurship</h3>

            <p className="text-gray-600">
              Learn how to build and scale businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
