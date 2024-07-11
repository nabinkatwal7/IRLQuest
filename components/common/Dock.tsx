"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CiCalendar,
  CiChat1,
  CiDollar,
  CiDumbbell,
  CiFlag1,
  CiGrid42,
  CiHome,
  CiStickyNote,
  CiUser,
} from "react-icons/ci";
import { GiMaterialsScience } from "react-icons/gi";

const DockData = [
  {
    id: 1,
    link: "/user/dashboard",
    icon: <CiHome />,
  },
  {
    id: 2,
    link: "/user/challenges",
    icon: <CiDumbbell />,
  },
  {
    id: 3,
    link: "/user/research",
    icon: <GiMaterialsScience />,
  },
  {
    id: 4,
    link: "/user/streaks",
    icon: <CiFlag1 />,
  },
  {
    id: 5,
    link: "/user/rewards",
    icon: <CiDollar />,
  },
  {
    id: 6,
    link: "/user/calendar",
    icon: <CiCalendar />,
  },
  {
    id: 7,
    link: "/user/notes",
    icon: <CiStickyNote />,
  },
  {
    id: 8,
    link: "/user/forum",
    icon: <CiGrid42 />,
  },
  {
    id: 9,
    link: "/user/chat",
    icon: <CiChat1 />,
  },
  {
    id: 10,
    link: "/user/profile",
    icon: <CiUser />,
  },
];

const Dock = () => {
  const location = usePathname();

  return (
    <div className="absolute bottom-2 w-full  flex justify-center items-center ">
      <div className="dock-container flex flex-row gap-2 border-2 shadow-2xl rounded-lg p-1">
        {DockData.map((item) => (
          <Link
            href={item.link}
            className={classNames(
              "dock-item text-3xl p-2",
              location === `${item.link}` && "bg-black text-white rounded-lg"
            )}
            key={item.id}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dock;
