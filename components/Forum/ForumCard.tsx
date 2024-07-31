import Image from "next/image";
import React from "react";

const ForumCard = ({ image }: { image: string }) => {
  return (
    <div className="forum-card flex flex-col gap-2 p-2 border-2 rounded-lg hover:shadow-xl hover:border-black transition-all duration-700">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt="sheldon"
          width={500}
          height={500}
          className="object-cover w-full h-40 md:h-80 lg:h-40 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>

      <p className="text-xl font-primary">
        A Guide To Rocky Mountain Vacations
      </p>
      <p className="text-sm">
        Explore the breathtaking beauty of the Rocky Mountains with our
        comprehensive guide to unforgettable vacations. Discover the best times
        to visit, top attractions, outdoor activities, and essential tips for
        planning your trip. Whether you are seeking adventure or relaxation, our
        guide will help you create lasting memories in this stunning natural
        paradise.
      </p>
      <div className="flex justify-between text-xs text-gray-600">
        <p>Monkey D. Luffy</p>
        <p>24 July 2024</p>
      </div>
    </div>
  );
};

export default ForumCard;
