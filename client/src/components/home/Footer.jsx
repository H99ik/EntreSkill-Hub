import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            EntreSkill Hub
          </h2>

          <p className="text-gray-300">
            Transforming skills into opportunities and startups.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Resources</li>
            <li>Mentorship</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Support
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Help Center</li>
          </ul>
        </div>

        <div>

          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">

            <FaFacebook className="hover:text-blue-400 cursor-pointer" />

            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />

            <FaGithub className="hover:text-blue-400 cursor-pointer" />

            <FaInstagram className="hover:text-pink-400 cursor-pointer" />

          </div>

        </div>

      </div>

      <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-8">

        © 2026 EntreSkill Hub. All Rights Reserved. Developed by{" Hardikgiri Goswami "}

      </div>

    </footer>
  );
}

export default Footer;