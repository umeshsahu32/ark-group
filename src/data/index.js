// Central export file for all data

// First import everything
import { ongoingProjects } from './projectsData';
import { servicesData } from './servicesData';
import { clientsData } from './clientsData';
import { 
  foundationImages, 
  foundationStats, 
  foundationInitiatives, 
  foundationContent,
  beneficiariesData
} from './arkFoundationData';
import { heroCarouselData } from './heroData';
import { aboutUsStats, aboutUsContent } from './aboutUsData';
import { arkVisionData } from './arkVisionData';
import { managementTeamData } from './managementTeamData';
import { arkAgroIntroData, arkAgroProduceData, arkAgroProducts, arkAgroMission } from './arkAgroData';
import { arkGaushalaData } from './arkGaushalaData';
import { arkD3GheeData } from './arkD3GheeData';
import { jobListings, companyBenefits, recruitmentProcess } from './careersData';

// Then export everything
export { ongoingProjects } from './projectsData';
export { servicesData } from './servicesData';
export { clientsData } from './clientsData';
export { 
  foundationImages, 
  foundationStats, 
  foundationInitiatives, 
  foundationContent,
  beneficiariesData
} from './arkFoundationData';
export { heroCarouselData } from './heroData';
export { aboutUsStats, aboutUsContent } from './aboutUsData';
export { arkVisionData } from './arkVisionData';
export { managementTeamData } from './managementTeamData';
export { arkAgroIntroData, arkAgroProduceData, arkAgroProducts, arkAgroMission } from './arkAgroData';
export { arkGaushalaData } from './arkGaushalaData';
export { arkD3GheeData } from './arkD3GheeData';
export { jobListings, companyBenefits, recruitmentProcess } from './careersData';

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
