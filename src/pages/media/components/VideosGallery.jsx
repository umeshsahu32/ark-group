import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import VideoPlayerModal from "./VideoPlayerModal";
import OptimizedImage from "@components/ui/OptimizedImage";

// Sample video data - replace with actual YouTube video IDs
const videos = [
  {
    id: 1,
    title: "Ark Group - Building Excellence",
    thumbnail: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    description: "Watch our journey of building excellence in infrastructure development"
  },
  {
    id: 2,
    title: "Sustainable Construction Practices",
    thumbnail: "https://images.unsplash.com/photo-1486406146922-c633d82cda47?w=800",
    videoId: "dQw4w9WgXcQ",
    description: "Learn about our sustainable and eco-friendly construction methods"
  },
  {
    id: 3,
    title: "Awards Ceremony 2024",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    videoId: "dQw4w9WgXcQ",
    description: "Celebrating our achievements and recognitions"
  },
];

const VideosGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-primary to-secondary rounded-full mb-6 shadow-lg">
          <FaPlay className="text-white text-4xl" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Videos</h3>
        <p className="text-gray-600 text-lg">Watch our latest videos and insights</p>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => handleVideoClick(video)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video">
              <OptimizedImage
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="text-white text-2xl ml-1" />
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {video.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      <VideoPlayerModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default VideosGallery;
