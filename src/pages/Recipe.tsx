import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
import conf from "../conf/conf";
import Skeleton from "../components/skeletons/RecipeSkeleton";

interface RecipeDetails {
  title: string;
  slug: string;
  content: string;
  image: string;
  youtubeLink: string;
  tags?: string[];
  summary?: string;
  prepTime?: number;
  cookTime?: number;
  servings?: number;
  ingredients: string[];
  steps: string[];
}

const DetailedRecipePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        if (slug) {
          const data = await appwriteService.getPost(slug);
          if (data) {
            setRecipeDetails({
              title: data.title,
              slug: data.slug,
              content: data.content,
              image: data.image,
              youtubeLink: data.youtubeVideo,
              tags: data.tags || [],
              summary: data.summary,
              prepTime: data.prepTime,
              cookTime: data.cookTime,
              servings: data.servings,
              ingredients: data.ingredients,
              steps: data.steps,
            });
          } else {
            setError("Recipe not found.");
          }
        }
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching the recipe.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [slug]);

  if (loading) {
    return <Skeleton />;
  }

  if (error || !recipeDetails) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-red-500">
          {error || "Recipe not found."}
        </p>
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 pb-10 min-h-screen bg-[#5cfafa] text-[#4a2f23]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <Link
          to="/recipes"
          className="flex items-center text-orange-500 font-semibold text-sm hover:underline px-6 py-4"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Recipes
        </Link>

        {/* Recipe Image */}
        <div className="relative">
          <img
            src={`${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${recipeDetails.image}/view?project=${conf.appwriteProjectId}`}
            alt={recipeDetails.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white px-6 py-4">
            <h1 className="text-2xl font-bold">{recipeDetails.title}</h1>
          </div>
        </div>

        <div className="p-6">
          {/* Recipe Summary */}
          <p className="text-gray-700 text-sm mb-4">{recipeDetails.summary}</p>

          {/* Recipe Details */}
          <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600 mb-6">
            <div>
              <i className="fas fa-clock text-orange-500"></i>
              <p>Prep Time</p>
              <p className="font-semibold">{recipeDetails.prepTime} mins</p>
            </div>
            <div>
              <i className="fas fa-hourglass text-orange-500"></i>
              <p>Cook Time</p>
              <p className="font-semibold">{recipeDetails.cookTime} mins</p>
            </div>
            <div>
              <i className="fas fa-users text-orange-500"></i>
              <p>Servings</p>
              <p className="font-semibold">{recipeDetails.servings}</p>
            </div>
          </div>

          {/* Watch the Recipe */}
          <div className="my-6">
            <h2 className="text-lg font-bold mb-3 text-[#4a2f23]">
              Watch the Recipe
            </h2>
            <div
              className="relative w-full overflow-hidden rounded-lg shadow-md"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${recipeDetails.youtubeLink}`}
                title={recipeDetails.title}
                className="w-full h-full absolute top-0 left-0"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Ingredients */}
          <h2 className="text-lg font-bold mb-3 text-[#4a2f23]">Ingredients</h2>
          <ul className="list-disc pl-5 mb-6 text-sm text-gray-700">
            {recipeDetails.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1">
                {ingredient}
              </li>
            ))}
          </ul>

          {/* Steps */}
          <h2 className="text-lg font-bold mb-3 text-[#4a2f23]">Steps</h2>
          <ol className="list-decimal pl-5 space-y-4 text-sm text-gray-700">
            {recipeDetails.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>


          {/* Tags */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-3 text-[#4a2f23]">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {recipeDetails.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm bg-[#ff5722] text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedRecipePage;
