import { FaVideo, FaFilePdf, FaGraduationCap, FaGlobe } from "react-icons/fa";

const resources = [
  {
    icon: <FaGraduationCap />,
    title: "Online Courses",
    text: "Learn startup fundamentals with structured courses.",
  },
  {
    icon: <FaVideo />,
    title: "Video Tutorials",
    text: "Watch practical business and technical tutorials.",
  },
  {
    icon: <FaFilePdf />,
    title: "PDF Guides",
    text: "Download startup templates, notes, and business guides.",
  },
  {
    icon: <FaGlobe />,
    title: "Official Resources",
    text: "Explore trusted government and industry learning portals.",
  },
];

function FeaturedResources() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Featured Resources</h2>

          <p className="mt-4 text-gray-600">
            Everything you need to start your entrepreneurial journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-700">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-4 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedResources;
