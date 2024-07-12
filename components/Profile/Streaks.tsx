import { FaFireAlt } from "react-icons/fa";

const Streaks = () => {
  return (
    <div className="streaks p-4 rounded-lg border-2 shadow lg flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center">
        <p className="text-xl font-bold">Streak</p>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-xl text-red-700 font-bold animate-pulse">
            <FaFireAlt />
          </p>
          <p className="text-xl font-bold">4 Days</p>
        </div>
      </div>
      <div className="flex flex-col gap-2"></div>
    </div>
  );
};

export default Streaks;
