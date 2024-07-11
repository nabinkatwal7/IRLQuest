import Dock from "@/components/common/Dock";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-container-main relative w-screen h-screen">
      {children}
      <Dock />
    </div>
  );
};

export default Layout;
