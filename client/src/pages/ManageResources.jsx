import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import ResourceSearchBar from "../components/resources/ResourceSearchBar";
import ResourcesTable from "../components/resources/ResourcesTable";
import EditResourceModal from "../components/resources/EditResourceModal";
import AddResourceModal from "../components/resources/AddResourceModal";
import { getResources, deleteResource } from "../services/resourceService";
import toast from "react-hot-toast";

function ManageResources() {
  // State
  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [selectedResource, setSelectedResource] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  // useEffect
  useEffect(() => {
    fetchResources();
  }, []);

  // Fetch Resources
  const fetchResources = async () => {
    try {
      const res = await getResources();

      setResources(res.data);
    } catch (error) {
      toast.error("Failed to fetch resources");
    } finally {
      setLoading(false);
    }
  };

  // Edit Resource
  const handleEdit = (resource) => {
    setSelectedResource(resource);
    setIsEditOpen(true);
  };

  // Delete Resource
  const handleDelete = async (resource) => {
    if (!window.confirm(`Delete "${resource.title}"?`)) return;

    try {
      await deleteResource(resource._id);

      toast.success("Resource deleted");

      fetchResources();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  // Search Filter
  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.description.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <p className="py-10 text-center">Loading resources...</p>;
  }

  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Manage Resources</h1>

          <p className="mt-2 text-gray-500">
            View, search, edit and manage all learning resources.
          </p>
        </div>

        <button
          onClick={() => setIsAddOpen(true)}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          + Add Resource
        </button>
      </div>

      {/* Search */}
      <ResourceSearchBar searchTerm={search} setSearchTerm={setSearch} />

      {/* Table */}
      <div className="mt-6">
        <ResourcesTable
          resources={filteredResources}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* Edit Modal */}
      <EditResourceModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        resource={selectedResource}
        onResourceUpdated={fetchResources}
      />

      <AddResourceModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onResourceCreated={fetchResources}
      />
    </DashboardLayout>
  );
}

export default ManageResources;
