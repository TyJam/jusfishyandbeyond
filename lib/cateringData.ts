export interface CateringItem {
  name: string;
  description?: string;
}

export interface CateringSection {
  id: string;
  title: string;
  size: "large" | "wide" | "tall" | "square";
  image?: string;
  items: CateringItem[];
}

export const cateringSections: CateringSection[] = [
  {
    id: "heritage-meats",
    title: "The Heritage Collection",
    size: "large", // This will take up more space in your Bento Grid
    image: "/images/catering/jus-fishy-caribbean-bbq-chicken-catering-brooklyn.webp",
    items: [
      { name: "Curry Goat", description: "Tender goat meat slow-cooked in authentic island spices." },
      { name: "Oxtail", description: "Our famous braised oxtail in a rich, savory gravy." },
      { name: "Curry Duck", description: "Traditional Caribbean-style duck seasoned to perfection." },
      { name: "Soya Chunks", description: "Savory plant-based protein in a rich island sauce." }
    ]
  },
  {
    id: "ocean-harvest",
    title: "Ocean Harvest",
    size: "wide",
    image: "/images/catering/shrimp_tray_1.jpg",
    items: [
      { name: "Steamed Salmon" },
      { name: "Grilled Tilapia" },
      { name: "Jumbo Shrimp" },
      { name: "King Fish" }
    ]
  },
  {
    id: "chicken-collection",
    title: "The Chicken Collection",
    size: "tall",
    image: "/images/catering/chicken.webp",
    items: [
      { name: "Jerk Chicken" },
      { name: "BBQ Chicken" },
      { name: "Curry Chicken" },
      { name: "Baked Chicken" }
    ]
  },
  {
    id: "staples-sides",
    title: "Signature Staples & Sides",
      size: "wide",
    image:"/images/catering/pasta.jpeg",
    items: [
      { name: "Trini Pasta" },
      { name: "Mac & Cheese" },
      { name: "Vegetable Lo Mein" },
      { name: "Rice and Peas" },
      { name: "Vegetable Rice" },
      { name: "Fry Rice" },
      { name: "Mixed Vegetables" },
      { name: "Fresh Salad" },
      { name: "Potato Salad" },
      { name: "Curry Potato" },
      { name: "Curry Channa" }
    ]
  }
];