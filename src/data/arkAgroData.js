import gheeImage from "@assets/ark-agro/ark-agro-4.jpg";
import fruitsImage from "@assets/ark-agro/ark-agro-1.jpg";
import vegetablesImage from "@assets/ark-agro/ark-agro-2.jpg";
import cropsImage from "@assets/ark-agro/ark-agro-3.jpg";

export const arkAgroIntroData = {
  missionStatement: "To produce high-quality and nutritious produce while also preserving the soil for future generations.",
  commitmentStatement: "At Ark Agro, we are committed to sustainability and environmental conservation, using innovative techniques to cultivate crops without using harmful chemicals or synthetic fertilizers.",
  keyFeatures: [
    {
      title: "Chemical-Free",
      icon: "FaLeaf",
      description: "No harmful chemicals or synthetic fertilizers"
    },
    {
      title: "Sustainable",
      icon: "FaRecycle", 
      description: "Environmental conservation and innovative techniques"
    }
  ]
};

export const arkAgroProduceData = {
  fruits: [
    'Sweet Oranges', 'Sapota', 'Mango', 'Guava', 'Coconut', 
    'Amla', 'Musk Melon', 'Watermelon', 'Lemon'
  ],
  vegetables: [
    'Tomatoes', 'Brinjal', 'Chilli', 'Cluster Beans', 'Ladies\' Finger', 
    'Beans', 'Potatoes', 'Bitter Gourd', 'Bottle Gourd', 'Ridge Gourd', 
    'Cucumber', 'Cabbage', 'Cauliflower', 'Carrots', 'Beetroot'
  ],
  greens: [
    'Spinach', 'Amaranthus', 'Hibiscus (Gongura)', 'Coriander'
  ],
  seasonalCrops: [
    'Paddy', 'Wheat', 'Maize', 'Jowar', 'Pearl Millet', 'Finger Millet', 
    'Foxtail Millet', 'Red Gram', 'Green Gram', 'Black Gram', 'Horse Gram', 
    'Bengal Gram', 'Safflower', 'Sunflower', 'Groundnut', 'Sesamum', 'Mustard'
  ],
  farmingPractices: [
    {
      id: 1,
      title: 'Soil Conditioning & Plant Nutrition',
      description: 'We use Jeevamrutham, Gana Jeevamrutham, Azotobacter, Rhizobium, PSB-Bacteria, and KMB-Potash Mobilising Bacteria to avoid the use of harmful urea and enhance soil health and plant nutrition.',
      icon: 'FaSeedling',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 2,
      title: 'Fungus Control',
      description: 'By employing Trichoderma and Pseudomonas, we effectively combat harmful fungi such as root rot, ensuring the well-being of our crops.',
      icon: 'FaLeaf',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      id: 3,
      title: 'Oriental Herbal Nutrition',
      description: 'Our plants receive the benefits of natural nutrients through Fish Amine Acids (FAA) and Fermented Fruit Juice (FFJ), boosting their growth and quality.',
      icon: 'FaHeart',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-300'
    }
  ]
};

// Backward compatibility exports for home page
export const arkAgroMission = arkAgroIntroData.missionStatement;

export const arkAgroProducts = [
  {
    id: 1,
    name: "ArkD3 Pure Gir Cow Ghee",
    description: "Our signature product made from pure Gir cow milk using traditional methods. Rich in nutrients and packed with the goodness of authentic Indian ghee.",
    image: gheeImage,
    benefits: ["365-Year Lineage", "Vitamin D3 Enriched", "Pure & Natural", "Glass Packaging"],
    icon: "FaStar",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600"
  },
  {
    id: 2,
    name: "Fresh Organic Fruits",
    description: "Naturally grown fruits including Sweet Oranges, Sapota, Mango, Guava, Coconut, Amla, Musk Melon, Watermelon, and Lemon.",
    image: fruitsImage,
    benefits: ["Chemical-Free", "Nutrient-Rich", "Fresh Daily", "Organic Certified"],
    icon: "FaAppleAlt",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600"
  },
  {
    id: 3,
    name: "Fresh Organic Vegetables",
    description: "A wide variety of fresh vegetables including Tomatoes, Brinjal, Chilli, Cluster Beans, Ladies' Finger, Beans, Potatoes, and more.",
    image: vegetablesImage,
    benefits: ["Pesticide-Free", "Farm Fresh", "Nutritious", "Sustainable"],
    icon: "FaCarrot",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-100",
    textColor: "text-green-600"
  },
  {
    id: 4,
    name: "Seasonal Crops",
    description: "Traditional seasonal crops grown using sustainable farming practices for optimal yield",
    image: cropsImage,
    icon: "FaLeaf",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    featured: false,
    benefits: ["Sustainable Farming", "Seasonal Variety", "Optimal Yield", "Traditional Methods"]
  }
];