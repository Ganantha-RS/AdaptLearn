import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5efe6]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-5">
        
        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-800">
            Register for AdaptLearn
          </h2>
          <p className="text-sm text-gray-500">
            Create your account to start your learning journey.
          </p>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm text-gray-600">Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Terms */}
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <input type="checkbox" />
          <span>I agree to the Terms of Service</span>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
        >
          Register
        </button>

        {/* Bottom */}
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-orange-500 cursor-pointer font-medium"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;