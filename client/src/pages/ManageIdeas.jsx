import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import SearchBar from "../components/ideas/SearchBar";
import IdeasTable from "../components/ideas/IdeasTable";
import EditIdeaModal from "../components/ideas/EditIdeaModal";
import {
  getBusinessIdeas,
  deleteBusinessIdea,
} from "../services/businessIdeaService";
import toast from "react-hot-toast";

function ManageIdeas() {
  // State
  const [ideas, setIdeas] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [selectedIdea, setSelectedIdea] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // useEffect
  useEffect(() => {
    fetchIdeas();
  }, []);

  // Fetch Ideas
  const fetchIdeas = async () => {
    try {
      const res = await getBusinessIdeas();
      setIdeas(res.data);
    } catch (error) {
      toast.error("Failed to fetch business ideas");
    } finally {
      setLoading(false);
    }
  };

  // Edit
  const handleEdit = (idea) => {
    setSelectedIdea(idea);
    setIsEditOpen(true);
  };

  // Delete
  const handleDelete = async (idea) => {
    if (!window.confirm(`Delete "${idea.title}"?`)) return;

    try {
      await deleteBusinessIdea(idea._id);

      toast.success("Business idea deleted");

      fetchIdeas();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  // Search
  const filteredIdeas = ideas.filter(
    (idea) =>
      idea.title.toLowerCase().includes(search.toLowerCase()) ||
      idea.description.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <p className="py-10 text-center">Loading business ideas...</p>;
  }

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Manage Business Ideas
        </h1>

        <p className="mt-2 text-gray-500">
          View, search, edit and manage all business ideas.
        </p>
      </div>

      {/* Search */}
      <SearchBar searchTerm={search} setSearchTerm={setSearch} />

      {/* Table */}
      <div className="mt-6">
        <IdeasTable
          ideas={filteredIdeas}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* Edit Modal */}
      <EditIdeaModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        idea={selectedIdea}
        onIdeaUpdated={fetchIdeas}
      />
    </DashboardLayout>
  );
}

export default ManageIdeas;
