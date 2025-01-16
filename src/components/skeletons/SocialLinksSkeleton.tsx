const SocialLinksSkeleton = () => {
  return (
    <section id="follow">
      <div className="my-12 mx-auto mt-14 w-[80%] lg:w-[75%]">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-5 bg-gray-300 rounded-md w-40 mx-auto h-8"></h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-12"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-[90px] h-[90px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="bg-gray-300 h-6 w-24 mx-auto mb-3 rounded-md"></div>
              <div className="bg-gray-300 h-4 w-64 mx-auto mb-3 rounded-md"></div>
              <div className="flex justify-center gap-8 my-4">
                <div className="text-center">
                  <div className="bg-gray-300 h-6 w-16 mx-auto rounded-md"></div>
                  <div className="bg-gray-300 h-4 w-16 mx-auto mt-1 rounded-md"></div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-300 h-6 w-16 mx-auto rounded-md"></div>
                  <div className="bg-gray-300 h-4 w-16 mx-auto mt-1 rounded-md"></div>
                </div>
              </div>
              <div className="inline-block px-8 py-3 bg-gray-300 rounded-full w-32 mx-auto h-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinksSkeleton;
