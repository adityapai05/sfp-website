import { useState, useEffect } from "react";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import SocialLinksSkeleton from "../skeletons/SocialLinksSkeleton";
import conf from "../../conf/conf";

const SocialLinks = () => {
  const [youtubeData, setYoutubeData] = useState<any>(null);
  const apiKey = conf.youtubeApiKey;
  const channelId = conf.youtubeChannelId;

  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
        );
        const data = await response.json();
        console.log(data);
        if (data.items.length > 0) {
          setYoutubeData(data.items[0].statistics);
        }
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
      }
    };

    fetchYouTubeData();
  }, []);

  if (!youtubeData) {
    return <SocialLinksSkeleton />;
  }

  return (
    <section id="follow">
      <div className="mt-12 mx-auto pb-12 w-[80%] lg:w-[75%]">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-5">Stay Updated</h2>
          <div className="w-24 h-1 bg-[#ff5722] mx-auto mb-12"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px]">
            <span className="mb-4 flex justify-center">
              <img
                src={youtube}
                alt="YouTube"
                className="w-[90px] h-[90px] object-contain"
              />
            </span>
            <h3 className="text-3xl mb-3 font-bold">YouTube</h3>
            <p className="text-base">
              Long-form recipes and expert cooking tips
            </p>
            <div className="flex justify-center gap-8 my-4">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {youtubeData.subscriberCount}
                </div>
                <div className="text-sm">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {youtubeData.videoCount}
                </div>
                <div className="text-sm">Videos</div>
              </div>
            </div>
            <a
              href="https://youtube.com/@sangeetasfoodparadise"
              className="inline-block px-8 py-3 bg-[#ff5722] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#4a2f23]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px]">
            <span className="mb-4 flex justify-center">
              <img
                src={instagram}
                alt="Instagram"
                className="w-[90px] h-[90px] object-contain"
              />
            </span>
            <h3 className="text-3xl mb-3 font-bold">Instagram</h3>
            <p className="text-base">
              Mouthwatering food pics and quick recipes
            </p>
            <div className="flex justify-center gap-8 my-4">
              <div className="text-center">
                <div className="text-2xl font-bold">1064</div>
                <div className="text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">77</div>
                <div className="text-sm">Posts</div>
              </div>
            </div>
            <a
              href="https://www.instagram.com/sangeeta_food_paradise"
              className="inline-block px-8 py-3 bg-[#ff5722] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#4a2f23]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
