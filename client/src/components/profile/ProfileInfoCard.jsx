import {
  FaPhone,
  FaBullseye,
  FaCode,
  FaHeart,
  FaUserEdit,
} from "react-icons/fa";

function ProfileInfoCard({
  user = {
    phone: "+91 9876543210",
    startupGoal: "Build an AI Startup",
    skills: ["React", "Node.js", "MongoDB"],
    interests: ["Technology", "AI", "Startups"],
    bio: "Passionate entrepreneur building innovative digital solutions.",
  },
}) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Phone */}
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
            <FaPhone />
            Phone
          </div>

          <p className="text-gray-700">{user.phone || "Not Added"}</p>
        </div>

        {/* Startup Goal */}
        <div>
          <div className="flex items-center gap-2 text-green-600 font-semibold mb-2">
            <FaBullseye />
            Startup Goal
          </div>

          <p className="text-gray-700">{user.startupGoal || "Not Added"}</p>
        </div>

        {/* Skills */}
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-semibold mb-3">
            <FaCode />
            Skills
          </div>

          <div className="flex flex-wrap gap-2">
            {user.skills.length > 0 ? (
              user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No Skills Added</p>
            )}
          </div>
        </div>

        {/* Interests */}
        <div>
          <div className="flex items-center gap-2 text-pink-600 font-semibold mb-3">
            <FaHeart />
            Interests
          </div>

          <div className="flex flex-wrap gap-2">
            {user.interests.length > 0 ? (
              user.interests.map((interest, index) => (
                <span
                  key={index}
                  className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No Interests Added</p>
            )}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-8">
        <div className="flex items-center gap-2 text-orange-600 font-semibold mb-2">
          <FaUserEdit />
          About Me
        </div>

        <p className="text-gray-700 leading-7">{user.bio || "No Bio Added"}</p>
      </div>
    </div>
  );
}

export default ProfileInfoCard;
