import React from "react";

type SideNavData = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

const SideNav = ({
  sideNavData,
  active,
  setActive,
}: {
  sideNavData: SideNavData[];
  active: number;
  setActive: (number: number) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 min-w-[200px]">
      {sideNavData?.map((data, i) => (
        <div
          key={i}
          onClick={() => setActive(i)}
          className={`flex items-center gap-3 p-2 cursor-pointer ${
            active === i ? "text-white bg-black rounded-lg shadow-lg" : ""
          }`}
        >
          {data.icon}
          <p>{data.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
