import RedButton from "../common/RedButton";
import GalleryCarousal from "./GalleryCarousal";
import MotionWrapper from "../common/MotionWrapper";

const HomeGallery = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px] mx-auto pt-20 pb-0 lg:pt-20 lg:pb-10 xl:pt-[200px] xl:pb-[77px]">
          <div className="w-full h-fit flex justify-between md:mb-20 lg:mb-0">
            <div className="w-full h-auto md:w-[48%] lg:w-[45%] xl:w-[740px]  mb-10 md:mb-0">
              <MotionWrapper>
                <h5 className="taghead-text elixir-red font-inter xl:mt-0.5">
                  gallery
                </h5>
              </MotionWrapper>
              <MotionWrapper>
                <h2 className="font-cormorant section-title elixir-gray mt-4 lg:mt-[23px] xl:mt-[23px]">
                  A Glimpse Into Elegance
                </h2>
              </MotionWrapper>
              <MotionWrapper>
                <p className="para-text font-inter  text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-[42px]">
                  Step into the world of Elixir Homes through our gallery, where every image reflects our commitment to quality and fine living. From architectural brilliance to crafted interiors, each frame showcases excellence. Explore the spaces where your dream home begins.
                </p>
              </MotionWrapper>
            </div>
            <MotionWrapper>
              <div className="hidden relative md:flex items-end justify-end min-h-full md:w-[48%] lg:w-[50%] xl:w-[418.5px]  ">
                <RedButton text="VIEW GALLERY" link="/gallery" />
              </div>
            </MotionWrapper>
          </div>
        </div>
        {/* Projects Showcase Section  */}
        <GalleryCarousal />
      </div>
    </>
  );
};

export default HomeGallery;
