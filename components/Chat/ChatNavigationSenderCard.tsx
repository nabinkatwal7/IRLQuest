import { Avatar } from "@mantine/core";
import Image from "next/image";

// Define the type for card data items\
// define the file in proper way by creating new file and all later
export type CardDataItem = {
  image: string;
  name: string;
  status: string;
};

const ChatNavigationSenderCard = ({
  cardData,
  activeCard,
  setActiveCard,
}: {
  cardData: CardDataItem[];
  activeCard: number;
  setActiveCard: (number: number) => void;
}) => {
  return (
    <>
      {cardData.map((data, i) => (
        <div
          key={i}
          onClick={() => setActiveCard(i)}
          className={`flex items-center gap-3 p-2 border-b cursor-pointer ${
            activeCard === i ? "text-white bg-[#888] rounded-lg shadow-lg" : ""
          }`}
        >
          <Avatar className="w-10 h-10">
            <Image
              src={data.image}
              alt={data.name}
              width={50}
              height={50}
              className={`object-cover w-full h-20 md:h-20 lg:h-20 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110  `}
            />
            {/* <AvatarFallback>JD</AvatarFallback> */}
          </Avatar>
          <div>
            <p className="font-medium">{data.name}</p>
            <p className="text-xs text-muted-foreground/80 capitalize">
              {data.status}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatNavigationSenderCard;
