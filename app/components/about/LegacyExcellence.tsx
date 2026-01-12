
import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

const LegacyExcellence = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto pt-20 pb-20 lg:pt-20 lg:pb-20 xl:pt-50 xl:pb-50">
          <div className="w-full h-fit flex justify-between">
            <div className="w-full h-auto  lg:w-[85%] xl:w-210 2xl:w-185 mb-10 md:mb-0">
               <MotionWrapper>
              <h5 className="taghead-text elixir-red font-inter xl:mt-0.5">
                OUR VALUES
              </h5>
               </MotionWrapper>
                <MotionWrapper>
              <h2 className="font-cormorant section-title elixir-gray mt-4 lg:mt-5.75 xl:mt-5.75">
                A Legacy of Architectural Excellence
              </h2>
               </MotionWrapper>
                <MotionWrapper>
              <p className="para-text font-inter  text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-10.5">
                Our strength lies in our values. We proudly call ourselves “The Ethical Builder”- not as a marketing phrase, but as a promise we live by. We may not aim to be the largest, but we strive every day to be the most trustworthy. 
              </p>
               </MotionWrapper>
            </div>
          </div>

          <MotionWrapper className="relative grid  md:grid-cols-2 lg:grid-cols-4 mt-5 md:mt-20 lg:gap-x-7.5 xl:gap-x-18 gap-y-18 lg:gap-y-0">

            <span className="hidden lg:block absolute top-22.5 h-[0.5px] w-full bg-[#ACACAC]"></span>

            <div className="col-span-1">
              <div className="w-12 h-12 relative">
                <Image
                  src="/about/craft.svg"
                  alt="Legacy Image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <h6 className="regular-heading font-cormorant mt-7  lg:mt-13.75 text-[#1b1a1f]">Craftsmanship</h6>
              <p className="normal-text text-[#7B7B7B] font-inter mt-2.75">Craftsmanship shapes every Elixir home-strong foundations, comfortable spaces, elegant finishes-all crafted with care to last.</p>
            </div>
            <div className="col-span-1">
              <div className="w-12 h-12 relative">
                <Image
                  src="/about/shield.svg"
                  alt="Legacy Image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <h6 className="regular-heading font-cormorant  mt-7  lg:mt-13.75 text-[#1b1a1f]">Integrity</h6>
              <p className="normal-text text-[#7B7B7B] font-inter mt-2.75">Integrity guides all we do-honest communication, transparent steps, and promises kept. That’s why customers trust us.</p>
            </div>
            <div className="col-span-1">
              <div className="w-12 h-12 relative">
                <Image
                  src="/about/bulb.svg"
                  alt="Legacy Image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <h6 className="regular-heading font-cormorant  mt-7  lg:mt-13.75 text-[#1b1a1f]">Innovation</h6>
              <p className="normal-text text-[#7B7B7B] font-inter mt-2.75">Innovation shapes how we design and build-evolving with modern lifestyles and smart solutions to create future-ready homes.</p>
            </div>
            <div className="col-span-1">
              <div className="w-12 h-12 relative">
                <Image
                  src="/about/badge.svg"
                  alt="Legacy Image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <h6 className="regular-heading font-cormorant  mt-7  lg:mt-13.75 text-[#1b1a1f]">Quality</h6>
              <p className="normal-text text-[#7B7B7B] font-inter mt-2.75">Quality defines every Elixir home-through fine materials, proven practices, and lasting strength. For us, quality isn’t optional; it’s a promise.</p>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </>
  );
};

export default LegacyExcellence;
