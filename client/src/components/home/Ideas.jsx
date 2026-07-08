import {
  FaGlobe,
  FaLaptopCode,
  FaBullhorn,
  FaGraduationCap,
} from "react-icons/fa";

function Ideas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
          Startup Ideas
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Turn your skills into real business opportunities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaGlobe className="text-5xl text-blue-700 mb-5" />
            <h3 className="text-2xl font-bold mb-3">Freelancing Agency</h3>
            <p className="text-gray-600">
              Start your own digital service business.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaLaptopCode className="text-5xl text-blue-700 mb-5" />
            <h3 className="text-2xl font-bold mb-3">SaaS Product</h3>
            <p className="text-gray-600">
              Build software solutions for businesses.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaBullhorn className="text-5xl text-blue-700 mb-5" />
            <h3 className="text-2xl font-bold mb-3">Digital Marketing</h3>
            <p className="text-gray-600">
              Help brands grow online and reach customers.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaGraduationCap className="text-5xl text-blue-700 mb-5" />
            <h3 className="text-2xl font-bold mb-3">Online Courses</h3>
            <p className="text-gray-600">
              Share knowledge and create learning platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ideas;
