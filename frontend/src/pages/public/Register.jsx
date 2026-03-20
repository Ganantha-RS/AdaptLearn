import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5efe6]">
      <Card className="w-96 shadow-lg">
        <CardContent className="p-8 space-y-5">
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
            <Input
              type="email"
              placeholder="you@example.com"
              className="mt-1"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              className="mt-1"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-600">Confirm Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              className="mt-1"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <input type="checkbox" />
            <span>I agree to the Terms of Service</span>
          </div>

          {/* Button */}
          <Button
            onClick={() => navigate("/login")}
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            Register
          </Button>

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
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
