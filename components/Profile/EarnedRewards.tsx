import Link from "next/link";
import { CiCircleInfo } from "react-icons/ci";

const EarnedRewards = () => {
  // TODO: Add popover for info
  return (
    <div className="earned-rewards p-4 rounded-lg border-2 shadow lg flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <p className="text-xl font-bold">Earnings</p>
        <p className="text-xl font-bold">$500</p>
      </div>
      <div className="flex flex-col gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col px-2">
            <div className="flex flex-row justify-between items-center">
              <p>Goal completion</p>
              <p>+$100</p>
            </div>
            <p className="text-xs italic font-secondary">27 Jan 2024</p>
          </div>
        ))}
      </div>
      <Link href="/user/earnings">Show all earnings</Link>
      <button className="flex flex-row gap-1 justify-end text-xs items-center">
        <p>Learn more about earnings</p>
        <CiCircleInfo />
      </button>
    </div>
  );
};

export default EarnedRewards;
