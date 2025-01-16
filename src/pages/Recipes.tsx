import React, { useEffect, useState } from "react";
import RecipeCard from "../components/recipes-page/RecipeCard";
import appwriteService from "../appwrite/config";
import { useLocation } from "react-router-dom";

interface Recipe {
  title: string;
  tags: string[];
  youtubeVideo: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string[];
  steps: string[];
  summary: string;
  slug: string;
  image: string;
  $createdAt: string; 
}

const RecipesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<"newest" | "quickest">("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      const fetchedRecipes = await appwriteService.getPosts();
      console.log("Fetched Recipes: ", fetchedRecipes)
      if (fetchedRecipes) {
        setRecipes(fetchedRecipes);
        const allTags = fetchedRecipes.flatMap((recipe) => recipe.tags);
        const uniqueTags = [...new Set(allTags)];
        setTags(uniqueTags);
      }
      setIsLoading(false);
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes
    .filter((recipe) => {
      if (category === "Global Fusion") {
        return !recipe.tags.includes("Indian");
      } else if (category === "Konkani (G.S.B)") {
        return recipe.tags.includes("Konkani");
      } else if (category === "Traditional Indian") {
        return recipe.tags.includes("Indian");
      } else if (category === "Healthy Eating") {
        return recipe.tags.includes("Healthy");
      } else if (category === "Desserts") {
        return recipe.tags.includes("Dessert");
      }
      return true;
    })
    .filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) => recipe.tags.includes(tag)))
    )
    .sort((a, b) => {
      if (sortOption === "quickest") {
        return a.prepTime + a.cookTime - (b.prepTime + b.cookTime);
      } else if (sortOption === "newest") {
        const dateA = new Date(a.$createdAt); 
        const dateB = new Date(b.$createdAt);
        return dateB.getTime() - dateA.getTime(); 
      }
      return 0; 
    });

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div
      className="pt-36 pb-10 px-8 min-h-screen"
      style={{ backgroundColor: "#5cfafa" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Search and Filter Section */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full max-w-lg">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500"></i>
            <input
              type="text"
              placeholder="Search recipes..."
              className="p-3 pl-10 w-full border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: "#ff5722", color: "#4a2f23" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter and Sort Options */}
          <div className="flex gap-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="p-3 border rounded-lg text-white hover:opacity-90"
              style={{ backgroundColor: "#ff5722" }}
            >
              <i className="fa-solid fa-filter mr-2"></i>Filters
            </button>
            <select
              value={sortOption}
              onChange={(e) =>
                setSortOption(e.target.value as "newest" | "quickest")
              }
              className="p-3 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: "#ff5722", color: "#4a2f23" }}
            >
              <option value="newest">Recently Published</option>
              <option value="quickest">Quickest Recipes</option>
            </select>
          </div>
        </div>

        {/* Filter Popup */}
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setIsFilterOpen(false)}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-80"
              onClick={(e) => e.stopPropagation()}
            >
              <h2
                className="text-lg font-bold mb-4"
                style={{ color: "#4a2f23" }}
              >
                <i className="fa-solid fa-tags mr-2"></i>Filter by Tags
              </h2>
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-4 py-2 rounded-lg border transition-colors duration-300 ${
                      selectedTags.includes(tag)
                        ? "text-white"
                        : "text-orange-500 border-orange-500"
                    }`}
                    style={{
                      backgroundColor: selectedTags.includes(tag)
                        ? "#ff5722"
                        : "#ffffff",
                      color: selectedTags.includes(tag) ? "#ffffff" : "#ff5722",
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="mt-4 w-full p-3 rounded-lg text-white hover:opacity-90"
                style={{ backgroundColor: "#ff5722" }}
              >
                <i className="fa-solid fa-times mr-2"></i>Close
              </button>
            </div>
          </div>
        )}

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-96 bg-gray-300 rounded-lg animate-pulse"
                ></div>
              ))
            : filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;
