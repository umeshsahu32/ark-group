import { 
  FaAward, FaLeaf, FaHeart, FaStar, FaGlassWhiskey, FaShieldAlt,
  FaSeedling, FaRecycle, FaAppleAlt, FaCarrot, FaPaw, FaTint
} from 'react-icons/fa';

// Centralized icon mapping for efficient lookup
export const iconMap = {
  FaAward,
  FaLeaf,
  FaHeart,
  FaStar,
  FaGlassWhiskey,
  FaShieldAlt,
  FaSeedling,
  FaRecycle,
  FaAppleAlt,
  FaCarrot,
  FaPaw,
  FaTint
};

// Utility function to get icon component
export const getIconComponent = (iconName) => {
  return iconMap[iconName] || FaHeart; // Default fallback
};

// Utility function to render icon with conditional logic
export const renderIcon = (iconName, className = "text-white text-2xl") => {
  const IconComponent = getIconComponent(iconName);
  return <IconComponent className={className} />;
};
