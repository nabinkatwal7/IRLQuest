import React from "react";

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const NoteCard = () => {
  const title = "A Guide To Rocky Mountain Vacations";
  const description = `Explore the breathtaking beauty of the Rocky Mountains with our comprehensive guide to unforgettable vacations. Discover the best times to visit, top attractions, outdoor activities, and essential tips for planning your trip. Whether you are seeking adventure or relaxation, our guide will help you create lasting memories in this stunning natural and heavenly paradise.`;

  return (
    <div className="forum-card flex flex-col gap-2 p-2 border-2 rounded-lg hover:shadow-xl hover:border-black cursor-pointer transition-all duration-700">
      <p className="text-xl font-primary">{truncateText(title, 50)}</p>
      <p className="text-sm">{truncateText(description, 500)}</p>
      <div className="flex justify-between text-xs text-gray-600">
        <p>Monkey D. Luffy</p>
        <p>24 July 2024</p>
      </div>
    </div>
  );
};

export default NoteCard;
