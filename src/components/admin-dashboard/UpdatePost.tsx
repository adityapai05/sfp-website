import { useState, useEffect } from "react";
import appwriteService from "../../appwrite/config";

const UpdatePost = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [prepTime, setPrepTime] = useState<number | "">("");
  const [cookTime, setCookTime] = useState<number | "">("");
  const [servings, setServings] = useState<number | "">("");
  const [summary, setSummary] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");
  const [stepsInput, setStepsInput] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [youtubeVideo, setYoutubeVideo] = useState("");
  const [_ingredients, setIngredients] = useState<string[]>([]);
  const [_steps, setSteps] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return; 
      const postData = await appwriteService.getPost(slug);
      if (postData) {
        setTitle(postData.title || "");
        setSlug(postData.slug || "");
        setPrepTime(postData.prepTime || "");
        setCookTime(postData.cookTime || "");
        setServings(postData.servings || "");
        setSummary(postData.summary || "");
        setTags(postData.tags || []);
        setIngredients(postData.ingredients || []);
        setSteps(postData.steps || []);
        setImage(postData.image || null);
        setYoutubeVideo(postData.youtubeVideo || "");
      }
    };
  
    fetchPost();
  }, [slug]); 
  
  useEffect(() => {
    const generatedSlug = title.toLowerCase().replace(/\s+/g, "-");
    setSlug(generatedSlug);
  }, [title]);

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setTags((prev) => [...prev, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async () => {
    if (!image) {
      setErrorMessage("Please upload an image.");
      return;
    }

    const ingredients = ingredientInput
      .split("\n")
      .map((line) => {
        const [name, quantity] = line.split(" - ").map((item) => item.trim());
        return { name, quantity };
      })
      .filter((ingredient) => ingredient.name && ingredient.quantity);

    const steps = stepsInput
      .split("\n")
      .map((step) => step.trim())
      .filter((step) => step);

    const uploadedImage = await appwriteService.uploadFile(image);
    if (!uploadedImage) {
      setErrorMessage("Image upload failed.");
      return;
    }

    const updatedPostData = {
      title,
      slug,
      prepTime: prepTime === "" ? 0 : prepTime,
      cookTime: cookTime === "" ? 0 : cookTime,
      servings: servings === "" ? 0 : servings,
      summary,
      tags,
      ingredients: ingredients.map(
        (ingredient) => `${ingredient.name} - ${ingredient.quantity}`
      ),
      steps,
      image: uploadedImage.$id,
      youtubeVideo,
    };

    const updatedPost = await appwriteService.updatePost(slug, updatedPostData);

    if (updatedPost) {
      setSuccessMessage("Recipe updated successfully!");
      setErrorMessage(null);
    } else {
      setErrorMessage("Failed to update recipe.");
      setSuccessMessage(null); 
    }
  };

  return (
    <div
      className="pt-36 pb-12 min-h-screen"
      style={{ backgroundColor: "#5cfafa" }}
    >
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6" style={{ color: "#4a2f23" }}>
          Update Recipe
        </h1>
        {/* Recipe Title */}
        <input
          type="text"
          placeholder="Enter the title to retrieve stored data"
          className="w-full mb-4 p-3 border rounded-lg"
          style={{ borderColor: "#ff5722" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Slug Display */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Slug</h2>
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            style={{ borderColor: "#ff5722" }}
            value={slug}
            readOnly
          />
        </div>
        {/* Summary */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Summary</h2>
          <textarea
            placeholder="Enter a brief summary of the recipe"
            className="w-full p-3 border rounded-lg"
            style={{ borderColor: "#ff5722" }}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        {/* Prep Time, Cook Time & Servings */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="number"
            placeholder="Prep Time (mins)"
            className="p-3 border rounded-lg"
            style={{ borderColor: "#ff5722" }}
            value={prepTime}
            onChange={(e) => setPrepTime(Number(e.target.value) || "")}
          />
          <input
            type="number"
            placeholder="Cook Time (mins)"
            className="p-3 border rounded-lg"
            style={{ borderColor: "#ff5722" }}
            value={cookTime}
            onChange={(e) => setCookTime(Number(e.target.value) || "")}
          />
          <input
            type="number"
            placeholder="Servings"
            className="p-3 border rounded-lg"
            style={{ borderColor: "#ff5722" }}
            value={servings}
            onChange={(e) => setServings(Number(e.target.value) || "")}
          />
        </div>
        {/* Image Upload */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Image</h2>
          <label className="flex items-center gap-2 cursor-pointer p-3 bg-white text-[#ff5722] border border-[#ff5722] rounded-lg">
            <i className="fa-solid fa-file"></i>
            <span>Click to Select File</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
            />
          </label>
          {image && (
            <p className="mt-2 text-sm text-gray-700">
              Selected File: {image.name}
            </p>
          )}
        </div>
        {/* Youtube Video */}
        <h2 className="text-lg font-semibold mb-2">Youtube Video Link</h2>
        <input
          type="text"
          placeholder="YouTube Video URL"
          className="w-full mb-4 p-3 border rounded-lg"
          style={{ borderColor: "#ff5722" }}
          value={youtubeVideo}
          onChange={(e) => setYoutubeVideo(e.target.value)}
        />
        {/* Tags Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Tags</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Add a tag"
              className="flex-grow p-3 border rounded-lg"
              style={{ borderColor: "#ff5722" }}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
            <button
              onClick={handleAddTag}
              className="p-3 bg-[#ff5722] text-white rounded-lg"
            >
              Add Tag
            </button>
          </div>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#ff5722] text-white rounded-lg flex items-center gap-2"
              >
                {tag}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="text-sm text-white"
                >
                  <i className="fa-solid fa-times"></i>
                </button>
              </span>
            ))}
          </div>
        </div>
        {/* Ingredients Input */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
          <textarea
            placeholder="Enter ingredients (e.g., 'Flour - 2 cups', one per line)"
            className="w-full p-3 border rounded-lg"
            style={{ borderColor: "#ff5722" }}
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
          />
        </div>
        {/* Steps Input */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Steps</h2>
          <textarea
            placeholder="Enter steps (one per line)"
            className="w-full p-3 border rounded-lg"
            style={{ borderColor: "#ff5722" }}
            value={stepsInput}
            onChange={(e) => setStepsInput(e.target.value)}
          />
        </div>
        {/* Success and Error Messages */}
        {successMessage && (
          <p className="text-green-600 mb-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-600 mb-4">{errorMessage}</p>
        )}
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-[#ff5722] text-white rounded-lg"
        >
          Update Recipe
        </button>
      </div>
    </div>
  );
};

export default UpdatePost;

