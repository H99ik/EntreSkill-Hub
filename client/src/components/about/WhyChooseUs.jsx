import {
  FaRoute,
  FaUserFriends,
  FaBookReader,
  FaChartLine,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaRoute />,
      title: "Personalized Roadmaps",
      description:
        "Receive structured business roadmaps tailored to your skills, interests, and entrepreneurial goals.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <FaUserFriends />,
      title: "Expert Mentorship",
      description:
        "Connect with experienced mentors who provide practical guidance and help you overcome business challenges.",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: <FaBookReader />,
      title: "Learning Resources",
      description:
        "Access high-quality courses, videos, PDFs, and startup resources to continuously improve your knowledge.",
      color: "bg-orange-100 text-orange-700",
    },
    {
      icon: <FaChartLine />,
      title: "Track Your Progress",
      description:
        "Monitor every stage of your entrepreneurial journey and celebrate your achievements with measurable progress.",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Why Choose EntreSkill Hub?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Everything you need to transform your skills into a successful
            business—all in one platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-800">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
