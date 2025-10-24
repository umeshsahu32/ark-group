import { FaAppleAlt, FaCarrot, FaSeedling, FaLeaf } from "react-icons/fa";

// Import product images
import fruitsImage from "@assets/ark-agro/ark-agro-1.jpg";
import vegetablesImage from "@assets/ark-agro/ark-agro-2.jpg";
import cropsImage from "@assets/ark-agro/ark-agro-3.jpg";
import gheeImage from "@assets/ark-agro/ark-agro-4.jpg";

export const arkAgroProducts = [
  {
    id: 1,
    name: "ArkD3 Pure Gir Cow Ghee",
    description: "Premium quality ghee made from pure Gir cow milk, rich in nutrients and traditional goodness",
    image: gheeImage,
    icon: FaSeedling,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    featured: true,
    benefits: ["Pure Gir Cow Milk", "Traditional Process", "Rich in Nutrients", "Premium Quality"]
  },
  {
    id: 2,
    name: "Fresh Fruits",
    description: "Seasonal fruits grown with natural farming methods, packed with vitamins and minerals",
    image: fruitsImage,
    icon: FaAppleAlt,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    featured: false,
    benefits: ["Natural Farming", "Seasonal Variety", "Rich in Vitamins", "Fresh Daily"]
  },
  {
    id: 3,
    name: "Organic Vegetables",
    description: "Fresh vegetables grown without harmful chemicals, ensuring maximum nutrition and taste",
    image: vegetablesImage,
    icon: FaCarrot,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    featured: false,
    benefits: ["Chemical Free", "Maximum Nutrition", "Fresh Harvest", "Natural Taste"]
  },
  {
    id: 4,
    name: "Seasonal Crops",
    description: "Traditional seasonal crops grown using sustainable farming practices for optimal yield",
    image: cropsImage,
    icon: FaLeaf,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    featured: false,
    benefits: ["Sustainable Farming", "Seasonal Variety", "Optimal Yield", "Traditional Methods"]
  }
];

export const arkAgroMission = {
  title: "Ark Agro's Mission",
  description: "To produce high-quality and nutritious produce while also preserving the soil for future generations. Our fresh & healthy produce includes fruits, vegetables and seasonal crops.",
  featuredProduct: "ArkD3 Pure Gir Cow Ghee"
};
