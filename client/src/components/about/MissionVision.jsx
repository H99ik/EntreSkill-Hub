import { FaBullseye, FaEye } from "react-icons/fa";

function MissionVision() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Our Mission & Vision
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            We are committed to empowering aspiring entrepreneurs by providing
            practical guidance, structured learning, and expert mentorship to
            transform skills into successful businesses.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission */}

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
              <FaBullseye className="text-3xl text-blue-700" />
            </div>

            <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>

            <p className="mt-5 leading-8 text-slate-600">
              To help individuals discover business opportunities based on their
              skills by providing learning resources, mentorship, business
              roadmaps, and practical guidance that encourage self-employment
              and sustainable entrepreneurship.
            </p>
          </div>

          {/* Vision */}

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
              <FaEye className="text-3xl text-emerald-700" />
            </div>

            <h3 className="text-2xl font-bold text-slate-800">Our Vision</h3>

            <p className="mt-5 leading-8 text-slate-600">
              To become a trusted digital platform where innovators,
              entrepreneurs, and mentors collaborate to build successful
              startups, strengthen local businesses, and create sustainable
              employment opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
