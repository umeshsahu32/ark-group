import React from 'react';
import Button from '../../../components/ui/Button';
import SectionHeader from '../../../components/ui/SectionHeader';
import project1 from '../../../assets/projects/project-1.jpg';
import project2 from '../../../assets/projects/project-2.jpeg';
import project3 from '../../../assets/projects/project-3.jpg';
import project4 from '../../../assets/projects/project-4.jpg';
import project5 from '../../../assets/projects/project-5.jpeg';
import project6 from '../../../assets/projects/project-6.jpg';

const OngoingProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Smart City Infrastructure",
      image: project1,
      category: "Infrastructure",
      description: "Modern urban development with smart technology integration",
      link: "/smart-city-infrastructure"
    },
    {
      id: 2,
      name: "Green Residential Complex",
      image: project2, 
      category: "Residential",
      description: "Sustainable living spaces with eco-friendly amenities",
      link: "/green-residential-complex"
    },
    {
      id: 3,
      name: "Agricultural Innovation Hub",
      image: project3,
      category: "Agriculture",
      description: "Cutting-edge farming technology and research facilities",
      link: "/agricultural-innovation-hub"
    },
    {
      id: 4,
      name: "Community Foundation Center",
      image: project4,
      category: "Foundation",
      description: "Multi-purpose community development",
      link: "/community-foundation-center"
    },
    {
      id: 5,
      name: "Industrial Park Development",
      image: project5,
      category: "Industrial",
      description: "State-of-the-art industrial facilities and business zones",
      link: "/industrial-park-development"
    },
    {
      id: 6,
      name: "Educational Campus Project",
      image: project6,
      category: "Education",
      description: "Modern educational infrastructure and learning centers",
      link: "/educational-campus-project"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-600 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-600 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          subtitle="Our Work"
          title="Ongoing"
          titleAccent="Projects"
          description="Discover our current initiatives that are shaping the future of sustainable development and community growth across multiple sectors."
        />

         {/* Projects Grid - Dynamic Layout */}
         <div className="space-y-8 mb-12">
           {/* Row 1 - Large Featured Project */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-delay-2">
               {/* Large Project Image */}
               <div className="relative h-88 overflow-hidden">
                 <img 
                   src={projects[0].image} 
                   alt={projects[0].name}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                 
                 {/* Category Badge */}
                 <div className="absolute top-6 left-6">
                   <span className="bg-white bg-opacity-90 backdrop-blur-sm text-primary text-sm font-semibold px-4 py-2 rounded-full">
                     {projects[0].category}
                   </span>
                 </div>
                 
                 {/* Project Info Overlay */}
                 <div className="absolute bottom-6 left-6 right-6 text-white">
                   <h3 className="text-2xl text-primary font-bold mb-2  transition-colors duration-300">
                     {projects[0].name}
                   </h3>
                   <p className="text-white/60 text-sm leading-relaxed mb-4">
                     {projects[0].description}
                   </p>
                   <Button
                     to={projects[0].link}
                     variant="outline"
                     size="sm"
                   >
                     View Details
                   </Button>
                 </div>
               </div>
             </div>

             {/* Two Smaller Projects */}
             <div className="space-y-6">
               {projects.slice(1, 3).map((project, index) => (
                 <div 
                   key={project.id}
                   className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden animate-fade-in-delay-2"
                   style={{animationDelay: `${(index + 1) * 0.1}s`}}
                 >
                   <div className="flex h-40">
                     {/* Project Image */}
                     <div className="relative w-1/3 overflow-hidden">
                       <img 
                         src={project.image} 
                         alt={project.name}
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                       />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                     </div>
                     
                     {/* Project Content */}
                     <div className="w-2/3 p-6 flex flex-col justify-between">
                       <div>
                         <div className="absolute top-4 right-4">
                           <span className="bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full">
                             {project.category}
                           </span>
                         </div>
                         <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300 pr-16">
                           {project.name}
                         </h3>
                         <p className="text-gray-600 text-sm leading-relaxed mb-3">
                           {project.description}
                         </p>
                       </div>
                       <Button
                         to={project.link}
                         variant="outline"
                         size="sm"
                         className="w-1/3"
                       >
                         View Details
                       </Button>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Row 2 - Three Equal Projects */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {projects.slice(3, 6).map((project, index) => (
               <div 
                 key={project.id}
                 className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden animate-fade-in-delay-2"
                 style={{animationDelay: `${(index + 3) * 0.1}s`}}
               >
                 {/* Project Image */}
                 <div className="relative h-48 overflow-hidden">
                   <img 
                     src={project.image} 
                     alt={project.name}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
                   
                   {/* Category Badge */}
                   <div className="absolute top-4 left-4">
                     <span className="bg-secondary bg-opacity-90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                       {project.category}
                     </span>
                   </div>
                 </div>

                 {/* Project Content */}
                 <div className="p-6">
                   <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                     {project.name}
                   </h3>
                   <p className="text-secondary text-sm leading-relaxed mb-4">
                     {project.description}
                   </p>
                   <Button
                     to={project.link}
                     variant="outline"
                     size="sm"
                   >
                     View Details
                   </Button>
                 </div>
               </div>
             ))}
           </div>
         </div>

        {/* View All Projects Button */}
        {/* <div className="text-center animate-fade-in-delay-2">
          <Button
            to="/infra-projects"
            variant="primary"
            size="lg"
            className="shadow-xl hover:shadow-2xl"
          >
            View All Projects
          </Button>
        </div> */}

        {/* Stats Section */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "25+", label: "Active Projects", color: "text-blue-600" },
            { number: "₹500Cr+", label: "Total Investment", color: "text-green-600" },
            { number: "15+", label: "Cities Covered", color: "text-purple-600" },
            { number: "5000+", label: "Jobs Created", color: "text-orange-600" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in-delay-2"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default OngoingProjects;
