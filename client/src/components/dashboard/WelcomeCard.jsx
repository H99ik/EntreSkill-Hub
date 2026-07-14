import { FaRocket } from "react-icons/fa";

function WelcomeCard({ description, buttonText, onButtonClick }) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};

  return (
    <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-xl">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <p className="text-lg text-blue-100">Welcome Back 👋</p>

          <h1 className="mt-2 text-4xl font-bold">{userInfo.name || "User"}</h1>

          <p className="mt-4 max-w-xl leading-relaxed text-blue-100">
            {description}
          </p>

          <button
            onClick={onButtonClick}
            className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105 hover:shadow-lg"
          >
            {buttonText}
          </button>
        </div>

        {/* Right */}
        <div className="hidden h-28 w-28 items-center justify-center rounded-full bg-white/20 backdrop-blur-md lg:flex">
          <FaRocket className="text-6xl text-white" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;
