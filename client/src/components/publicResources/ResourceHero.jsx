import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

function ResourceHero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-cyan-700 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
          <FaBookOpen className="text-5xl text-yellow-300" />
        </div>

        <h1 className="text-5xl font-extrabold">Learning Resources</h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          Explore high-quality learning materials, startup guides, videos, PDFs,
          and courses designed to help you build a successful business.
        </p>

        <Link
          to="/register"
          className="mt-10 inline-block rounded-xl bg-emerald-500 px-8 py-3 font-semibold hover:bg-emerald-600"
        >
          Start Learning
        </Link>
      </div>
    </section>
  );
}

export default ResourceHero;
