import { FaRocket, FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";

const data = [
  {
    icon: <FaRocket />,
    title: "Startup Guidance",
    text: "Receive practical advice from experienced entrepreneurs.",
  },
  {
    icon: <FaUsers />,
    title: "Networking",
    text: "Connect with professionals and like-minded innovators.",
  },
  {
    icon: <FaLightbulb />,
    title: "Business Ideas",
    text: "Validate and improve your startup ideas.",
  },
  {
    icon: <FaHandshake />,
    title: "Continuous Support",
    text: "Stay connected with mentors throughout your journey.",
  },
];

function WhyMentors() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Why Learn From Mentors?</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-slate-50 p-8 text-center shadow hover:shadow-xl transition"
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

export default WhyMentors;
