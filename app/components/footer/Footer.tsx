import React from "react";
import MotionWrapper from "../common/MotionWrapper";
import RedButtonInsights from "../common/RedButtonInsights";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="w-[95%] sm:w-[95%] xl:w-[90%] max-w-350 mx-auto py-12 sm:py-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-[4.7rem]">
          {/* LEFT SIDE — Heading + Description */}
          <div>
            <MotionWrapper>
              <h2 className="section-title font-cormorant mb-6 ">
                Let's Discuss <br /> Your Vision With Us
              </h2>
            </MotionWrapper>

            <MotionWrapper>
              <p className="para-text max-w-137.5 font-inter text-[#7B7B7B]">
                Elixir Homes stands as a symbol of refined architecture and
                uncompromised quality.
              </p>
            </MotionWrapper>
          </div>

          {/* RIGHT SIDE — Button */}
          <MotionWrapper className="flex justify-start items-start lg:justify-end lg:items-end w-full">
            {/* MOBILE — Full width */}
            <div className="w-full md:hidden">
              <RedButtonInsights
                text="BOOK A VISIT"
                link="/contact"
                isWidthFull
                textSize="text-[16px]"
                padding="px-4 py-[1.1rem] lg:py-3"
              />
            </div>

            {/* DESKTOP — Fit width */}
            <div className="hidden md:block">
              <RedButtonInsights
                text="BOOK A VISIT"
                link="/contact"
                textSize="text-[16px]"
                padding="md:!px-8 md:py-3 lg:px-12 lg:py-4 xl:px-20"
              />
            </div>
          </MotionWrapper>

          {/* <MotionWrapper>
                <RedButton text="BOOK A VISIT" link="/insights" />
              </MotionWrapper> */}
        </div>

        <div className="border-t-[0.5px] border-[white] pt-16 md:pt-[6.3rem]">
          {/* LOGO + TEXT (Mobile & Tablet only) */}
          <MotionWrapper className="block lg:hidden mb-10">
            {/* <div className="w-12 h-12 flex items-center justify-center relative mb-4">
              <Image
                src="/flogo.svg"
                alt="Elixir Logo"
                fill
                className="object-contain"
              />
            </div> */}
            {/* <p className="text-white font-inter normal-text">The Ethical Builders</p> */}
          </MotionWrapper>

          {/* DESKTOP */}

          <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-y-16">
            {/* Quick Links 1 */}
            <MotionWrapper className=" md:w-1/2 lg:w-[22%]">
              <h3 className="text-white font-cormorant font-normal text-[20px] mb-6 md:mb-12 underline decoration-1 uppercase">
                Quick Links
              </h3>
              <ul className="space-y-5">
                <li>
                  <a href="" className="text-white para-text font-inter">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-white para-text font-inter">
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-white para-text font-inter"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-white para-text font-inter"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/testimonials"
                    className="text-white para-text font-inter"
                  >
                    Testimonial
                  </a>
                </li>
              </ul>
            </MotionWrapper>

            {/* Quick Links 2 */}
            <MotionWrapper className="md:w-1/2 lg:w-[22%]">
              <h3 className="hidden md:block text-white font-cormorant font-normal text-[20px] mb-6 md:mb-12 underline decoration-1 uppercase">
                Quick Links
              </h3>

              <ul className="space-y-5 mt-[3.4rem] md:mt-0">
                <li>
                  <a
                    href="/insights"
                    className="text-white para-text font-inter"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-white para-text font-inter">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white para-text font-inter"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/legal-and-policy"
                    className="text-white para-text font-inter"
                  >
                    Legal and Policy
                  </a>
                </li>
              </ul>
            </MotionWrapper>

            {/* Projects */}
            <MotionWrapper className="md:w-1/2 lg:w-[23%] 2xl:w-[20%]">
              <h3 className="text-white font-cormorant font-normal text-[20px] mb-6 md:mb-12 underline decoration-1 uppercase">
                Projects
              </h3>
              <ul className="space-y-5">
                <li>
                  <a
                    href="/elixir-anfield"
                    className="text-white para-text font-inter"
                  >
                    Elixir Anfield (Ongoing)
                  </a>
                </li>
                <li>
                  <a href="/orchid" className="text-white para-text font-inter">
                    The Orchid (Completed)
                  </a>
                </li>
                <li>
                  <a
                    href="/elixir-akkara-garden"
                    className="text-white para-text font-inter"
                  >
                    Elixir Akkara Gardens (Completed)
                  </a>
                </li>
                <li>
                  <a
                    href="/elixir-manavath-heights"
                    className="text-white para-text font-inter"
                  >
                    Elixir Manavath Heights (Completed)
                  </a>
                </li>
                <li>
                  <a
                    href="/elixir-super-luxury-villas"
                    className="text-white para-text font-inter"
                  >
                    Elixir Super Luxury Villas (Completed)
                  </a>
                </li>
              </ul>
            </MotionWrapper>

            {/* Get in Touch */}
            <MotionWrapper className="hidden md:block w-[60%] md:w-[50%] lg:w-[25%]">
              <h3 className="text-white font-cormorant font-normal text-[20px] mb-6 md:mb-12 underline decoration-1 uppercase">
                Get in Touch
              </h3>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20} // mobile
                    className="text-white size-17 md:size-12 lg:size-15 xl:size-14 -mt-5 md:-mt-2 lg:-mt-4 xl:-mt-3"
                  />

                  <p className="text-white para-text font-inter">
                    Elixir Villas & Apartments Pvt.Ltd Ground Floor (Below SBI
                    Kuttanellur Branch) Kuttanellur P.O, Thrissur, Kerala - 680014
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-white" />
                  <a
                    href="tel:+918946759810"
                    className="text-white para-text font-inter"
                  >
                    +91 9048733355
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-white" />
                  <a
                    href="mailto:info@elixirhomes.com"
                    className="text-white para-text font-inter"
                  >
                    sales@elixirhomes.com
                  </a>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
      {/* <hr className="border-t border-white/10" /> */}

      {/* MOBILE ONLY — GET IN TOUCH */}
      <MotionWrapper className="block md:hidden mt-16 text-center mb-7">
        <h3 className="text-white font-cormorant font-normal text-[20px] mb-6 underline decoration-1 uppercase">
          Get in Touch
        </h3>

        <div className="space-y-4 max-w-md mx-auto">
          {/* Location */}
          <div className=" items-center gap-3">
            <p className="text-white para-text font-inter text-center">
              <span className="font-medium">
                Elixir Villas & Apartments Pvt.Ltd.
              </span>{" "}
              <br />
              Ground Floor (Below SBI Kuttanellur Branch), <br />
              Kuttanellur P.O, Thrissur, Kerala - 680014
            </p>
          </div>

          {/* Phone */}
          <div className="flex justify-center items-center gap-3">
            <Phone size={18} className="text-white" />
            <a
              href="tel:+919048733355"
              className="text-white para-text font-inter"
            >
              +91 9048733355
            </a>
          </div>

          {/* Email */}
          <div className="flex justify-center items-center gap-3">
            <Mail size={18} className="text-white" />
            <a
              href="mailto:sales@elixirhomes.com"
              className="text-white para-text font-inter"
            >
              sales@elixirhomes.com
            </a>
          </div>
        </div>
      </MotionWrapper>

      {/* Large Background Text */}
      <MotionWrapper className="relative overflow-hidden -mb-16 w-[95%] sm:w-[95%] xl:w-[90%] max-w-350 mx-auto border-t border-white/30 sm:border-t-0">
        <div className="text-center mt-5">
          <h2
            className="text-[110px] sm:text-[220px] lg:text-[290px] xl:text-[395px] 2xl:text-[430px] font-bold font-cormorant tracking-wide leading-none text-white/10"
            // style={{
            //   WebkitTextStroke: '1px rgba(255,255,255,0.1)',
            //   userSelect: 'none'
            // }}
          >
            ELIXIR
          </h2>
        </div>
      </MotionWrapper>

      {/* Bottom Bar */}
      <MotionWrapper>
        <div className="w-[95%] sm:w-[95%] xl:w-[90%] max-w-350 mx-auto py-20">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-center sm:text-left">
            <p className="text-[15px] md:text-[16px] font-inter text-white/60">
              © 2026 Elixir Villas & Apartments Pvt.Ltd. | All Rights Reserved.
            </p>

            <p className="text-[15px] md:text-[16px] font-inter text-white/60 font-extra-light">
              Crafted With ♥ by Woxro
            </p>
          </div>
        </div>
      </MotionWrapper>
    </footer>
  );
}
