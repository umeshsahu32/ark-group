// Central export file for all data
export { arkAgroProducts, arkAgroMission } from './arkAgroData';
export { ongoingProjects } from './projectsData';
export { servicesData } from './servicesData';
export { clientsData } from './clientsData';
export { 
  foundationImages, 
  foundationStats, 
  foundationInitiatives, 
  foundationContent 
} from './arkFoundationData';
export { heroCarouselData } from './heroData';
export { aboutUsStats, aboutUsContent } from './aboutUsData';
export { arkVisionData } from './arkVisionData';
export { managementTeamData } from './managementTeamData';
export { arkAgroIntroData, arkAgroProduceData } from './arkAgroData';
export { arkGaushalaData } from './arkGaushalaData';
export { arkD3GheeData } from './arkD3GheeData';

// You can also create combined exports if needed
export const allData = {
  arkAgro: { products: arkAgroProducts, mission: arkAgroMission },
  projects: { ongoing: ongoingProjects },
  services: servicesData,
  clients: clientsData,
  foundation: { 
    images: foundationImages, 
    stats: foundationStats, 
    initiatives: foundationInitiatives, 
    content: foundationContent 
  },
  hero: heroCarouselData,
  aboutUs: { stats: aboutUsStats, content: aboutUsContent }
};
