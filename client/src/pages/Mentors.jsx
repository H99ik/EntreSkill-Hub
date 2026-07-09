import DashboardLayout from "../components/layout/DashboardLayout";
import MentorCard from "../components/mentors/MentorCard";

function Mentors() {
  const mentors = [
    {
      id: 1,
      name: "Ravi Sharma",
      expertise: "Startup Strategy",
      experience: "15 Years Experience",
      rating: "4.9",
      sessions: 120,
    },
    {
      id: 2,
      name: "Priya Patel",
      expertise: "Digital Marketing",
      experience: "10 Years Experience",
      rating: "4.8",
      sessions: 95,
    },
    {
      id: 3,
      name: "Amit Verma",
      expertise: "Business Finance",
      experience: "12 Years Experience",
      rating: "4.7",
      sessions: 110,
    },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Mentors</h1>

        <p className="text-gray-500 mt-2">
          Connect with experienced mentors and accelerate your entrepreneurial
          journey.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </DashboardLayout>
  );
}

export default Mentors;
