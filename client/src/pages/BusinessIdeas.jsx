import { useEffect, useState } from "react";
import { getBusinessIdeas } from "../services/businessIdeaService";
import DashboardLayout from "../components/layout/DashboardLayout";
import SearchBar from "../components/ideas/SearchBar";
import FilterBar from "../components/ideas/FilterBar";
import IdeaCard from "../components/ideas/IdeaCard";

function BusinessIdeas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  // State to hold the fetched business ideas
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      const response = await getBusinessIdeas();
      setIdeas(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredIdeas = ideas.filter((idea) => {
    const matchesSearch =
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = category === "" || idea.category === category;

    const matchesLevel = level === "" || idea.level === level;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Business Ideas</h1>

        <p className="text-gray-500 mt-2">
          Discover startup ideas based on your skills and interests.
        </p>
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="mt-4 text-gray-500">
        Searching for:
        <span className="font-semibold text-blue-600 ml-2">
          {searchTerm || "All Ideas"}
        </span>
      </div>

      <FilterBar
        category={category}
        setCategory={setCategory}
        level={level}
        setLevel={setLevel}
      />

      {filteredIdeas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {filteredIdeas.map((idea) => (
            <IdeaCard key={idea._id} idea={idea} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center bg-white rounded-2xl border border-dashed border-gray-300 p-12">
          <h2 className="text-2xl font-bold text-gray-700">
            No Business Ideas Found
          </h2>

          <p className="text-gray-500 mt-2">
            Try changing your search or filter options.
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}

export default BusinessIdeas;
