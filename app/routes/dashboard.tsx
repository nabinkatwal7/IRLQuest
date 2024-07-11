import { MetaFunction } from "@remix-run/react";
import Dock from "~/components/common/Dock";
import DashboardWrapper from "~/components/dashboard/DashboardWrapper";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "Dashboard", content: "Explore your quests" },
  ];
};

const Dashboard = () => {
  return (
    <div className="dashboard-container-main relative w-screen h-screen">
      <DashboardWrapper />
      <Dock />
    </div>
  );
};

export default Dashboard;
