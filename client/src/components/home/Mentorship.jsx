import { FaUserTie, FaChalkboardTeacher, FaRocket } from "react-icons/fa";

function Mentorship() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
          Expert Mentorship
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Learn from industry professionals and startup founders.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaUserTie className="text-5xl text-blue-700 mb-5" />

            <h3 className="text-2xl font-bold mb-3">Industry Experts</h3>

            <p className="text-gray-600">
              Gain insights from professionals with real-world experience.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaChalkboardTeacher className="text-5xl text-blue-700 mb-5" />

            <h3 className="text-2xl font-bold mb-3">Career Guidance</h3>

            <p className="text-gray-600">
              Receive guidance to grow your skills and career path.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaRocket className="text-5xl text-blue-700 mb-5" />

            <h3 className="text-2xl font-bold mb-3">Startup Founders</h3>

            <p className="text-gray-600">
              Connect with entrepreneurs who have built successful ventures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mentorship;
