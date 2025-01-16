import { Route, Routes } from "react-router-dom";
import Navbar from "../components/admin-dashboard/navbar/Navbar";
import UploadPost from "../components/admin-dashboard/UploadPost";
import Footer from "../components/Footer";
import AllPosts from "../components/admin-dashboard/AllPosts";
import UpdatePost from "../components/admin-dashboard/UpdatePost";

const AdminPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<UploadPost />} />
          <Route path="/recipes" element={<AllPosts />} />
          <Route path="/recipe/update/:slug" element={<UpdatePost />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
