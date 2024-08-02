"use client";
import TabNavigation from "../common/TabNavigation";
import ChallengeCard from "./ChallengeCard";
import { useState } from "react";

const ChallengesWrapper = () => {
  const tabs = ["Daily Challenges", "Missions"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="forum-wrapper flex flex-col gap-8">
      <p className="text-5xl font-bold font-primary text-center">
        Set yourself a challenge
      </p>
      <div className="flex flex-row items-center justify-center">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="flex flex-col gap-4">
        {activeTab === 0 && (
          <>
            {[...Array(8)].map((_, i) => (
              <ChallengeCard
                key={i}
                progressValue={40}
                image="https://media.istockphoto.com/id/942114184/photo/mount-everest-with-group-of-climbers.jpg?s=2048x2048&w=is&k=20&c=X2OPJSceKSFkKTVXuEwr8pcR_a6Q5QJ4WToYs7U9SB4="
              />
            ))}
          </>
        )}

        {activeTab === 1 && (
          <>
            {[...Array(12)].map((_, i) => (
              <ChallengeCard
                key={i}
                progressValue={50}
                image="https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=2048x2048&w=is&k=20&c=Wethccdnu8YIeap5arzfYqLcEdaehFSJiSFZS3Un9gk="
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ChallengesWrapper;
