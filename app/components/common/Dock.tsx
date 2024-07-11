import { Link, useLocation } from "@remix-run/react";
import classNames from "classnames";
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
    link: "/dashboard",
    icon: <CiHome />,
  },
  {
    id: 2,
    link: "/challenges",
    icon: <CiDumbbell />,
  },
  {
    id: 3,
    link: "/research",
    icon: <GiMaterialsScience />,
  },
  {
    id: 4,
    link: "/streaks",
    icon: <CiFlag1 />,
  },
  {
    id: 5,
    link: "/rewards",
    icon: <CiDollar />,
  },
  {
    id: 6,
    link: "/calendar",
    icon: <CiCalendar />,
  },
  {
    id: 7,
    link: "/notes",
    icon: <CiStickyNote />,
  },
  {
    id: 8,
    link: "/forum",
    icon: <CiGrid42 />,
  },
  {
    id: 9,
    link: "/chat",
    icon: <CiChat1 />,
  },
  {
    id: 10,
    link: "/profile",
    icon: <CiUser />,
  },
];

const Dock = () => {
  const location = useLocation();
  return (
    <div className="absolute bottom-2 w-full  flex justify-center items-center ">
      <div className="dock-container flex flex-row gap-2 border-2 shadow-2xl rounded-lg p-1">
        {DockData.map((item) => (
          <Link
            to={item.link}
            className={classNames(
              "dock-item text-3xl p-2",
              location.pathname === item.link &&
                "bg-black text-white rounded-lg"
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
