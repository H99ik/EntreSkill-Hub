import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";

function AboutHero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-cyan-700 py-24 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <div className="mb-6 rounded-full bg-white/10 p-5 backdrop-blur-sm">
          <FaRocket className="text-5xl text-yellow-300" />
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight">
          About <span className="text-cyan-300">EntreSkill Hub</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          EntreSkill Hub is a Skill-to-Startup Enablement Platform designed to
          help aspiring entrepreneurs transform their skills into sustainable
          businesses through business ideas, expert mentorship, structured
          roadmaps, and learning resources.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link
            to="/register"
            className="rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="rounded-xl border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-blue-900"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
