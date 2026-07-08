import { FaQuoteLeft } from "react-icons/fa";

function SuccessStories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
          Success Stories
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Hear from learners and entrepreneurs who transformed their skills into
          opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaQuoteLeft className="text-4xl text-blue-700 mb-5" />

            <p className="text-gray-600 mb-6">
              EntreSkill Hub helped me start freelancing and land my first
              clients.
            </p>

            <h3 className="font-bold text-xl">Rahul Sharma</h3>

            <p className="text-gray-500">Web Developer</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
            <FaQuoteLeft className="text-4xl text-blue-700 mb-5" />

            <p className="text-gray-600 mb-6">
              The roadmaps and mentorship gave me confidence to launch my own
              startup.
            </p>

            <h3 className="font-bold text-xl">Priya Patel</h3>

            <p className="text-gray-500">Entrepreneur</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
