import { useDispatch } from "react-redux";
import authService from "../../../appwrite/auth";
import { logout } from "../../../store/authSlice";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      toast.success("Logged out successfully!");
    });
  };
  return (
    <button
      onClick={logoutHandler}
      className="flex items-center space-x-2 px-4 py-2 bg-[#ff5722] text-[#f5f5f5] rounded-lg hover:bg-[#ff4500] focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
    >
      <i className="fa-solid fa-sign-out-alt"></i>
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
