import { Link } from "react-router-dom";
import hero from "../../assets/sangeetabg1.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-20 min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #5cfafa 50%, #ff5722 50%)",
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        {/* Left Section (Image) */}
        <div className="flex-1 flex justify-center items-center p-8">
          <div className="w-[300px] h-[500px] lg:w-[400px] lg:h-[600px] rounded-[100%] overflow-hidden shadow-lg bg-white">
            <img
              src={hero}
              alt="Sangeeta Pai"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section (Text) */}
        <div className="flex-1 p-10 xl:mr-10 bg-[#f0f8ff] rounded-xl shadow-lg text-center lg:text-left mb-5">
          <h1 className="text-[3rem] lg:text-[4rem] font-[1000] mb-4 leading-none text-[#4a2f23]">
            Explore a <br />
            <span className="text-[#ff5722]">World of Flavours.</span>
          </h1>
          <p className="lg:text-lg text-[#4a2f23] font-light text-justify">
            Welcome to Sangeeta's Food Paradise, a blog dedicated to bringing
            you delicious recipes from around the world! Whether you're craving
            traditional Indian dishes or new fusion ideas, you'll find
            inspiration here.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              to="/recipes"
              className="inline-block bg-[#ff5722] text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-[#e64a19] transition-colors duration-300 transform hover:scale-105"
            >
              <span className="mr-2">Browse Recipes</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
