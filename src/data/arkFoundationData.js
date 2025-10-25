import {
  FaGraduationCap,
  FaHospital,
  FaHandsHelping,
  FaTrophy,
  FaMedal,
  FaStar,
  FaAward,
  FaMountain,
} from "react-icons/fa";

// Import foundation images
import foundation1 from "@assets/foundation/foundation-1.jpg";
import foundation2 from "@assets/foundation/foundation-2.jpg";
import foundation3 from "@assets/foundation/foundation-3.jpg";

import beneficiaryImg1 from "@assets/foundation/foundation-1.jpg";
import beneficiaryImg2 from "@assets/foundation/foundation-2.jpg";
import beneficiaryImg3 from "@assets/foundation/foundation-3.jpg";
import beneficiaryImg4 from "@assets/foundation/foundation-5.jpg";
import beneficiaryImg5 from "@assets/foundation/foundation-6.jpg";

// Other Beneficiaries Images
import otherBeneficiaryImg1 from "@assets/foundation/others/img-1.jpg";
import otherBeneficiaryImg2 from "@assets/foundation/others/img-2.jpg";
import otherBeneficiaryImg3 from "@assets/foundation/others/img-3.jpg";
import otherBeneficiaryImg4 from "@assets/foundation/others/img-4.jpg";
import otherBeneficiaryImg5 from "@assets/foundation/others/img-5.jpg";
import otherBeneficiaryImg6 from "@assets/foundation/others/img-6.jpg";
import otherBeneficiaryImg7 from "@assets/foundation/others/img-7.jpg";
import otherBeneficiaryImg8 from "@assets/foundation/others/img-8.jpg";
import otherBeneficiaryImg9 from "@assets/foundation/others/img-9.jpg";
import otherBeneficiaryImg10 from "@assets/foundation/others/img-10.jpg";
import otherBeneficiaryImg11 from "@assets/foundation/others/img-11.jpg";
import otherBeneficiaryImg12 from "@assets/foundation/others/img-12.jpg";
import otherBeneficiaryImg13 from "@assets/foundation/others/img-13.jpg";
import otherBeneficiaryImg14 from "@assets/foundation/others/img-14.jpg";
import otherBeneficiaryImg15 from "@assets/foundation/others/img-15.jpg";
import otherBeneficiaryImg16 from "@assets/foundation/others/img-16.jpg";
import otherBeneficiaryImg17 from "@assets/foundation/others/img-17.jpg";
import otherBeneficiaryImg18 from "@assets/foundation/others/img-18.jpg";
import otherBeneficiaryImg19 from "@assets/foundation/others/img-19.jpg";
import otherBeneficiaryImg20 from "@assets/foundation/others/img-20.jpg";
import otherBeneficiaryImg21 from "@assets/foundation/others/img-21.jpg";
import otherBeneficiaryImg22 from "@assets/foundation/others/img-22.jpg";
import otherBeneficiaryImg23 from "@assets/foundation/others/img-23.jpg";
import otherBeneficiaryImg24 from "@assets/foundation/others/img-24.jpg";
import otherBeneficiaryImg25 from "@assets/foundation/others/img-25.jpg";
import otherBeneficiaryImg26 from "@assets/foundation/others/img-26.jpg";
import otherBeneficiaryImg27 from "@assets/foundation/others/img-27.jpg";
import otherBeneficiaryImg28 from "@assets/foundation/others/img-28.jpg";
import otherBeneficiaryImg29 from "@assets/foundation/others/img-29.jpg";
import otherBeneficiaryImg30 from "@assets/foundation/others/img-30.jpg";
import otherBeneficiaryImg31 from "@assets/foundation/others/img-31.jpg";
import otherBeneficiaryImg32 from "@assets/foundation/others/img-32.jpg";
import otherBeneficiaryImg33 from "@assets/foundation/others/img-33.jpg";
import otherBeneficiaryImg34 from "@assets/foundation/others/img-34.jpg";
import otherBeneficiaryImg35 from "@assets/foundation/others/img-35.jpg";
import otherBeneficiaryImg36 from "@assets/foundation/others/img-36.jpg";

// Import gallery images
import gallery1 from "@assets/foundation/gallery/gallery-1.png";
import gallery2 from "@assets/foundation/gallery/gallery-2.png";
import gallery3 from "@assets/foundation/gallery/gallery-3.png";
import gallery4 from "@assets/foundation/gallery/gallery-4.png";
import gallery5 from "@assets/foundation/gallery/gallery-5.png";
import gallery6 from "@assets/foundation/gallery/gallery-6.png";
import gallery7 from "@assets/foundation/gallery/gallery-7.png";
import gallery8 from "@assets/foundation/gallery/gallery-8.png";
import gallery9 from "@assets/foundation/gallery/gallery-9.png";
import gallery10 from "@assets/foundation/gallery/gallery-10.png";
import gallery11 from "@assets/foundation/gallery/gallery-11.png";
import gallery12 from "@assets/foundation/gallery/gallery-12.png";

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
    position: "bottom-4 left-4",
  },
  {
    number: "25+",
    label: "Projects",
    position: "top-4 right-1",
  },
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
    "We believe that every individual deserves access to quality education, healthcare, and opportunities for growth. Our foundation works tirelessly to bridge gaps, empower communities, and create a brighter future for all.",
  ],
};

export const beneficiariesData = [
  {
    id: 1,
    name: "Vennala Kalagotla",
    title: "Female Badminton Shuttler",
    description:
      "Vennela has been supported by Ark Foundation since 2021. She broke a 13-year medal drought for India in the women's singles at the Badminton Asia Junior Championships in 2025. Her dedication and excellence continue to set new benchmarks, motivating aspiring athletes across the nation. She is coached by Pullela Gopichand and is aiming to win a Olympic Gold medal for India.",
    image: beneficiaryImg1,
    achievement: "Badminton Asia Junior Championships Winner",
    icon: FaTrophy,
    year: "2021",
  },
  {
    id: 2,
    name: "Lokesh Kalagotla",
    title: "Male Badminton Shuttlers",
    description:
      "Lokesh has been an Ark Foundation Beneficiary since 2021. A promising talent in Indian badminton, Lokesh has made his presence felt in major national tournaments. From securing medals at the Khelo India Youth Games to finishing as Runner-up in the YonexSunrise All India Senior Ranking Tournament, his journey reflects discipline, talent, and determination. His coach is Pullela Gopichand and is aiming to win a Olympic Gold medal for India.",
    image: beneficiaryImg2,
    achievement: "Khelo India Youth Games",
    icon: FaMedal,
    year: "2021",
  },
  {
    id: 3,
    name: "Kavya Sree G",
    title: "Female Cricketer",
    description:
      "Kavya, a key player in India’s U-19 Women’s World Cup winning team, consistently delivered strong starts as an opener. Her confidence and skill played a vital role in India’s historic campaign, establishing her as a rising star in Indian cricket. She previously served as the Captain of the Telangana (HCA) U-15 Team and now leads as the Captain of the U-19 Team, continuing to inspire the next generation of women cricketers through her leadership and dedication.",
    image: beneficiaryImg3,
    achievement: "India’s U-19 Women’s World Cup Winner",
    icon: FaStar,
    year: "2025",
  },
  {
    id: 4,
    name: "Gongadi Trisha",
    title: "Female Cricketer",
    description:
      "Trisha has been with Ark Foundation since 2018. Hailing from Bhadrachalam, Telangana. She’s an exceptional opening batter who made history as part of India’s victorious U-19 Women’s World Cup squad. Trisha’s unwavering focus and composure under pressure, sets an inspiring example for the next generation of cricketers. She is also the first ever batter to score a hundred in the U19 Women’s T20 World Cup.",
    image: beneficiaryImg4,
    achievement: "India’s U-19 Women’s World Cup Winner",
    icon: FaAward,
    year: "2018",
  },
  {
    id: 5,
    name: "Padamati Anvitha",
    title: "Female Mountaineer",
    description:
      "Anvitha has been an Ark Foundation Beneficiary since 2024. A trailblazing Indian mountaineer who has conquered five of the Seven Summits, including Mount Everest and Mt. Aconcagua — the highest peak in South America. She became the first Indian to climb Mount Elbrus in winter and to plant a 10-meter national flag at its summit. From the true summit of Manaslu to leading expeditions across India, Anvitha is redefining boundaries for Indian women in high-altitude adventure. Honored with the Women Puraskar and the Best Achiever Award, she continues to inspire with every ascent.",
    image: beneficiaryImg5,
    achievement: "Conquered Mount Everest",
    icon: FaMountain,
    year: "2024",
  },
];

export const otherBeneficiariesData = [
  {
    id: 1,
    name: "MOHAMMAD HASSAN",
    current: "MPC",
    goal: "SCIENTIST",
    image: otherBeneficiaryImg1,
  },
  {
    id: 2,
    name: "M HASINI",
    current: "MPC",
    goal: "IAS",
    image: otherBeneficiaryImg2,
  },
  {
    id: 3,
    name: "M CHANDANA",
    current: "MPC",
    goal: "ENGINEER",
    image: otherBeneficiaryImg3,
  },
  {
    id: 4,
    name: "V MOUNIKA NAGA SRI",
    current: "POLYTECHNIC",
    goal: "ENGINEER",
    image: otherBeneficiaryImg4,
  },
  {
    id: 5,
    name: "MUDDADA DRAKSHYANI",
    current: "BIPC",
    goal: "ARTIST",
    image: otherBeneficiaryImg5,
  },
  {
    id: 6,
    name: "CHAKALI MAHESH",
    current: "MPC",
    goal: "BUSINESSMAN",
    image: otherBeneficiaryImg6,
  },
  {
    id: 7,
    name: "SHAIK HUZEFANAAZ",
    current: "MPC",
    goal: "SOFTWARE ENGINEER",
    image: otherBeneficiaryImg7,
  },
  {
    id: 8,
    name: "THANDRA KARTHIK",
    current: "MPC",
    goal: "SOFTWARE ENGINEER",
    image: otherBeneficiaryImg8,
  },
  {
    id: 9,
    name: "LOLAKAPURI DHANUSHKA",
    current: "MPC",
    goal: "ENGINEER",
    image: otherBeneficiaryImg9,
  },
  {
    id: 10,
    name: "MASANPALLY KEERTHANA",
    current: "BIPC",
    goal: "SOFTWARE ENGINEER",
    image: otherBeneficiaryImg10,
  },
  {
    id: 11,
    name: "M JAYANTHI",
    current: "BIPC",
    goal: "DOCTOR",
    image: otherBeneficiaryImg11,
  },
  {
    id: 12,
    name: "VEMULA SARASWATHI",
    current: "POLYTECHNIC",
    goal: "IAS",
    image: otherBeneficiaryImg12,
  },
  {
    id: 13,
    name: "BONDILI YASHASWINI",
    current: "BIPC",
    goal: "DOCTOR",
    image: otherBeneficiaryImg13,
  },
  {
    id: 14,
    name: "HAREY SAI KRUTHI",
    current: "DIPLOMA",
    goal: "TEACHER",
    image: otherBeneficiaryImg14,
  },
  {
    id: 15,
    name: "PARUPALLY MAITHRI",
    current: "MPC",
    goal: "TEACHER",
    image: otherBeneficiaryImg15,
  },
  {
    id: 16,
    name: "K JYOTHIKA DEVI",
    current: "MPC",
    goal: "SOFTWARE ENGINEER",
    image: otherBeneficiaryImg16,
  },
  {
    id: 17,
    name: "SANDHAGALLA SHIVA CHANDANA",
    current: "MPC",
    goal: "IPS",
    image: otherBeneficiaryImg17,
  },
  {
    id: 18,
    name: "D SHARMILA",
    current: "MPC",
    goal: "NAVY",
    image: otherBeneficiaryImg18,
  },
  {
    id: 19,
    name: "N JYOTHI SRI",
    current: "MPC",
    goal: "SOFTWARE ENGINEER",
    image: otherBeneficiaryImg19,
  },
  {
    id: 20,
    name: "K ROCKY SHARAN",
    current: "POLYTECHNIC",
    goal: "SOFTWARE ENGINEER",
    image: otherBeneficiaryImg20,
  },
  {
    id: 21,
    name: "B SUNNY BABU",
    current: "MPC",
    goal: "ENGINEER",
    image: otherBeneficiaryImg21,
  },
  {
    id: 22,
    name: "E BHAVANI",
    current: "CEC",
    goal: "IAS",
    image: otherBeneficiaryImg22,
  },
  {
    id: 23,
    name: "D NITHIN",
    current: "MPC",
    goal: "PILOT",
    image: otherBeneficiaryImg23,
  },
  {
    id: 24,
    name: "MUDHARALA NIRANJAN RAO",
    current: "MPC",
    goal: "MECHANICAL ENGINEER",
    image: otherBeneficiaryImg24,
  },
  {
    id: 25,
    name: "SANNUTHI DEEPIKA",
    current: "DIPLOMA",
    goal: "ELECTRICAL ENGINEER",
    image: otherBeneficiaryImg25,
  },
  {
    id: 26,
    name: "DUBBOLLA HEMALATHA",
    current: "MPC",
    goal: "ENGINEER",
    image: otherBeneficiaryImg26,
  },
  {
    id: 27,
    name: "KAVURU MUGDHA RAO",
    current: "BIPC",
    goal: "DOCTOR",
    image: otherBeneficiaryImg27,
  },
  {
    id: 28,
    name: "K KIRAN KUMAR",
    current: "MPC",
    goal: "SOFTWARE ENGINEER",
    image: otherBeneficiaryImg28,
  },
  {
    id: 29,
    name: "P ANANDITHA",
    current: "MPC",
    goal: "IAS",
    image: otherBeneficiaryImg29,
  },
  {
    id: 30,
    name: "MUDHARALA NIRANJAN RAO",
    current: "MPC",
    goal: "MECHANICAL ENGINEER",
    image: otherBeneficiaryImg30,
  },
  {
    id: 31,
    name: "DASARI SUCHITRA",
    current: "IIT",
    goal: "IAS",
    image: otherBeneficiaryImg31,
  },
  {
    id: 32,
    name: "AFFIFA",
    current: "MPC",
    goal: "SOFTWARE ENGINEER",
    image: otherBeneficiaryImg32,
  },
  {
    id: 33,
    name: "YEDAMA REVATHI",
    current: "MPC",
    goal: "ENGINEER",
    image: otherBeneficiaryImg33,
  },
  {
    id: 34,
    name: "SK. ZAREEN",
    current: "CEC",
    goal: "CA",
    image: otherBeneficiaryImg34,
  },
  {
    id: 35,
    name: "MAHERA",
    current: "MPC",
    goal: "BANK MANAGER",
    image: otherBeneficiaryImg35,
  },
  {
    id: 36,
    name: "J KARTHIKA LAXMI SNIGDHA",
    current: "MPC",
    goal: "SOFTWARE ENGINEER",
    image: otherBeneficiaryImg36,
  },
];

export const galleryImages = [
  { src: gallery1, size: "small" }, // 1x1
  { src: gallery2, size: "large" }, // 2x2
  { src: gallery3, size: "wide" }, // 2x1
  { src: gallery4, size: "small" }, // 1x1
  { src: gallery5, size: "small" }, // 1x1
  { src: gallery6, size: "extra-large" }, // 3x2
  { src: gallery7, size: "small" }, // 1x1
  { src: gallery8, size: "wide" }, // 2x1
  { src: gallery9, size: "small" }, // 1x1
  { src: gallery10, size: "wide" }, // 2x2
  { src: gallery11, size: "small" }, // 1x1
  { src: gallery12, size: "wide" }, // 2x1
];
