import { updateUser } from "../../services/userService";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function EditUserModal({ isOpen, onClose, user, onUserUpdated }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setRole(user.role);
    }
  }, [user]);

  if (!isOpen || !user) return null;

  const handleSave = async () => {
    try {
      await updateUser(user._id, {
        name,
        role,
      });

      toast.success("User updated successfully");

      onUserUpdated();

      onClose();
    } catch (error) {
      toast.error("Failed to update user");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold">Edit User</h2>

        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium">Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium">Role</label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={user.role==="admin"}
            className="w-full rounded-lg border border-gray-300 p-3"
          >
            <option value="entrepreneur">Entrepreneur</option>

            <option value="mentor">Mentor</option>

            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg bg-gray-300 px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}

export default EditUserModal;
