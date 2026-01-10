"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RedButtonInsights from "../common/RedButtonInsights";
import MotionWrapper from "../common/MotionWrapper";
import { usePathname } from "next/navigation";

export default function ContactSection() {
  const pathname = usePathname();

  // last part of URL
  const pageSlug = pathname.split("/").filter(Boolean).pop();

  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  // Auto clear message after 3 sec
  useEffect(() => {
    if (!formMessage) return;
    const timer = setTimeout(() => {
      setFormMessage("");
      setMessageType("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [formMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (
        form.elements.namedItem("email") as HTMLInputElement
      ).value.trim(),
      phone: (
        form.elements.namedItem("phone") as HTMLInputElement
      ).value.trim(),
      inquiry: (
        form.elements.namedItem("inquiry") as HTMLSelectElement
      ).value.trim(),
      message: (
        form.elements.namedItem("message") as HTMLTextAreaElement
      )?.value.trim(),
      pageSlug, // 👈 THIS is the key
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.inquiry) {
      setMessageType("error");
      setFormMessage("⚠ Please fill all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setMessageType("success");
      setFormMessage("Request submitted successfully!");
      form.reset();
    } catch {
      setMessageType("error");
      setFormMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full bg-white  py-20 md:py-[9.4rem]">
      <div className="w-[95%] sm:w-[90%] xl:w-[87%] max-w-350 mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[50%] flex flex-col">
          <MotionWrapper>
            <p className="taghead-text text-[#ec1b24] font-inter xl:mt-0.5">
              CONTACT US
            </p>
          </MotionWrapper>

          <MotionWrapper>
            <h1 className="font-cormorant section-title text-black mt-4 lg:mt-5.75 xl:mt-5.75">
              Get in Touch
            </h1>
          </MotionWrapper>

          <MotionWrapper>
            <p className="text-[18px] font-310 font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-10 lg:w-[81%] xl:w-[86%]">
              Your dream home deserves the right beginning. Connect with Elixir
              Homes for expert guidance, project details, and personalized
              assistance. Our team is always ready to serve you with clarity,
              care, and commitment.
            </p>
          </MotionWrapper>

          <div className="flex flex-col space-y-7 text-black mt-[3.9rem]">
            {/* ADDRESS */}
            <MotionWrapper className="flex items-start gap-4">
              <Image
                src="/project-detailed/location.svg"
                alt="Location Icon"
                width={30}
                height={30}
                className="mt-1"
              />
              <p className="text-[16px] md:text-[18px] leading-[1.6] font-poppins text-[#2c2c2c]">
                Elixir Homes (Elixir Villas & Apartments Pvt.Ltd.)
                <br /> Ground Floor (Below SBI Kuttanellur Branch)
                <br /> Kuttanellur P.O, Thrissur, Kerala-680014
              </p>
            </MotionWrapper>

            {/* EMAIL */}
            <MotionWrapper className="flex items-center gap-4">
              <Image
                src="/project-detailed/mail.svg"
                alt="Mail Icon"
                width={30}
                height={30}
              />
              <p className="text-[18px] leading-relaxed font-poppins text-[#2c2c2c]">
                sales@elixirhomes.com
              </p>
            </MotionWrapper>

            {/* PHONE */}
            <MotionWrapper className="flex items-center gap-4">
              <Image
                src="/project-detailed/call.svg"
                alt="Phone Icon"
                width={30}
                height={30}
              />
              <p className="text-[18px] leading-relaxed font-poppins text-[#2c2c2c]">
                +91 90487 33355
              </p>
            </MotionWrapper>

            {/* INTERNATIONAL SALES CARD */}
            <div
              className="w-full xl:w-130 bg-[#F5F5F5] mt-7 p-6 
  flex flex-col xl:flex-row items-center xl:items-start gap-7"
            >
              {/* LEFT SIDE — PHOTO + NAME + PHONE */}
              <div className="flex flex-col items-center gap-4 shrink-0">
                {/* PROFILE IMAGE */}
                <MotionWrapper className="w-27.5 h-27.5 rounded-full overflow-hidden">
                  <Image
                    src="/contact/person.webp"
                    alt="UAE Associate"
                    width={110}
                    height={110}
                    className="object-cover"
                  />
                </MotionWrapper>

                {/* NAME + PHONE */}
                <div className="flex flex-col text-center mt-2">
                  <MotionWrapper>
                    <p className="text-[18px] font-cormorant font-medium text-[#EC1B24]">
                      UAE Associate
                    </p>
                  </MotionWrapper>

                  <MotionWrapper className="flex items-center gap-1 mt-1">
                    <Image
                      src="/contact/call.svg" // your existing call icon
                      alt="Call Icon"
                      width={24}
                      height={24}
                      className="opacity-80"
                    />
                    <p className="text-[16px] text-[#2c2c2c] font-inter">
                      +971 55 1698568
                    </p>
                  </MotionWrapper>
                </div>
              </div>

              {/* DIVIDING LINE */}
              <MotionWrapper>
                <div className="hidden xl:block w-px h-47.5 bg-gray-300"></div>
              </MotionWrapper>

              {/* RIGHT SIDE — TEXT CONTENT */}
              <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
  <MotionWrapper>
    <p className="text-[28px] font-cormorant text-black leading-[1.3] text-center md:text-left">
      For Sales Assistance
    </p>
  </MotionWrapper>

  <MotionWrapper>
    <p className="text-[16px] font-inter mt-5 text-[#7b7b7b] leading-[1.8] text-center md:text-left">
      Curious about our homes? We’re here to support you every step of the way.
    </p>
  </MotionWrapper>
</div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          className="w-full lg:w-[55%] flex flex-col space-y-7 mt-16"
          onSubmit={handleSubmit}
        >
          {/* NAME */}
          <MotionWrapper className="flex flex-col space-y-3">
            <label className="text-sm font-medium text-black">Name *</label>
            <input
              name="name"
              required
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full border border-gray-300 border-b border-b-[#7b7b7b] px-4 py-2.75 mt-1 
              focus:outline-none placeholder:text-[12px] placeholder:text-[#7b7b7b] text-black"
            />
          </MotionWrapper>

          {/* EMAIL */}
          <MotionWrapper className="flex flex-col space-y-3">
            <label className="text-sm font-medium text-black">Email *</label>
            <input
              name="email"
              required
              type="email"
              placeholder="mail@example.com"
              className="w-full border border-gray-300 border-b border-b-[#7b7b7b] px-4 py-2.75 mt-1 
              focus:outline-none placeholder:text-[12px] placeholder:text-[#7b7b7b] text-black"
            />
          </MotionWrapper>

          {/* PHONE */}
          <MotionWrapper className="flex flex-col space-y-3">
            <label className="text-sm font-medium text-black">Phone *</label>
            <input
              name="phone"
              required
              type="text"
              pattern="[0-9]{10}"
              minLength={10}
              maxLength={10}
              placeholder="+91 XXXXXXXXXX"
              className="w-full border border-gray-300 border-b border-b-[#7b7b7b] px-4 py-2.75 mt-1 
              focus:outline-none placeholder:text-[12px] placeholder:text-[#7b7b7b] text-black"
            />
          </MotionWrapper>

          {/* SELECT */}
          <MotionWrapper className="flex flex-col space-y-3">
            <label className="text-sm font-medium text-black">
              Project / Inquiry Type *
            </label>

            <div className="relative">
              <select
                name="inquiry"
                required
                className="w-full appearance-none border border-gray-300 border-b border-b-[#7b7b7b]
                px-4 py-3.25 mt-1 bg-white focus:outline-none cursor-pointer text-[#7b7b7b] text-[15px]"
                defaultValue=""
                onChange={(e) => {
                  e.target.classList.remove("text-[#7b7b7b]");
                  e.target.classList.add("text-black");
                }}
              >
                <option value="" disabled>
                   Project/Inquiry
                </option>
                <option>General Enquiry</option>
                <option>Book a Visit</option>
                <option>Career</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1.1"
                >
                  <path d="M4 8l6 6 6-6" />
                </svg>
              </div>
            </div>
          </MotionWrapper>

          {/* MESSAGE */}
          <MotionWrapper className="flex flex-col space-y-3">
            <label className="text-sm font-medium text-black">Message</label>
            <textarea
              name="message"
              placeholder="Type message"
              className="w-full border border-gray-300 border-b h-[150] border-b-[#7b7b7b]
              px-4 py-2.75 mt-1 focus:outline-none placeholder:text-[12px] placeholder:text-[#7b7b7b] text-black"
            />
          </MotionWrapper>

          {/* BUTTON */}
          <MotionWrapper className="w-full mt-7">
            <RedButtonInsights
              text="REQUEST A CALL BACK"
              isWidthFull
              textSize="text-[16px]"
              padding="px-4 py-3"
              paddingResponsive="md:px-60 lg:px-4 xl:px-16 xl:py-[1.1rem]"
            />
          </MotionWrapper>

          {/* SUCCESS / ERROR MESSAGE */}
          {formMessage && (
            <p
              className={`text-center text-[15px] mt-3 ${
                messageType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {formMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
