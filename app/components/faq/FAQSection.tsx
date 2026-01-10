"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    items: FAQItem[];
}

const faqData: FAQSection[] = [
    {
        title: "General Inquiries",
        items: [
            {
                question: "What does Elixir Homes do? ",
                answer:
                    " Elixir Homes is a real estate development company specializing in premium residential and select commercial projects with a strong focus on quality, design, and long-term value. ",
            },
            { question: "Where are your projects located? ", answer: " Our projects are primarily located in and around Thrissur and other key developing locations in Kerala." },
        ],
    },
    {
        title: "Booking & Purchase",
        items: [
            { question: "How can I book a unit or plot?", answer: "You can book a unit by contacting our sales team, visiting our office or project site, and completing the booking form with the initial payment. " },
            { question: "What documents are needed?", answer: "Basic KYC documents such as ID proof, address proof, and PAN card are required at the time of booking. " },
            { question: "Do you assist with home loans? ", answer: " Yes, we provide assistance and guidance for home loans through leading banks and financial institutions. " },
        ],
    },
    {
        title: "Payments & Pricing",
        items: [
            { question: "Is the pricing negotiable? ", answer: "Prices are structured competitively, and negotiations may be considered based on availability and payment terms. " },
            { question: "What payment plans are offered? ", answer: "We offer flexible construction-linked and milestone-based payment plans depending on the project. " },
            { question: "Are there any hidden charges?", answer: "No. All costs are transparently communicated upfront with complete cost breakup and statutory charges. " },
        ],
    },
    {
        title: "Project Details",
        items: [
            { question: "When will the project be completed? ", answer: "Project completion timelines are shared at the time of booking and are adhered to through strict project management. " },
            { question: "Are amenities included in the project? ", answer: " Yes, all approved amenities are included as per the project specifications mentioned in the agreement. " },
            { question: "Is the project RERA-approved? ", answer: "Yes, all applicable projects are developed in compliance with RERA and local regulatory authorities. " },
        ],
    },
];

function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <>
            <div className="w-full bg-white">
                <div className="w-[95%] sm:w-[90%] xl:w-[86.9%] max-w-350 mx-auto md:py-40 py-28 xl:pt-66 xl:pb-38">
                    <div className="h-auto w-full">
                        <MotionWrapper>
                            <h2 className="font-cormorant section-title text-black mt-4 lg:mt-5.75 xl:mt-5.75 lg:w-[80%] xl:w-[60%] 2xl:w-[55%]">
                                Frequently Asked Questions
                            </h2>
                        </MotionWrapper>
                        <MotionWrapper>
                            <p className="para-text font-inter text-[#7B7B7B] mt-8 lg:mt-7 xl:mt-10">
                                A transparent and customer-first approach defines everything we do at Elixir Homes. This FAQ section is designed to give you clear, reliable information about our projects, processes, and services to help you make confident decisions.
                            </p>
                        </MotionWrapper>
                    </div>

                    <MotionWrapper><hr className="mt-9 border-gray-400 mb-[9.2rem]" /></MotionWrapper>

                    {faqData.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="mb-12 mt-20">
                            <MotionWrapper>
                                <h2 className="text-[28px] font-medium font-cormorant text-[#1b1a1f] mb-7 ">
                                    {section.title}
                                </h2>
                            </MotionWrapper>

                            <MotionWrapper>
                                {section.items.map((item, itemIdx) => {
                                    const id = `${sectionIdx}-${itemIdx}`;
                                    const isOpen = openIndex === id;

                                    return (
                                        <div
                                            key={id}   //  KEY ADDED HERE
                                            className={`transition-all 
          ${isOpen ? "bg-[#f5f5f5]" : "bg-transparent"} 
          p-0 `}
                                        >
                                            <div className="border-b border-gray-300 pt-6 pb-4 px-4 cursor-pointer">
                                                <button
                                                    onClick={() => toggle(id)}
                                                    className="w-full flex items-center justify-between"
                                                >

                                                    <span className="para-text text-[#2C2C2C]">
                                                        {item.question}
                                                    </span>

                                                    {isOpen ? (
                                                        <Minus size={16} className="text-gray-500" />
                                                    ) : (
                                                        <Plus size={16} className="text-gray-500" />
                                                    )}
                                                </button>

                                                {isOpen && (
                                                    <p className="normal-text text-gray-600 mt-4 pr-6">
                                                        {item.answer}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </MotionWrapper>


                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default FAQPage;
