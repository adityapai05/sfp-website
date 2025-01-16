import { useNavigate } from "react-router-dom";

const RecipeCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/recipes?category=${encodeURIComponent(category)}`);
  };

  return (
    <section id="categories">
      <div className="mt-14 mx-auto w-[80%] lg:w-[75%]">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-5">Recipes</h2>
          <div className="w-24 h-1 bg-[#ff5722] mx-auto mb-12"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 text-center">
          <div
            onClick={() => handleCategoryClick("Konkani (G.S.B)")}
            className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] cursor-pointer"
          >
            <i className="text-4xl text-[#ff5722] mb-4 fas fa-utensils"></i>
            <h3 className="text-xl font-bold">Konkani (G.S.B)</h3>
            <p>Delicious traditional recipes by the Konkani G.S.B community</p>
          </div>
          <div
            onClick={() => handleCategoryClick("Traditional Indian")}
            className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] cursor-pointer"
          >
            <i className="text-4xl text-[#ff5722] mb-4 fas fa-landmark"></i>
            <h3 className="text-xl font-bold">Traditional Indian</h3>
            <p>Authentic recipes passed down through generations</p>
          </div>

          <div
            onClick={() => handleCategoryClick("Global Fusion")}
            className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] cursor-pointer"
          >
            <i className="text-4xl text-[#ff5722] mb-4 fas fa-globe-asia"></i>
            <h3 className="text-xl font-bold">Global Fusion</h3>
            <p>Creative fusion of international flavors</p>
          </div>

          <div
            onClick={() => handleCategoryClick("Healthy Eating")}
            className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] cursor-pointer"
          >
            <i className="text-4xl text-[#ff5722] mb-4 fas fa-apple-alt"></i>
            <h3 className="text-xl font-bold">Healthy Eating</h3>
            <p>Nutritious recipes to nourish your body</p>
          </div>

          <div
            onClick={() => handleCategoryClick("Desserts")}
            className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] cursor-pointer"
          >
            <i className="text-4xl text-[#ff5722] mb-4 fas fa-cake"></i>
            <h3 className="text-xl font-bold">Desserts</h3>
            <p>Sweet treats for every occasion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeCategories;
