import { FaBookOpen, FaVideo, FaFilePdf, FaArrowRight } from "react-icons/fa";

function ResourceCard({ resource }) {
  const icons = {
    Course: <FaBookOpen className="text-blue-600" />,
    Video: <FaVideo className="text-red-500" />,
    PDF: <FaFilePdf className="text-orange-500" />,
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="text-3xl">{icons[resource.type]}</div>

          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            {resource.type}
          </span>
        </div>

        <h2 className="mt-5 text-xl font-bold text-gray-800">
          {resource.title}
        </h2>

        <p className="mt-3 text-gray-500 text-sm">{resource.description}</p>

        <div className="mt-6 flex justify-between items-center">
          <span className="text-sm text-gray-500">{resource.duration}</span>

          {resource.link ? (
            <button
              onClick={() =>
                window.open(resource.link, "_blank", "noopener,noreferrer")
              }
              className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800"
            >
              Learn More
              <FaArrowRight />
            </button>
          ) : (
            <button
              disabled
              className="flex items-center gap-2 text-gray-400 font-semibold cursor-not-allowed"
            >
              No Link
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;
