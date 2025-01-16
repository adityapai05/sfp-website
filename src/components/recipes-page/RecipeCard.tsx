import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appwriteService from "../../appwrite/config.ts";

interface Recipe {
  title: string;
  summary: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  tags: string[];
  image: string;
  slug: string;
}

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImagePreview = async () => {
      console.log(recipe.image);
      const preview = await appwriteService.getFilePreview(recipe.image);
      console.log("Image Src: ", preview);
      if (preview !== false) {
        setImageSrc(preview);
      } else {
        setImageSrc(
          "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
        );
      }
    };

    fetchImagePreview();
  }, [recipe.image]);

  return (
    <Link
      to={`/recipe/${recipe.slug}`}
      key={recipe.slug}
      className="block rounded-lg shadow-md overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2" style={{ color: "#4a2f23" }}>
          <i className="fa-solid fa-utensils mr-2"></i>
          {recipe.title}
        </h2>
        <p className="text-sm mb-4" style={{ color: "#4a2f23" }}>
          {recipe.summary}
        </p>
        <div
          className="flex justify-between items-center text-sm"
          style={{ color: "#4a2f23" }}
        >
          <span>
            <i className="fa-regular fa-clock mr-1"></i>
            {recipe.prepTime + recipe.cookTime} mins
          </span>
          <span>
            <i className="fa-solid fa-users mr-1"></i>
            {recipe.servings} servings
          </span>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap justify-center">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full"
              style={{ backgroundColor: "#ff5722", color: "#ffffff" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
