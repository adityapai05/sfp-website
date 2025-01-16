const About = () => {
  return (
    <section id="about">
      <div className="mt-14 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-5">About Me</h2>
          <div className="w-24 h-1 bg-[#ff5722] mx-auto mb-12"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto w-[85%] lg:w-[75%]">
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px]">
              <h3 className="text-2xl font-bold mb-4">
                Welcome to My Kitchen!
              </h3>
              <p>
                I'm Sangeeta Pai, and my passion lies in making cooking an
                enjoyable and accessible experience for everyone. With years of
                culinary expertise, I bring you authentic recipes that blend
                traditional techniques with modern twists.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:translate-y-[-5px]">
                <i className="fas fa-users text-4xl text-[#ff5722] mb-2"></i>
                <h4 className="text-lg font-bold">5K+</h4>
                <p>Community Members</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:translate-y-[-5px]">
                <i className="fas fa-video text-4xl text-[#ff5722] mb-2"></i>
                <h4 className="text-lg font-bold">200+</h4>
                <p>Video Recipes</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white p-[2.2rem] rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] flex items-center gap-4">
              <i className="fas fa-utensils text-4xl text-[#ff5722]"></i>
              <div>
                <h4 className="text-lg font-bold">Culinary Expertise</h4>
                <p>
                  From traditional Indian delicacies to innovative fusion
                  dishes, I bring you recipes that are both authentic and
                  creative.
                </p>
              </div>
            </div>

            <div className="bg-white p-[2.2rem] rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] flex items-center gap-4">
              <i className="fas fa-heart text-4xl text-[#ff5722]"></i>
              <div>
                <h4 className="text-lg font-bold">Made with Love</h4>
                <p>
                  Every recipe is crafted with care, using fresh and healthy
                  ingredients to ensure your dishes are not just delicious but
                  also nourishing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
