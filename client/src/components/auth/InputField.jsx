import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
  icon: Icon,
  showPassword,
  setShowPassword,
}) {
  const isPasswordField = type === "password";

  return (
    <div className="space-y-2">
      {/* Label */}
      <label className="text-sm font-medium text-gray-700">{label}</label>

      {/* Input */}
      <div className="relative group">
        {/* Left Icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition">
          <Icon size={18} />
        </div>

        <input
          type={isPasswordField ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className=" w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-12 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />

        {/* Eye Button */}

        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;
