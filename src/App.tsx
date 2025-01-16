import Contact from "./pages/Contact";
import Protected from "./components/AuthLayout";
import Footer from "./components/Footer";
import UserNavbar from "./components/Navbar";
import AdminPage from "./pages/AdminDashboard";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import DetailedRecipePage from "./pages/Recipe";
import RecipesPage from "./pages/Recipes";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isNotFoundPage = ![
    "/",
    "/recipe/:slug",
    "/recipes",
    "/admin/*",
    "/admin/login",
    "/contact",
  ].includes(location.pathname);

  return (
    <>
      {/* Conditionally render Navbar and Footer */}
      {!isAdminRoute && !isNotFoundPage && <UserNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<DetailedRecipePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <Protected authentication={true}>
              <AdminPage />
            </Protected>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!isNotFoundPage && !isAdminRoute && <Footer />}
    </>
  );
}

export default App;
