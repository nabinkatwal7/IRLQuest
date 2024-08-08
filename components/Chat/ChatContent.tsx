"use client";

import { Avatar } from "@mantine/core";
import Image from "next/image";
import { IoEllipsisVertical } from "react-icons/io5";
import ChatSearch from "./ChatSearch";
import ChatSenderMessage from "./ChatSenderMessage";
import ChatRecipientMessage from "./ChatRecipientMessage";
import InputMessageTextField from "./InputMessageTextField";
import { CardDataItem } from "./ChatNavigationSenderCard";

const ChatContent = ({
  cardData,
  activeCard,
}: {
  cardData: CardDataItem[];
  activeCard: number;
}) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="bg-[#555] text-white p-4 flex items-center gap-4 border-b">
        <Avatar className="w-10 h-10">
          <Image
            src={cardData[activeCard].image}
            alt={cardData[activeCard].name}
            width={50}
            height={50}
            className="object-cover w-full h-20 md:h-20 lg:h-20 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          {/* <AvatarFallback>JD</AvatarFallback> */}
        </Avatar>
        <div>
          <p className="font-medium">{cardData[activeCard].name}</p>
          <p className="text-xs text-primary-foreground/80 capitalize">
            {cardData[activeCard].status}
          </p>
        </div>
        <div className="ml-auto flex items-center gap-6">
          <ChatSearch />
          <IoEllipsisVertical size={24} />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid gap-4">
          <ChatSenderMessage
            image="https://media.istockphoto.com/id/942114184/photo/mount-everest-with-group-of-climbers.jpg?s=2048x2048&w=is&k=20&c=X2OPJSceKSFkKTVXuEwr8pcR_a6Q5QJ4WToYs7U9SB4="
            message={"Hey there! How's it going?"}
            time={"10:30 AM"}
          />
          <ChatRecipientMessage
            image="https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=2048x2048&w=is&k=20&c=Wethccdnu8YIeap5arzfYqLcEdaehFSJiSFZS3Un9gk="
            message={"I'm doing great, thanks for asking!"}
            time={"10:31 AM"}
          />
          <ChatSenderMessage
            image="https://media.istockphoto.com/id/942114184/photo/mount-everest-with-group-of-climbers.jpg?s=2048x2048&w=is&k=20&c=X2OPJSceKSFkKTVXuEwr8pcR_a6Q5QJ4WToYs7U9SB4="
            message={
              "That's great to hear! Did you have any plans for the weekend?"
            }
            time={"10:32 AM"}
          />

          <ChatRecipientMessage
            image="https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=2048x2048&w=is&k=20&c=Wethccdnu8YIeap5arzfYqLcEdaehFSJiSFZS3Un9gk="
            message={
              "I was thinking of going to the park for a picnic. Would you like to join?"
            }
            time={"10:33 AM"}
          />
        </div>
      </div>
      <InputMessageTextField />
    </div>
  );
};

export default ChatContent;
