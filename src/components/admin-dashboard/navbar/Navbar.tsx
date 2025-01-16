import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import LogoutButton from "./LogoutButton";
import { RootState } from "../../../store/store";

const Navbar = () => {
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Upload Recipe",
      slug: "/admin",
      active: true,
    },
    {
      name: "Uploaded Recipes",
      slug: "/admin/recipes",
      active: true,
    },
  ];

  return (
    <header>
      <nav className="bg-[#f5f5f5] shadow-md fixed w-full top-0 z-50 py-4 px-8 flex justify-between items-center">
        <Link to="/admin">
          <div className="flex items-center gap-4 font-bold text-xl">
            <img src={logo} alt="Cooking Pot Logo" className="w-16 h-16" />
            <div className="hidden md:block font-bold text-2xl text-[#4a2f23]">
              Sangeeta's <span className="text-[#ff5722]">Food Paradise</span>
            </div>
          </div>
        </Link>

        <ul className="flex gap-8 items-center">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="text-[#4a2f23] hover:text-[#ff5722] font-medium text-lg px-4 py-2 cursor-pointer transition duration-200"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
