import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updateMentor } from "../../services/mentorService";

function EditMentorModal({
  isOpen,
  onClose,
  mentor,
  onMentorUpdated,
}) {
  const [name, setName] = useState("");
  const [expertise, setExpertise] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    if (mentor) {
      setName(mentor.name);
      setExpertise(mentor.expertise);
      setExperience(mentor.experience);
    }
  }, [mentor]);

  if (!isOpen || !mentor) return null;

  const handleSave = async () => {
    try {
      await updateMentor(mentor._id, {
        name,
        expertise,
        experience,
      });

      toast.success("Mentor updated successfully");

      onMentorUpdated();
      onClose();
    } catch (error) {
      toast.error("Failed to update mentor");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-gray-800">
          Edit Mentor
        </h2>

        {/* Name */}
        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium">
            Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        {/* Expertise */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">
            Expertise
          </label>

          <input
            type="text"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        {/* Experience */}
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">
            Experience
          </label>

          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
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
  );
}

export default EditMentorModal;