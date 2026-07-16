import { FaLightbulb, FaBookOpen, FaRocket } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaLightbulb />,
      title: "Discover Your Skills",
      description:
        "Identify your skills and interests to receive business ideas that match your strengths.",
    },
    {
      icon: <FaBookOpen />,
      title: "Learn & Build",
      description:
        "Access expert-curated resources, structured roadmaps, and mentorship to prepare for your entrepreneurial journey.",
    },
    {
      icon: <FaRocket />,
      title: "Launch Your Startup",
      description:
        "Turn your idea into reality by following your roadmap, tracking progress, and growing your business confidently.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            How EntreSkill Hub Works
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Our platform provides a simple step-by-step journey that helps
            aspiring entrepreneurs transform their skills into successful
            startups.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl text-blue-700">
                {step.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
