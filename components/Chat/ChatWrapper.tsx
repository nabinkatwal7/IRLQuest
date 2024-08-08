"use client";

import { useState } from "react";
import ChatContent from "./ChatContent";
import ChatNavigation from "./ChatNavigation";

const ChatWrapper = () => {
  const cardData = [
    {
      image:
        "https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=2048x2048&w=is&k=20&c=Wethccdnu8YIeap5arzfYqLcEdaehFSJiSFZS3Un9gk=",
      name: "Jane Doe",
      status: "online",
    },
    {
      image:
        "https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=2048x2048&w=is&k=20&c=Wethccdnu8YIeap5arzfYqLcEdaehFSJiSFZS3Un9gk=",
      name: "John Doe",
      status: "offline",
    },
  ];
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="flex h-[90vh]">
      <ChatNavigation
        cardData={cardData}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
      />
      <ChatContent cardData={cardData} activeCard={activeCard} />
    </div>
  );
};

export default ChatWrapper;
