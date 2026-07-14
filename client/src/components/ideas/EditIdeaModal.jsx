import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updateBusinessIdea } from "../../services/businessIdeaService";

function EditIdeaModal({ isOpen, onClose, idea, onIdeaUpdated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [investment, setInvestment] = useState("");
  const [skill, setSkill] = useState("");

  useEffect(() => {
    if (idea) {
      setTitle(idea.title);
      setDescription(idea.description);
      setCategory(idea.category);
      setLevel(idea.level);
      setInvestment(idea.investment);
      setSkill(idea.skill);
    }
  }, [idea]);

  if (!isOpen || !idea) return null;

  const handleSave = async () => {
    try {
      await updateBusinessIdea(idea._id, {
        title,
        description,
        category,
        level,
        investment,
        skill,
      });

      toast.success("Business idea updated successfully");

      onIdeaUpdated();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update business idea");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40">
      <div className="flex min-h-screen items-start justify-center py-10">
        <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800">
            Edit Business Idea
          </h2>

          {/* Title */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">Title</label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          {/* Description */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          {/* Category */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">Category</label>

            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          {/* Level */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">Level</label>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Investment */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">Investment</label>

            <input
              type="text"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          {/* Skill */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">Skill</label>

            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="rounded-lg bg-gray-300 px-5 py-2"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditIdeaModal;
