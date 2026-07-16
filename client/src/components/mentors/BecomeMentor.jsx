import { Link } from "react-router-dom";

function BecomeMentor() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-cyan-700 py-20 text-center text-white">
      <h2 className="text-4xl font-bold">Share Your Experience</h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
        Inspire aspiring entrepreneurs by becoming a mentor and helping them
        build successful startups.
      </p>

      <Link
        to="/register"
        className="mt-10 inline-block rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-white hover:bg-emerald-600"
      >
        Join as Mentor
      </Link>
    </section>
  );
}

export default BecomeMentor;
