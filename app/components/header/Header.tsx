"use client";

import React, { useState } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [showMobileProjects, setShowMobileProjects] = useState(false);

  const pathname = usePathname();

  // Detect pages requiring forced dark header
  const forceDarkHeader =
    pathname.startsWith("/individual-insight") ||
    pathname.startsWith("/insights/") ||
    pathname === "/faq" ||
    pathname === "/legal-and-policy";

  React.useEffect(() => {
    // If forced dark, disable scroll color logic
    if (forceDarkHeader) return;

    const handleScroll = () => {
      const halfScreen = window.innerHeight * 0.5;
      setScrolled(window.scrollY > halfScreen);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceDarkHeader]);

  // Header background logic
  const headerBg = forceDarkHeader
    ? "bg-[#2C2C2C]"
    : scrolled
    ? "bg-[#2C2C2C]"
    : "bg-transparent";

  // Text/icon color
  const textColor = "text-white";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Our Story", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonial", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const projectSubmenu = [
    {
      name: "Elixir Anfield",
      href: "/elixir-anfield",
      image: "/individual-projects/hero1.webp",
      status: "Ongoing Apartment Project",
      statusColor: "text-green-500",
      location:
        "Near Hill Gardens Colony & HiLite Mall, Thrissur - Kuttanellur Main Road",
    },
    {
      name: "Elixir Akkara Gardens",
      href: "/elixir-akkara-garden",
      image: "/completed-projects/Elixir-Akkara-Gardens1.webp",
      status: "Completed Villa Project",
      statusColor: "text-red-500",
      location: "Near Regency Club, Kuttanellur, Thrissur",
    },
    {
      name: "Elixir Super Luxury Villas",
      href: "/elixir-super-luxury-villas",
      image: "/completed-projects/Elixir-Super-Luxury-Villas1.webp",
      status: "Completed Villa Project",
      statusColor: "text-red-500",
      location: "Moscow Road, Anchery, Thrissur",
    },
    {
      name: "Elixir Manavath Heights",
      href: "/elixir-manavath-heights",
      image: "/projects/Elixir-Manavath-Heights1.webp",
      status: "Completed Villa Project",
      statusColor: "text-red-500",
      location: "Vadakkenchery, Alathur, Palakkad",
    },
    {
      name: "The Orchid",
      href: "/orchid",
      image: "/completed-projects/Orchid1.webp",
      status: "Completed Villa Project",
      statusColor: "text-red-500",
      location: "Kuttanellur, Thrissur, Kerala ",
    },
  ];

  // Function to handle dropdown link clicks
  const handleDropdownClick = () => {
    setShowProjectsDropdown(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 flex items-center justify-between w-full 
          transition-all duration-300 
          h-22.5 lg:h-20 xl:h-25 ${headerBg}`}
      >
        <div className="relative w-[90%] sm:w-[90%] xl:w-[86.9%] mx-auto">
          <div className="flex items-center justify-between">
            {/* LEFT SIDE: LOGO + NAV */}
            <div className="w-full flex justify-between items-center gap-7 xl:gap-0 2xl:gap-16">
              <div className="flex font-sans justify-center items-center gap-16">
                {/* LOGO */}
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="w-16 h-16 md:w-12 md:h-12 xl:w-18 xl:h-18 relative block"
                  >
                    <Image
                      src="/hlogo3.svg"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </Link>
                </div>
                <nav className="hidden lg:flex gap-9 xl:gap-0 xl:space-x-12 xl:mr-20 2xl:mr-0">
                  {navItems.map((item) =>
                    item.name === "Projects" ? (
                      <div
                        key={item.name}
                        className="group"
                        onMouseEnter={() => setShowProjectsDropdown(true)}
                        onMouseLeave={() => setShowProjectsDropdown(false)}
                      >
                        <div className="flex items-center gap-1 cursor-pointer">
                          <Link
                            href="/projects"
                            className={`para-text ${textColor} font-[350]! font-inter`}
                          >
                            Projects
                          </Link>
                          <svg
                            className="w-5 h-5 text-white mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`para-text ${textColor} font-[350]! font-inter whitespace-nowrap`}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </nav>
              </div>

              {/* ICONS */}
              {/* HEADER CTA BUTTONS */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4">
                {/* CALL BUTTON */}
                <a
                  href="tel:+919048733355"
                  className="
      xl:px-6 px-4 xl:h-11 lg:h-10 lg:py-0 2xl:h-13 py-3.5
      border border-white/80
      text-white text-[13px] font-sans 2xl:text-sm
      flex items-center gap-3
      hover:bg-white/10
      transition
      whitespace-nowrap
    "
                  aria-label="Call +91 90487 33355"
                >
                  <span>Ring us Now</span>
                  <div className="relative size-4 2xl:w-5 2xl:h-5">
                    <Image
                      src="/call.svg"
                      alt="Call"
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>

                {/* WHATSAPP BUTTON */}
                <a
                  href="https://wa.me/918946759810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      xl:px-6 px-4 xl:h-11 lg:h-10 lg:py-0 2xl:h-13 py-3
      border border-white/80
      text-white text-[13px] font-sans 2xl:text-sm
      flex items-center gap-3
      hover:bg-white/10
      transition
      whitespace-nowrap
    "
                  aria-label="WhatsApp"
                >
                  <span>Send a Message</span>
                  <div className="relative size-5 2xl:w-6 2xl:h-6">
                    <Image
                      src="/whatsapp.svg"
                      alt="WhatsApp"
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* HEADER MOBILE CTA BUTTONS */}
            <div className="flex lg:hidden items-center gap-3 lg:gap-4">
              {/* MOBILE MENU BUTTON */}
              <button
                onClick={toggleMenu}
                className="lg:hidden flex flex-col justify-center gap-2 w-10 h-8"
                aria-label="Open menu"
              >
                <span className="block w-full h-[2px] bg-white"></span>
                <span className="block w-full h-[2px] bg-white"></span>
              </button>
            </div>
          </div>
        </div>

        {/* DROPDOWN MENU */}
        {showProjectsDropdown && (
          <div
            onMouseEnter={() => setShowProjectsDropdown(true)}
            onMouseLeave={() => setShowProjectsDropdown(false)}
            className="fixed top-0 xl:top-14 bg-transparent left-0 right-0 w-screen "
          >
            <div className="w-full mt-15 xl:mt-10 bg-[#1e1e1e] z-40 shadow-2xl">
              <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] mx-auto py-10">
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                  {projectSubmenu.map((project) => (
                    <Link
                      key={project.name}
                      href={project.href}
                      onClick={handleDropdownClick}
                      className="flex items-center gap-4 p-4  hover:bg-white/5 transition"
                    >
                      {/* IMAGE */}
                      <div className="w-30 h-20 relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* TEXT */}
                      <div className="flex-1">
                        <div className="flex items-center gap-5">
                          <p className="text-white font-medium">
                            {project.name}
                          </p>
                          {/* Arrow in circle */}
                          <span
                            className="
                            flex items-center justify-center
                            w-6 h-6
                            rounded-full
                            bg-white/10
                            text-white
                            text-sm
                            transition
                            group-hover:bg-white/20
                          "
                          >
                            <p className="mb-1">→</p>
                          </span>
                        </div>
                        <p className={`text-sm mt-5 ${project.statusColor}`}>
                          {project.status}
                        </p>
                        <p className="text-xs text-white/60 mt-1">
                          {project.location}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={toggleMenu}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-full bg-[#1e1e1e]
      transform transition-transform duration-300
      ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      overflow-y-auto`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-6">
            <Image src="/hlogo3.svg" alt="Logo" width={56} height={56} />
            <button
              onClick={toggleMenu}
              className="text-white uppercase tracking-wide text-sm border-b border-white/40"
            >
              Close
            </button>
          </div>

          {/* HERO TEXT */}
          <div className="px-6 pt-10">
            <h2 className="text-white text-[36px] leading-tight font-serif">
              “Crafting Spaces <br /> Beyond Ordinary”
            </h2>
          </div>

          {/* CTA BUTTONS */}
          <div className="px-6 mt-12 flex gap-4">
            {/* 40% */}
            <a
              href="tel:+919048733355"
              className="basis-[40%] text-center py-4 bg-[#3a3a3a] text-white text-sm"
            >
              Ring us Now
            </a>

            {/* 60% */}
            <a
              href="https://wa.me/918946759810"
              className="basis-[60%] py-4 bg-[#3a3a3a] text-white text-sm flex items-center justify-center gap-2"
            >
              Send a Message
              <div className="relative size-5 2xl:w-6 2xl:h-6">
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>

          <hr className="mt-6 mb-12 border-white/20 mx-6" />

          {/* NAV LINKS */}
          <div className="px-6 space-y-6 text-white text-lg grid grid-cols-1">
            <Link href="/about" onClick={toggleMenu}>
              Our Story
            </Link>
            <Link href="/insights" onClick={toggleMenu}>
              Insights
            </Link>
            <Link href="/gallery" onClick={toggleMenu}>
              Gallery
            </Link>

            {/* PROJECTS TITLE */}
            <Link
              href="/projects"
              onClick={toggleMenu}
              className="text-white text-lg font-medium  inline-block"
            >
              Our Projects
            </Link>
          </div>

          {/* PROJECT LIST – ALWAYS VISIBLE */}
          <div className="px-6 mt-8 space-y-12">
            {projectSubmenu.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                onClick={toggleMenu}
                className="flex gap-4 items-start"
              >
                {/* IMAGE */}
                <div className="w-22.5 h-20 relative shrink-0">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium">{project.name}</p>
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60">
                      →
                    </span>
                  </div>

                  <p className={`text-sm mt-1 ${project.statusColor}`}>
                    {project.status}
                  </p>

                  <p className="text-xs text-white/60 mt-1">
                    {project.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* UAE SECTION */}
          <div className="px-6 mt-24 relative">
            <h3 className="text-white text-xl mb-6 leading-tight font-serif font-light ">
              For UAE Sales & Assistance
            </h3>

            <p className="text-white/60 text-[16px] mb-8  pl-6 border-l-2 border-white/30 ">
              Curious about our homes? We’re here to support you every step of
              the way.
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-12.5 h-12.5 rounded-full overflow-hidden">
                <Image
                  src="/contact/person.webp"
                  alt="UAE Contact"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Phone */}
              <a
                href="tel:+971551698568"
                className="flex items-center gap-3 text-white text-lg"
              >
                <Phone size={18} className="text-white/80" />
                <span className="text-[20px]">+971551698568</span>
              </a>
            </div>
          </div>

          <hr className="mt-10 border-white/20 mx-6" />
          {/* FOOTER */}
          <div className="mt-5 py-6 text-center text-white/40 text-sm">
            © 2026 Elixir Villas & Apartments Pvt.Ltd.
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
