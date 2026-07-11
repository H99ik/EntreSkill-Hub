import { FaCamera, FaEdit } from "react-icons/fa";

function ProfileHeader({ user, editFormRef }) {
  const handleEditClick = () => {
    editFormRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <div className="relative">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-blue-100"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-4xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}

            <button className="absolute bottom-1 right-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition">
              <FaCamera />
            </button>
          </div>

          {/* User Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>

            <p className="text-blue-600 font-semibold capitalize mt-1">
              {user.role}
            </p>

            <p className="text-gray-500 mt-2">{user.email}</p>
          </div>
        </div>
        
        <button
          onClick={handleEditClick}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition shadow-md"
        >
          <FaEdit />
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
