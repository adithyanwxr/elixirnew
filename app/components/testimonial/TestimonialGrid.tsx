"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

const testimonials = [
    {
        text: `“ We own a 3BHK at The Orchid in Thrissur. While searching for an affordable yet elegant home in Kuttanellur, most options were either overpriced or in unsuitable locations. A friend recommended Elixir, and it was the best decision we made. Our dream home was handed over in 2014, and we remain extremely satisfied with the quality, professionalism, and timely delivery that set Elixir apart from other builders.”`,
        name: "Vijith Nambiar",
        role: "Film Director & Musician",
        image: "/home/t4.svg",
        quoteIcon: "/testimonial/quoteicon.svg",
    },
    {
        text: `“ We had many choices when we looked for affordable flats with the required amenities. But we stumbled at Elixir Homes because of its ideal layout and utilities. The wiring duct, and drainage system were all just perfect. Moreover, the dealings were super perfect. I didn’t have to worry about a thing because Elixir Homes is an Ethical Builder. ”`,
        name: "Joby Payyappilly",
        role: "Josons Hardwares, Chalakudy",
        image: "/home/t2.svg",
        quoteIcon: "/testimonial/quoteicon.svg",
    },
    {
        text: `“ Our experience with Elixir Homes was truly smooth and reassuring. Their excellent communication, detailed designs, and caring customer service made the entire process completely stress-free ”`,
        name: "Atfel Dcunha & family",
        role: "Abhu Dhabi, UAE",
        image: "/home/t3.svg",
        quoteIcon: "/testimonial/quoteicon.svg",
    },
    {
        text: `“ Their dedication to quality construction is evident in the meticulous attention to detail, use of premium materials and adherence to strict construction standards. Also the location selection is also very good.”`,
        name: "Rison Jose",
        role: "",
        image: "/home/t5.svg",
        quoteIcon: "/testimonial/quoteicon.svg",
    },
    {
        text: `“ We had a great experience with the Elixir team- very prompt, professional, and committed to excellent quality. Their flats and villas are spacious, with well-designed common areas and great amenities. Highly recommended for anyone looking for a perfect home! ”`,
        name: "Mathew francis",
        role: "",
        image: "/home/t1.svg",
        quoteIcon: "/testimonial/quoteicon.svg",
    },
    {
        text: `“We are very happy customers of Elixir Homes’ first project, The Orchid. The peaceful ambience and well-designed spaces have made our home truly special. My wife especially loves the atmosphere and comfort it provides. God bless the entire team at Elixir Homes! ”`,
        name: "Nikhil Ashok",
        role: "",
        image: "/home/t6.svg",
        quoteIcon: "/testimonial/quoteicon.svg",
    },
    {
        text: `“ I was completely impressed with their professionalism and the exceptional customer service they consistently provided throughout the process. ”`,
        name: "Ashna Dan",
        role: "",
        image: "/home/t8.svg",
        quoteIcon: "/testimonial/quoteicon.svg",
    },
    {
        text: `“ They have delivered so many amazing projects, and for anyone looking to build a home, they are truly the kind of builder you can trust.”`,
        name: "Savio V Jose",
        role: "",
        image: "/home/t7.svg",
        quoteIcon: "/testimonial/quoteicon.svg",
    },
];


interface TestimonialItem {
    text: string;
    name: string;
    role: string;
    image: string;
    quoteIcon: string;
}


export default function TestimonialGrid() {
    return (
        <section className="w-full bg-white pt-[1.7rem] pb-24">
            <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto">

                {/* DESKTOP + TABLET GRID */}
                <div className="hidden lg:grid grid-cols-2 gap-x-10 gap-y-20">
                    {testimonials.map((item, i) => (
                        <TestimonialCard key={i} item={item} />
                    ))}
                </div>

                {/* MOBILE SCROLL → horizontal 🎉 */}
                <div className="lg:hidden flex overflow-x-auto gap-6 scrollbar-hide pt-4 pb-4">
                    {testimonials.map((item, i) => (
                        <div key={i} className="min-w-[90%]">
                            <TestimonialCard item={item} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {

    return (
        <div className="bg-[#373833] p-10 xl:pt-30 xl:pb-[5.6rem] xl:px-28 flex flex-col justify-between h-137.5  md:h-182.5  lg:h-auto ">

            {/* CUSTOM QUOTE ICON IMAGE */}
            <MotionWrapper className=" mb-8 md:mb-34">
                <Image
                    src={item.quoteIcon}
                    alt="quote"
                    width={80}
                    height={80}
                    className="opacity-80"
                />
            </MotionWrapper>

            {/* TEXT */}
            <MotionWrapper>
            <p className="text-white font-cormorant italic text-[18px] md:text-[24px] leading-normal">
                {item.text}
            </p>
            </MotionWrapper>

            {/* PROFILE */}
            <MotionWrapper className="flex items-center gap-3 mt-12 md:mt-[8.2rem]">
                <Image
                    src={item.image}
                    alt="user"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                />
                <div>
                    <h4 className="text-white text-[16px] md:text-[18px] font-medium font-poppins">{item.name}</h4>
                    <p className="text-[#cacaca] text-[16px] md:text-[18px] mt-1">{item.role}</p>
                </div>
            </MotionWrapper>

        </div>
    );
}
