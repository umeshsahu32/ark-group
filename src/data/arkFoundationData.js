import { FaGraduationCap, FaHospital, FaHandsHelping } from "react-icons/fa";

// Import foundation images
import foundation1 from "@assets/foundation/foundation-1.jpg";
import foundation2 from "@assets/foundation/foundation-2.jpg";
import foundation3 from "@assets/foundation/foundation-3.jpg";

export const foundationImages = [
  {
    id: 1,
    image: foundation1,
    alt: "Community Development Initiative",
  },
  {
    id: 2,
    image: foundation2,
    alt: "Educational Support Program",
  },
  {
    id: 3,
    image: foundation3,
    alt: "Healthcare Access Project",
  },
];

export const foundationStats = [
  {
    number: "500+",
    label: "Lives Impacted",
    position: "bottom-4 left-4"
  },
  {
    number: "25+",
    label: "Projects",
    position: "top-4 right-1"
  }
];

export const foundationInitiatives = [
  {
    icon: FaGraduationCap,
    title: "Education",
    description: "Scholarship programs and school infrastructure development",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: FaHospital,
    title: "Healthcare",
    description: "Medical camps and healthcare facility improvements",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: FaHandsHelping,
    title: "Community",
    description: "Social welfare and community development initiatives",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
];

export const foundationContent = {
  description: [
    "Through the Ark Foundation, we are committed to creating lasting positive change in communities across the region. Our initiatives focus on three core pillars that drive sustainable development and social progress.",
    "We believe that every individual deserves access to quality education, healthcare, and opportunities for growth. Our foundation works tirelessly to bridge gaps, empower communities, and create a brighter future for all."
  ]
};
