import { FaRocket, FaCheckCircle } from "react-icons/fa";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-700 flex items-center justify-center px-6 py-10">
      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <div className="grid lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="hidden lg:flex flex-col justify-center p-12 text-white">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-blue-700 text-2xl">
                <FaRocket />
              </div>

              <div>
                <h1 className="text-3xl font-bold">EntreSkill Hub</h1>

                <p className="text-blue-100">Build • Learn • Grow</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold leading-tight mb-6">
              Turn Your Skills
              <br />
              Into Successful
              <br />
              Startups 🚀
            </h2>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-300" />
                <span>Discover business opportunities</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-300" />
                <span>Connect with experienced mentors</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-300" />
                <span>Build your startup roadmap</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-300" />
                <span>Track your entrepreneurial journey</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-10 md:p-12 flex flex-col justify-center">

            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
              <FaRocket className="text-3xl text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                EntreSkill Hub
              </h1>
            </div>

            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>

              <p className="text-gray-500 mt-2">{subtitle}</p>
            </div>

            {children}

          </div>

        </div>

      </div>

    </div>

  );
}

export default AuthLayout;
