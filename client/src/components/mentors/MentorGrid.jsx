import { FaUserTie, FaBriefcase, FaStar } from "react-icons/fa";

const mentors = [
  {
    name: "Rohit Sharma",
    role: "Startup Mentor",
    experience: "8+ Years",
    expertise: "Business Strategy",
  },
  {
    name: "Priya Patel",
    role: "Marketing Mentor",
    experience: "6+ Years",
    expertise: "Digital Marketing",
  },
  {
    name: "Arjun Mehta",
    role: "Finance Mentor",
    experience: "10+ Years",
    expertise: "Business Finance",
  },
  {
    name: "Neha Shah",
    role: "Technology Mentor",
    experience: "7+ Years",
    expertise: "MERN Stack",
  },
];

function MentorGrid() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Our Mentors</h2>

          <p className="mt-4 text-gray-600">
            Learn from experienced professionals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <FaUserTie className="text-4xl text-blue-700" />
              </div>

              <h3 className="mt-5 text-2xl font-bold">{mentor.name}</h3>

              <p className="mt-2 text-blue-600">{mentor.role}</p>

              <div className="mt-5 space-y-3 text-left">
                <p className="flex items-center gap-2">
                  <FaBriefcase />
                  {mentor.experience}
                </p>

                <p className="flex items-center gap-2">
                  <FaStar />
                  {mentor.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MentorGrid;
