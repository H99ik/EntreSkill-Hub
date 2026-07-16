import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";

function MentorHero() {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
          <FaUserTie className="text-5xl text-yellow-300" />
        </div>

        <h1 className="text-5xl font-extrabold">Meet Our Expert Mentors</h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          Learn from experienced entrepreneurs and industry experts who guide
          you through every step of your startup journey.
        </p>

        <Link
          to="/register"
          className="mt-10 inline-block rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-white hover:bg-emerald-600"
        >
          Become a Mentor
        </Link>
      </div>
    </section>
  );
}

export default MentorHero;
