import { Link } from "react-router-dom";

function StartLearning() {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-blue-800 to-cyan-700 py-20 text-center text-white">
      <h2 className="text-4xl font-bold">Ready to Learn?</h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
        Join EntreSkill Hub today and unlock access to curated learning
        resources, mentorship, and business roadmaps.
      </p>

      <Link
        to="/register"
        className="mt-10 inline-block rounded-xl bg-emerald-500 px-8 py-3 font-semibold hover:bg-emerald-600"
      >
        Register Now
      </Link>
    </section>
  );
}

export default StartLearning;
