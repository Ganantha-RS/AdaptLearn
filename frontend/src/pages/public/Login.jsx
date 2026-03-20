import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5efe6]">
      <Card className="w-96 shadow-lg">
        <CardContent className="p-8 space-y-5">
          {/* Title */}
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-gray-800">
              Login to AdaptLearn
            </h2>
            <p className="text-sm text-gray-500">
              Please enter your details to access your account.
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

          {/* Remember me */}
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>

          {/* Button */}
          <Button
            onClick={() => navigate("/welcome")}
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            Login
          </Button>

          {/* Bottom text */}
          <p className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-orange-500 cursor-pointer font-medium"
            >
              Register
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
