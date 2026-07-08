import { FaRobot, FaCode, FaShieldAlt, FaVideo } from "react-icons/fa";

function Trending() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
          Trending Opportunities
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore the most in-demand skills and industries shaping the future.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AI */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition duration-300">
            <FaRobot className="text-5xl text-blue-700 mb-6" />

            <h3 className="text-2xl font-bold mb-3">Artificial Intelligence</h3>

            <p className="text-gray-600">
              Build AI solutions and explore machine learning opportunities.
            </p>
          </div>

          {/* Web Development */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition duration-300">
            <FaCode className="text-5xl text-blue-700 mb-6" />

            <h3 className="text-2xl font-bold mb-3">Web Development</h3>

            <p className="text-gray-600">
              Create websites, applications and digital businesses.
            </p>
          </div>

          {/* Cyber Security */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition duration-300">
            <FaShieldAlt className="text-5xl text-blue-700 mb-6" />

            <h3 className="text-2xl font-bold mb-3">Cyber Security</h3>

            <p className="text-gray-600">
              Protect digital assets and develop security solutions.
            </p>
          </div>

          {/* Content Creation */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition duration-300">
            <FaVideo className="text-5xl text-blue-700 mb-6" />

            <h3 className="text-2xl font-bold mb-3">Content Creation</h3>

            <p className="text-gray-600">
              Build personal brands and grow through digital media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
