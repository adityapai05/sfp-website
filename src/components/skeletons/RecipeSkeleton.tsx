import React from "react";

const RecipeSkeleton: React.FC = () => {
  return (
    <div className="pt-28 px-6 pb-10 min-h-screen bg-[#5cfafa] text-[#4a2f23]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Back to Recipes Link */}
        <div className="flex items-center justify-between p-6 animate-pulse">
          <div className="h-6 w-1/3 bg-gray-300 rounded-md"></div>
        </div>

        {/* Recipe Image */}
        <div className="relative animate-pulse">
          <div className="w-full h-64 bg-gray-300"></div>
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white px-6 py-4">
            <div className="h-4 w-3/4 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        <div className="p-6">
          {/* Recipe Summary */}
          <div className="h-4 w-3/4 bg-gray-300 rounded-md mb-4"></div>

          {/* Recipe Details */}
          <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600 mb-6">
            {["Prep Time", "Cook Time", "Servings"].map((index) => (
              <div key={index} className="animate-pulse">
                <div className="h-4 w-16 bg-gray-300 mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-300"></div>
              </div>
            ))}
          </div>

          {/* Ingredients */}
          <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-3"></div>
          <ul className="list-disc pl-5 mb-6 text-sm text-gray-700 space-y-2">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="h-4 w-3/4 bg-gray-300 rounded-md"></li>
            ))}
          </ul>

          {/* Steps */}
          <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-3"></div>
          <ol className="list-decimal pl-5 space-y-4 text-sm text-gray-700">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="h-4 w-3/4 bg-gray-300 rounded-md"></li>
            ))}
          </ol>

          {/* Watch the Recipe */}
          <div className="mt-6">
            <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-3"></div>
            <div
              className="relative w-full overflow-hidden rounded-lg shadow-md"
              style={{ paddingTop: "56.25%" }}
            >
              <div className="w-full h-full bg-gray-300"></div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6">
            <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-3"></div>
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="h-6 w-24 bg-gray-300 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSkeleton;
