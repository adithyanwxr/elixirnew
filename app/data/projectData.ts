export interface ProjectGallery {
  id: number;
  label: string;
  title: string;
  description: string;
  categories: string[];
  images: { src: string; category: number }[];
  bgColor: string; // dynamic background for even/odd
  textColor: string; // dynamic text color
  route: string;
}

export const projectGalleries: ProjectGallery[] = [
  {
    id: 1,
    label: "PROJECT [1]",
    title: "Elixir Anfield",
    description:
      "Elixir Anfield’s location boasts one of the finest residential localities in Thrissur, known for peace and connectivity.",
    categories: [
      "Leisure & Recreation",
      "Technology & Smart Living",
      "Safety & Security",
      "Sustainability & Community",
    ],
    route: "/elixir-anfield",
    images: [
      { src: "/gallery/gallery1.webp", category: 0 },
      { src: "/gallery/gallery2.webp", category: 0 },
      { src: "/gallery/gallery3.webp", category: 0 },

      { src: "/gallery/gallery4.webp", category: 1 },
      { src: "/gallery/gallery5.webp", category: 1 },

      { src: "/gallery/gallery6.webp", category: 2 },
      { src: "/gallery/gallery7.webp", category: 2 },

      { src: "/gallery/gallery8.webp", category: 3 },
      { src: "/gallery/gallery9.webp", category: 3 },
    ],
    bgColor: "elixir-black-bg", // odd project → black
    textColor: "text-white", // odd project → white text
  },

  {
    id: 2,
    label: "PROJECT [2]",
    title: "The Orchid",
    description:
      "The Orchid is all about luxury and comfort. We had put all our focus to provide extreme comfort as well as luxury ",
    categories: [
      "Living & dining spaces",
      "Bedrooms, kitchens, balconies",
      "Facade & structure highlights",
      "Clubhouse & recreational zones",
      "Night-time architectural shots",
    ],
    route: "/orchid",
    images: [
      { src: "/gallery/g1.webp", category: 0 },
      { src: "/gallery/g2.webp", category: 0 },
      { src: "/gallery/g3.webp", category: 0 },

      // { src: "/home/projecthero.jpg", category: 1 },
      // { src: "/blog/b1.webp", category: 1 },
      // { src: "/home/projecthero.jpg", category: 1 },

      // { src: "/blog/b1.webp", category: 2 },
      // { src: "/home/projecthero.jpg", category: 2 },
      // { src: "/blog/b1.webp", category: 2 },

      // { src: "/home/projecthero.jpg", category: 3 },
      // { src: "/blog/b1.webp", category: 3 },
      // { src: "/home/projecthero.jpg", category: 3 },

      // { src: "/home/projecthero.jpg", category: 4 },
      // { src: "/home/projecthero.jpg", category: 4 },
      // { src: "/home/projecthero.jpg", category: 4 },
    ],
    bgColor: "bg-[#373833]", // even → beige background
    textColor: "text-white", // even → black text
  },

  {
    id: 3,
    label: "PROJECT [3]",
    title: "Elixir Akkara Gardens",
    description:
      " Fully customisable premium luxury villa / villa plot project located at Anchery, Kuttanellur, Thrissur.  ",
    categories: [
      "Landscape & community spaces",
      "World-Class Common Amenities",
      "Premium Infrastructure & Safety",
      "Eco-Friendly Living",
    ],
    route: "/elixir-akkara-garden",
    images: [
      { src: "/blog/g5.webp", category: 0 },
      { src: "/blog/g6.webp", category: 0 },

      { src: "/gallery/a9.webp", category: 1 },
      { src: "/gallery/a6.webp", category: 1 },
      { src: "/gallery/a4.webp", category: 1 },
      { src: "/gallery/a7.webp", category: 1 },

      { src: "/gallery/a5.webp", category: 2 },
      { src: "/gallery/a3.webp", category: 2 },

      { src: "/gallery/a1.webp", category: 3 },
      { src: "/gallery/a8.webp", category: 3 },
      { src: "/gallery/a2.webp", category: 3 },
    ],
    bgColor: "elixir-black-bg", // odd project → black
    textColor: "text-white", // odd project → white text
  },

  {
    id: 4,
    label: "PROJECT [4]",
    title: "Elixir Super Luxury Villas",
    description:
      "Elixir Super Luxury Villas is an exclusive, fully customisable luxury villa community located at Anchery, Thrissur.",
    categories: [
      "Sustainable & Self-Sufficient Living",
      "Premium Clubhouse & Lifestyle Amenities",
      "Advanced Infrastructure & Utilities",
      "Clubhouse & recreational zones",
      "Night-time architectural shots",
    ],
    route: "/elixir-super-luxury-villas",
    images: [
      { src: "/gallery/e9.webp", category: 0 },
      { src: "/gallery/e10.webp", category: 0 },

      { src: "/gallery/e11.webp", category: 1 },
      { src: "/gallery/e7.webp", category: 1 },
      { src: "/gallery/e8.webp", category: 1 },
      { src: "/gallery/e5.webp", category: 1 },
      { src: "/gallery/e1.webp", category: 1 },

      { src: "/gallery/e4.webp", category: 2 },
      { src: "/gallery/e3.webp", category: 2 },
      { src: "/gallery/e2.webp", category: 2 },
      { src: "/gallery/e6.webp", category: 1 },

      // { src: "/home/projecthero.jpg", category: 3 },
      // { src: "/blog/b1.webp", category: 3 },
      // { src: "/home/projecthero.jpg", category: 3 },
    ],
    bgColor: "bg-[#373833]", // even → beige background
    textColor: "text-white", // even → black text
  },
];
