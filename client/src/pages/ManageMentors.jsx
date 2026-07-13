import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import MentorSearch from "../components/mentors/MentorSearch";
import MentorsTable from "../components/mentors/MentorsTable";
import EditMentorModal from "../components/mentors/EditMentorModal";
import { getMentors, deleteMentor } from "../services/mentorService";
import toast from "react-hot-toast";

function ManageMentors() {
  // State
  const [mentors, setMentors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [selectedMentor, setSelectedMentor] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // useEffect
  useEffect(() => {
    fetchMentors();
  }, []);

  // Fetch Mentors
  const fetchMentors = async () => {
    try {
      const res = await getMentors();

      setMentors(res.data);
    } catch (err) {
      toast.error("Failed to fetch mentors");
    } finally {
      setLoading(false);
    }
  };

  // Edit Mentor
  const handleEdit = (mentor) => {
    setSelectedMentor(mentor);
    setIsEditOpen(true);
  };

  // Delete Mentor
  const handleDelete = async (mentor) => {
    if (!window.confirm(`Delete ${mentor.name}?`)) return;

    try {
      await deleteMentor(mentor._id);

      toast.success("Mentor deleted");

      fetchMentors();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  // Search
  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(search.toLowerCase()) ||
      mentor.expertise.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) return <p className="text-center py-10">Loading mentors...</p>;

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Mentors</h1>

        <p className="mt-2 text-gray-500">
          View, search and manage all mentors.
        </p>
      </div>

      <MentorSearch search={search} setSearch={setSearch} />

      <div className="mt-6">
        <MentorsTable
          mentors={filteredMentors}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <EditMentorModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        mentor={selectedMentor}
        onMentorUpdated={fetchMentors}
      />
    </DashboardLayout>
  );
}

export default ManageMentors;
