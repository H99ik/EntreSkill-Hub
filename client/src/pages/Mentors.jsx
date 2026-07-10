import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import MentorCard from "../components/mentors/MentorCard";
import { getMentors } from "../services/mentorService";

function Mentors() {
  // State to hold the fetched mentors
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const response = await getMentors();
      setMentors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Mentors</h1>

        <p className="text-gray-500 mt-2">
          Connect with experienced mentors and accelerate your entrepreneurial
          journey.
        </p>
      </div>

      {mentors.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <MentorCard key={mentor._id} mentor={mentor} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            No Mentors Available
          </h2>

          <p className="mt-2 text-gray-500">
            New mentors will appear here once they are added.
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}

export default Mentors;
