import Dock from "@/components/common/Dock";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-container-main relative w-screen min-h-screen">
      <div className="children-wrapper p-4 lg:p-8">{children}</div>
      <Dock />
    </div>
  );
};

export default Layout;
