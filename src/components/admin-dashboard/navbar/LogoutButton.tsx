import { useDispatch } from "react-redux";
import authService from "../../../appwrite/auth";
import { logout } from "../../../store/authSlice";
import { useState } from "react";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const [logoutMessage, setLogoutMessage] = useState<string | null>(null);

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      setLogoutMessage("Logged out successfully!");
      setTimeout(() => {
        setLogoutMessage(null); 
      }, 3000); 
    });
  };

  return (
    <div>
      <button
        onClick={logoutHandler}
        className="flex items-center space-x-2 px-4 py-2 bg-[#ff5722] text-[#f5f5f5] rounded-lg hover:bg-[#ff4500] focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
      >
        <i className="fa-solid fa-sign-out-alt"></i>
        <span>Logout</span>
      </button>
      {logoutMessage && (
        <p className="mt-4 text-green-600">{logoutMessage}</p>
      )}
    </div>
  );
};

export default LogoutButton;
