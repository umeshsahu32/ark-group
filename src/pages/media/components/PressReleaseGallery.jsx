import React, { useState } from "react";
import OptimizedImage from "@components/ui/OptimizedImage";
import ImageGalleryModal from "./ImageGalleryModal";
import { FaNewspaper } from "react-icons/fa";

// Import press release images
import press1 from "@assets/media/press-release/press-1.jpg";
import press2 from "@assets/media/press-release/press-2.jpg";
import press3 from "@assets/media/press-release/press-3.jpg";
import press4 from "@assets/media/press-release/press-4.jpg";
import press5 from "@assets/media/press-release/press-5.jpg";
import press6 from "@assets/media/press-release/press-6.jpg";
import press7 from "@assets/media/press-release/press-7.jpg";
import press8 from "@assets/media/press-release/press-8.jpg";
import press9 from "@assets/media/press-release/press-9.jpeg";
import press10 from "@assets/media/press-release/press-10.jpg";
import press11 from "@assets/media/press-release/press-11.jpg";
import press12 from "@assets/media/press-release/press-12.jpg";
import press13 from "@assets/media/press-release/press-13.jpg";
import press14 from "@assets/media/press-release/press-14.jpg";
import press15 from "@assets/media/press-release/press-15.jpg";
import press16 from "@assets/media/press-release/press-16.jpg";
import press17 from "@assets/media/press-release/press-17.jpg";
import press18 from "@assets/media/press-release/press-18.jpg";
import press19 from "@assets/media/press-release/press-19.jpg";
import press20 from "@assets/media/press-release/press-20.jpg";
import press21 from "@assets/media/press-release/press-21.jpg";
import press22 from "@assets/media/press-release/press-22.jpg";
import press23 from "@assets/media/press-release/press-23.jpg";
import press24 from "@assets/media/press-release/press-24.jpg";

const pressImages = [
  press1, press2, press3, press4, press5, press6,
  press7, press8, press9, press10, press11, press12,
  press13, press14, press15, press16, press17, press18,
  press19, press20, press21, press22, press23, press24
];

const PressReleaseGallery = () => {
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
          <FaNewspaper className="text-white text-4xl" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Press Releases</h3>
        <p className="text-gray-600 text-lg">Latest news and announcements from Ark Group</p>
      </div>

      {/* Press Release Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pressImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <OptimizedImage
              src={image}
              alt={`Press Release ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Press Icon Overlay */}
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaNewspaper className="text-white text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        images={pressImages}
        selectedIndex={selectedIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Press Releases"
      />
    </div>
  );
};

export default PressReleaseGallery;
