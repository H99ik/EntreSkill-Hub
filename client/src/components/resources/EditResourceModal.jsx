import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updateResource } from "../../services/resourceService";

function EditResourceModal({ isOpen, onClose, resource, onResourceUpdated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (resource) {
      setTitle(resource.title);
      setDescription(resource.description);
      setType(resource.type);
      setDuration(resource.duration);
      setCategory(resource.category);
      setLink(resource.link);
    }
  }, [resource]);

  if (!isOpen || !resource) return null;

  const handleSave = async () => {
    try {
      await updateResource(resource._id, {
        title,
        description,
        type,
        duration,
        category,
        link,
      });

      toast.success("Resource updated successfully");

      onResourceUpdated();
      onClose();
    } catch (error) {
      toast.error("Failed to update resource");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40">
      <div className="flex min-h-full items-center justify-center">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800">Edit Resource</h2>

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
          <label className="mb-2 block text-sm font-medium">Description</label>

          <textarea
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        {/* Type */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">Type</label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
          >
            <option value="Course">Course</option>
            <option value="Video">Video</option>
            <option value="PDF">PDF</option>
          </select>
        </div>

        {/* Duration */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">Duration</label>

          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
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

        {/* Link */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">
            Resource Link
          </label>

          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        {/* Buttons */}
        <div className="sticky bottom-0 mt-6 flex justify-end gap-3 border-t bg-white pt-4">
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

export default EditResourceModal;
