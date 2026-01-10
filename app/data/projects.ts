export interface ProjectType {
  id: number;
  title: string;
  location: string;
  status: string;
  type: string;
  description: string;
  images: string[];
  testimonial: string;
  profile: {
    name: string;
    role: string;
    image: string;
  };
  route: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Elixir Akkara Gardens",
    location: "Near Regency Club, Kuttanellur, Kerala",
    status: "Delivered Successfully",
    type: "12 villas/villa  ",
    description:
      "Elixir Akkara Gardens is a bespoke luxury villa and villa-plot community located at Anchery, Kuttanellur, Thrissur. Spread across 1.20 acres with 12 exclusive villas/plots, the project blends privacy, sustainability, and refined living. ",
    images: ["/completed-projects/Elixir-Akkara-Gardens1.webp", "/completed-projects/Elixir-Akkara-Gardens1.webp", "/completed-projects/Elixir-Akkara-Gardens1.webp", "/completed-projects/Elixir-Akkara-Gardens1.webp"],
    testimonial:
      "We own a 3BHK apartment at “The Orchid” of Elixir in Thrissur. I wanted to buy a property in Kuttanellur, Thrissur road. In search of renowned home builders and developers, for affordable yet elegant apartments, most of them showed me expensive properties. Sometimes, locations were not as per my requirement. Later on, my friend suggested Elixir. Because of that precise decision, I bought my dream home which was handed over to us in 2014. Today I feel much happy &amp; satisfied with my decision of taking a flat in Elixir Apartment. It’s the quality of their work, professionalism and delivery on the exact time makes them stand out from other builders.",
    profile: {
      name: "Vijith Nambiar",
      role: "Film Director & Musician",
      image: "/completed-projects/testimonial.webp",
    },
     route: "/elixir-akkara-garden"
  },
  {
    id: 2,
    title: "The Orchid",
    location: "Kuttanellur, Thrissur, Kerala ",
    status: "Delivered Successfully",
    type: "2/3/4/5 BHK",
    description:
      "The “Orchid” was one of our signature projects. The Orchid is all about luxury and comfort. We had put all our focus to provide extreme comfort as well as luxury via the project “The Orchid”. This signature work is situated at the heart of kuttanellur, which is one of the best residential areas in Thrissur. ",
    images: ["/completed-projects/Orchid1.webp", "/projects/hero.webp", "/projects/hero.webp", "/projects/hero.webp"],
    testimonial: "We had many choices when we looked for affordable flats with the required amenities. But we stumbled at Elixir Homes because of its ideal layout and utilities. The wiring duct, and drainage system were all just perfect. Moreover, the dealings were super perfect. I didn’t have to worry about a thing because Elixir Homes is an Ethical Builder. ",
    profile: {
      name: "Joby Payyappilly",
      role: "Josons Hardwares, Chalakudy",
      image: "/completed-projects/testimonial.webp",
    },
     route: "/orchid"
  },
  {
    id: 3,
    title: "Elixir Manavath Heights",
    location: "Vadakkenchery, Alathur, Palakkad ",
    status: "Delivered Successfully",
    type: "24 Acre ",
    description:
      "Elixir Manavath Heights was a land-development project located at Vadakkenchery, near Alathur in Palakad district. This was a 4 Acre project, wherein Elixir Homes developed the entire land. The development activities started in early 2020 & the entire land was fully sold out in 2021. ",
   images: ["/projects/Elixir-Manavath-Heights1.webp"],
    testimonial:
      "Our experience with Elixir Homes was truly smooth and reassuring. Their excellent communication, detailed designs, and caring customer service made the entire process completely stress-free ",
    profile: {
      name: "Atfel Dcunha & family",
      role: "Abhu Dhabi, UAE",
      image: "/completed-projects/testimonial.webp",
    },
     route: "/elixir-manavath-heights"
  },
  {
    id: 4,
    title: "Elixir Super Luxury Villas",
    location: "Moscow Road, Anchery ",
    status: "Delivered Successfully",
    type: "216 villas ",
    description:
      "Elixir Super Luxury Villas is an exclusive, fully customisable luxury villa community located at Anchery, Thrissur. Spread across 1.60 acres with 16 premium villas, the project offers a perfect blend of privacy, sustainability, and sophisticated living.",
    images: ["/completed-projects/Elixir-Super-Luxury-Villas1.webp", "/completed-projects/Elixir-Super-Luxury-Villas1.webp", "/completed-projects/Elixir-Super-Luxury-Villas1.webp", "/completed-projects/Elixir-Super-Luxury-Villas1.webp"],
    testimonial: " We had a great experience with the Elixir team- very prompt, professional, and committed to excellent quality. Their flats and villas are spacious, with well-designed common areas and great amenities. Highly recommended for anyone looking for a perfect home! ",
    profile: {
      name: "Mathew francis ",
      role: "",
      image: "/completed-projects/testimonial.webp",
    },
     route: "/elixir-super-luxury-villas"
    
  },
 
  
];
