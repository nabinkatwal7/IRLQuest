import Image from "next/image";
import React from "react";
import { CiSettings } from "react-icons/ci";
import { FaCamera, FaInfo } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GoCodeOfConduct } from "react-icons/go";
import { TfiSupport } from "react-icons/tfi";
import { IoExitOutline } from "react-icons/io5";
import Link from "next/link";

const ProfileSettings = [
  {
    name: "Profile Settings",
    path: "/user/profile/settings",
    icon: <CiSettings />,
  },
  {
    name: "Privacy Policy",
    path: "/user/profile/privacy",
    icon: <IoShieldCheckmarkOutline />,
  },
  {
    name: "Terms and Conditions",
    path: "/user/profile/terms",
    icon: <GoCodeOfConduct />,
  },
  {
    name: "Support",
    path: "/user/profile/help",
    icon: <TfiSupport />,
  },
  {
    name: "About Us",
    path: "/user/profile/about",
    icon: <FaInfo />,
  },
];

const ProfileCard = () => {
  return (
    <div className="profile-card grid grid-cols-1 lg:grid-cols-2 gap-2 shadow-lg p-4 border-2 rounded-lg">
      <div className=" flex flex-col gap-2 ">
        <div className="relative w-fit">
          <Image
            src="/img/sheldon.jpeg"
            alt="sheldon"
            width={100}
            height={100}
            className="rounded-xl object-cover w-40 h-40 border-2 border-black"
          />
          <button className="absolute right-1 bottom-1 text-white text-xl p-2 rounded-full border-2 bg-black">
            <FaCamera />
          </button>
        </div>
        <div className="flex flex-col">
          <p className="text-3xl font-secondary font-bold">Sheldon Cooper</p>
          <p>@sheldortheconquerer</p>
          <p>Quest Master(Level 30)</p>
          <p className="text-sm">
            One cries because one is sad. For example, I cry because others are
            stupid, and that makes me sad.
          </p>
        </div>
      </div>
      <div className="profile-section flex flex-col gap-2">
        {ProfileSettings.map((item) => (
          <Link
            href={item.path}
            className="flex flex-row gap-2 items-center"
            key={item.name}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
