import Dock from "@/components/common/Dock";
import DashboardWrapper from "@/components/Dashboard/DashboardWrapper";

const Dashboard = () => {
  return (
    <div className="dashboard-container-main relative w-screen h-screen">
      <DashboardWrapper />
      <Dock />
    </div>
  );
};

export default Dashboard;
