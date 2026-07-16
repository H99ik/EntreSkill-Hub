import { useState } from "react";
import toast from "react-hot-toast";
import { createResource } from "../../services/resourceService";

function AddResourceModal({ isOpen, onClose, onResourceCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Course");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");

  if (!isOpen) return null;

  const handleAdd = async () => {
    if (!title || !description || !duration) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      await createResource({
        title,
        description,
        type,
        duration,
        category,
        link,
      });

      toast.success("Resource added successfully");

      setTitle("");
      setDescription("");
      setType("Course");
      setDuration("");
      setCategory("");
      setLink("");

      onResourceCreated();
      onClose();
    } catch (error) {
      toast.error("Failed to add resource");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40">
      <div className="flex min-h-full items-center justify-center p-6">
        <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800">Add New Resource</h2>

          {/* Title */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full rounded-lg border p-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>
            <textarea
              rows="3"
              className="w-full rounded-lg border p-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Type */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">Type</label>

            <select
              className="w-full rounded-lg border p-3"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Course</option>
              <option>Video</option>
              <option>PDF</option>
            </select>
          </div>

          {/* Duration */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">Duration</label>

            <input
              type="text"
              className="w-full rounded-lg border p-3"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">Category</label>

            <input
              type="text"
              className="w-full rounded-lg border p-3"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* Link */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">
              Resource Link
            </label>

            <input
              type="text"
              className="w-full rounded-lg border p-3"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div className="sticky bottom-0 mt-6 flex justify-end gap-3 border-t bg-white pt-4">
            <button
              onClick={onClose}
              className="rounded-lg bg-gray-300 px-5 py-2"
            >
              Cancel
            </button>

            <button
              onClick={handleAdd}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              Add Resource
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddResourceModal;
