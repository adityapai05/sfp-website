import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";
import authService from "../appwrite/auth";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/admin");
        }
      } catch (error) {
        console.error("No active session or error retrieving user:", error);
        setError("Session expired. Please log in again.");
      }
    };
    checkSession();
  }, [dispatch, navigate]);

  const login: SubmitHandler<FieldValues> = async (data) => {
    setError("");
    try {
      const session = await authService.login(data.email, data.password);

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/admin");
        }
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-[#5cfafa] h-screen flex items-center justify-center">
      {/* Login Form Section */}
      <div className="bg-white p-10 rounded-lg shadow-lg w-[100%] sm:w-[400px]">
        <h2 className="text-[#4a2f23] text-3xl font-semibold text-center mb-8">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit(login)} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg border-[#4a2f23] focus:outline-none focus:ring-2 focus:ring-[#ff5722] transition duration-200"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg border-[#4a2f23] focus:outline-none focus:ring-2 focus:ring-[#ff5722] transition duration-200"
              {...register("password", {
                required: "Password is required",
              })}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#ff5722] text-white rounded-lg hover:bg-[#e64a19] focus:outline-none focus:ring-4 focus:ring-[#ff5722] transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
