import { Avatar } from "@mantine/core";
import Image from "next/image";
import ChatNavigationSenderCard, {
  CardDataItem,
} from "./ChatNavigationSenderCard";

export default function ChatNavigation({
  cardData,
  activeCard,
  setActiveCard,
}: {
  cardData: CardDataItem[];
  activeCard: number;
  setActiveCard: (number: number) => void;
}) {
  const onlineNumber = cardData.filter((data) => {
    const online = data.status === "online";
    return online;
  });
  return (
    <div className="bg-muted w-64 border-r">
      <div className="flex items-center gap-4 border-b p-4">
        <Avatar className="w-10 h-10">
          <Image
            src="https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=2048x2048&w=is&k=20&c=Wethccdnu8YIeap5arzfYqLcEdaehFSJiSFZS3Un9gk="
            alt="Contact's Profile"
            width={50}
            height={50}
            className="object-cover w-full h-20 md:h-20 lg:h-20 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          {/* <Avata>JD</AvatarFallback> */}
        </Avatar>
        <div>
          <p className="font-medium">Contacts</p>
          <p className="text-xs text-muted-foreground/80">
            {onlineNumber.length} online
          </p>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <ChatNavigationSenderCard
          cardData={cardData}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />

        {/* {[...Array(4)].map((_, i) => (
          <ChatNavigationSenderCard
            name="John Doe"
            status="offline"
            image="https://media.istockphoto.com/id/942114184/photo/mount-everest-with-group-of-climbers.jpg?s=2048x2048&w=is&k=20&c=X2OPJSceKSFkKTVXuEwr8pcR_a6Q5QJ4WToYs7U9SB4="
          />
        ))} */}
      </div>
    </div>
  );
}
