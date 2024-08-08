import { Progress } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { CiMoneyBill } from "react-icons/ci";

const ChallengeCard = ({
  image,
  progressValue,
}: {
  image: string;
  progressValue: number;
}) => {
  return (
    <div className="forum-card flex  items-end  gap-2 p-2 border-2 rounded-lg hover:shadow-xl hover:border-black transition-all duration-700">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt="sheldon"
          width={500}
          height={500}
          className="object-cover w-full h-20 md:h-20 lg:h-20 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className="text-md md:text-lg lg:text-xk font-primary">
          Complete the jungle expedition
        </p>
        <Progress.Root
          size={30}
          transitionDuration={200}
          radius={"md"}
          styles={{
            root: { position: "relative" },
            label: {
              position: "absolute",
              left: "50%",
              translate: "-50% 0%",
              color: "#999",
            },
          }}
        >
          <Progress.Section value={progressValue} color="black">
            <Progress.Label>{progressValue}/100</Progress.Label>
          </Progress.Section>
          <Progress.Section
            value={100 - progressValue}
            color="white"
          ></Progress.Section>
        </Progress.Root>
      </div>
      <div className="flex  gap-4">
        <div className="flex flex-col justify-evenly   text-gray-600">
          <CiMoneyBill />
          <p>50</p>
        </div>
        <div>
          <button
            className={`text-sm md:text-md lg:text-lg text-white  bg-black py-2 px-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1  `}
          >
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
