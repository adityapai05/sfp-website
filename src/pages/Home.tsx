import About from "../components/home-page/About";
import Hero from "../components/home-page/Hero";
import RecipeCategories from "../components/home-page/RecipeCategories";
import SocialLinks from "../components/home-page/SocialLinks";

const  Home = () => {
  return (
    <div className="bg-[#5cfafa] text-[#4a2f23]">
      <Hero />
      <RecipeCategories />
      <About />
      <SocialLinks />
      {/* <Contact /> */}
    </div>
  );
}

export default Home;
