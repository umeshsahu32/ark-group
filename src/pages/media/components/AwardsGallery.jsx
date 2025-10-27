import React, { useState } from "react";
import OptimizedImage from "@components/ui/OptimizedImage";
import ImageGalleryModal from "./ImageGalleryModal";
import { FaTrophy, FaAward } from "react-icons/fa";

// Import award images
import award1 from "@assets/media/awards/award-1.jpg";
import award2 from "@assets/media/awards/award-2.jpg";
import award3 from "@assets/media/awards/award-3.jpg";
import award4 from "@assets/media/awards/award-4.jpg";
import award5 from "@assets/media/awards/award-5.jpg";
import award6 from "@assets/media/awards/award-6.jpg";
import award7 from "@assets/media/awards/award-7.jpg";
import award8 from "@assets/media/awards/award-8.jpg";
import award9 from "@assets/media/awards/award-9.jpg";
import award10 from "@assets/media/awards/award-10.jpg";
import award11 from "@assets/media/awards/award-11.jpg";
import award12 from "@assets/media/awards/award-12.jpg";
import award13 from "@assets/media/awards/award-13.jpg";
import award14 from "@assets/media/awards/award-14.jpg";
import award15 from "@assets/media/awards/award-15.jpg";
import award16 from "@assets/media/awards/award-16.jpg";

const awardImages = [
  award1, award2, award3, award4, award5, award6,
  award7, award8, award9, award10, award11, award12,
  award13, award14, award15, award16
];

const AwardsGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-primary to-secondary rounded-full mb-6 shadow-lg">
          <FaTrophy className="text-white text-4xl" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Awards & Accolades</h3>
        <p className="text-gray-600 text-lg">Recognizing excellence in infrastructure and construction</p>
      </div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {awardImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <OptimizedImage
              src={image}
              alt={`Award ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Award Icon Overlay */}
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaAward className="text-white text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        images={awardImages}
        selectedIndex={selectedIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Awards & Accolades"
      />
    </div>
  );
};

export default AwardsGallery;
