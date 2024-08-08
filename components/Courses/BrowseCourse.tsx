import { useState } from "react";
import SideNav from "../common/SideNav";
import { IoIosTimer, IoIosTrendingUp } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { LuSigmaSquare } from "react-icons/lu";
import BrowseCategory from "./BrowseCategory";

const BrowseCourse = () => {
  const sideNavData = [
    {
      id: 1,
      name: "All",
      icon: <LuSigmaSquare />,
    },
    {
      id: 2,
      name: "Top Picks",
      icon: <CiStar />,
    },
    {
      id: 3,
      name: "Trending",
      icon: <IoIosTrendingUp />,
    },
    {
      id: 4,
      name: "Recent",
      icon: <IoIosTimer />,
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="browse-course-main flex flex-row gap-4 w-full">
      <SideNav
        sideNavData={sideNavData}
        active={active}
        setActive={setActive}
      />
      <div className="w-full border shadow-lg p-4 rounded-lg">
        {/* #!TODO ADJUST THIS CODEBLOCK WITH API */}
        {active === 0 && <BrowseCategory name="All" />}
        {active === 1 && <BrowseCategory name="Top Picks" />}
        {active === 2 && <BrowseCategory name="Trending" />}
        {active === 3 && <BrowseCategory name="Most Recent" />}
      </div>
    </div>
  );
};

export default BrowseCourse;
