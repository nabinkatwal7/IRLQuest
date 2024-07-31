"use client";
import { Tooltip } from "@mantine/core";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
import { IoExitOutline } from "react-icons/io5";

const DockData = [
  {
    id: 1,
    name: "Dashboard",
    link: "/user/dashboard",
    icon: <CiHome />,
  },
  {
    id: 2,
    name: "Challenges",
    link: "/user/challenges",
    icon: <CiDumbbell />,
  },
  {
    id: 3,
    name: "Research",
    link: "/user/research",
    icon: <GiMaterialsScience />,
  },
  {
    id: 4,
    name: "Streaks",
    link: "/user/streaks",
    icon: <CiFlag1 />,
  },
  {
    id: 5,
    name: "Rewards",
    link: "/user/rewards",
    icon: <CiDollar />,
  },
  {
    id: 6,
    name: "Calendar",
    link: "/user/calendar",
    icon: <CiCalendar />,
  },
  {
    id: 7,
    name: "Notes",
    link: "/user/notes",
    icon: <CiStickyNote />,
  },
  {
    id: 8,
    name: "Forum",
    link: "/user/forum",
    icon: <CiGrid42 />,
  },
  {
    id: 9,
    name: "Chat",
    link: "/user/chat",
    icon: <CiChat1 />,
  },
  {
    id: 10,
    name: "Profile",
    link: "/user/profile",
    icon: <CiUser />,
  },
];

const Dock = () => {
  const location = usePathname();

  const router = useRouter();

  let token: any = null;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("user");
  }

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
    router.push("/login");
  };
  return (
    <div className="fixed bottom-2 w-full  flex justify-center items-center max-sm:px-4">
      <div className="dock-container no-scrollbar overflow-x-scroll bg-white flex flex-row gap-2 border-2 shadow-2xl rounded-lg p-1">
        {DockData.map((item) => (
          <Tooltip
            arrowPosition="side"
            arrowOffset={30}
            arrowSize={4}
            withArrow
            position="top-start"
            offset={2}
            label={item.name}
            key={item.id}
          >
            <Link
              href={item.link}
              className={classNames(
                "dock-item text-3xl p-2 transition-all duration-500 hover:scale-150",
                location === `${item.link}` && "bg-black text-white rounded-lg"
              )}
            >
              {item.icon}
            </Link>
          </Tooltip>
        ))}
        <Tooltip
          arrowPosition="side"
          arrowOffset={20}
          arrowSize={4}
          withArrow
          position="top"
          offset={10}
          label={"Log Out"}
        >
          <button
            type="button"
            onClick={handleLogout}
            className="flex flex-row items-center gap-2 justify-end text-3xl border-l-2 pl-2"
          >
            <IoExitOutline />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Dock;
