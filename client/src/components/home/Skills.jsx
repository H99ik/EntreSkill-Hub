import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaPenNib,
  FaBriefcase,
} from "react-icons/fa";

function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
          Explore By Skills
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Discover opportunities based on your interests and talents.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition duration-300 text-center">
            <FaLaptopCode className="text-5xl text-blue-700 mx-auto mb-5" />
            <h3 className="text-xl font-bold">Programming</h3>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition duration-300 text-center">
            <FaPaintBrush className="text-5xl text-blue-700 mx-auto mb-5" />
            <h3 className="text-xl font-bold">Designing</h3>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition duration-300 text-center">
            <FaBullhorn className="text-5xl text-blue-700 mx-auto mb-5" />
            <h3 className="text-xl font-bold">Marketing</h3>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition duration-300 text-center">
            <FaPenNib className="text-5xl text-blue-700 mx-auto mb-5" />
            <h3 className="text-xl font-bold">Writing</h3>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition duration-300 text-center">
            <FaBriefcase className="text-5xl text-blue-700 mx-auto mb-5" />
            <h3 className="text-xl font-bold">Business</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
