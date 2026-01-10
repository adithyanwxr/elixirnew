import MotionWrapper from "../common/MotionWrapper";

const FeaturedProjects = () => {
    return (
        <>
            <div className="w-full bg-white">
                <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-[1400px] mx-auto pt-20 pb-[50px] xl:pt-[6.2rem] xl:pb-[77px]">
                    <div className="">
                        <div className=" h-auto w-full lg:w-[80%] xl:w-[60%] 2xl:w-[60%]">
                            <MotionWrapper>
                            <h5 className="taghead-text text-[#ec1b24] font-inter xl:mt-0.5">
                                featured insights
                            </h5>
                            </MotionWrapper>
                            <MotionWrapper>
                            <h2 className="font-cormorant section-title text-black mt-4 lg:mt-[23px] xl:mt-[23px]">
                                Best Flats in Thrissur: What to Look for Before You Buy
                            </h2>
                            </MotionWrapper>
                            <MotionWrapper>
                            <p className="normal-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-6">
                               If you’re planning to buy your dream home this year, Thrissur is one of the best places to look. Known as the cultural capital of Kerala, the city is fast becoming a hotspot for modern living too. And if you’re searching for the best flats in Thrissur, here are some things to keep in mind before you decide. Let’s walk through them in a simple way, so you know exactly what to expect from your future home.
                            </p>
                            </MotionWrapper>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedProjects;
