import DashboardLayout from "../components/layout/DashboardLayout";
import ResourceCard from "../components/resources/ResourceCard";
import ResourceSearchBar from "../components/resources/ResourceSearchBar";
import ResourceFilterBar from "../components/resources/ResourceFilterBar";

import { useEffect, useState } from "react";
import { getResources } from "../services/resourceService";

function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");

  // State to hold the fetched resources
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await getResources();
      setResources(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = type === "" || resource.type === type;

    return matchesSearch && matchesType;
  });

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Learning Resources</h1>

        <p className="text-gray-500 mt-2">
          Explore courses, videos, articles, and PDFs to build your business
          skills.
        </p>
      </div>

      <ResourceSearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ResourceFilterBar type={type} setType={setType} />

      {filteredResources.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            No Resources Found
          </h2>

          <p className="mt-2 text-gray-500">
            Try searching with a different keyword.
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}

export default Resources;
