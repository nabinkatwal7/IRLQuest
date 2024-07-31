"use client";
import TabNavigation from "../common/TabNavigation";
import ForumCard from "./ForumCard";
import { useState } from "react";

const ForumWrapper = () => {
  const tabs = ["All", "Art", "Lifestyle", "Travel"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="forum-wrapper flex flex-col gap-8">
      <p className="text-5xl font-bold font-primary text-center">
        What others are saying
      </p>
      <div className="flex flex-row items-center justify-center">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {/* !TODO: make it reusable in api integration */}
        {activeTab === 0 && (
          <>
            {[...Array(8)].map((_, i) => (
              <ForumCard
                key={i}
                image="https://media.istockphoto.com/id/942114184/photo/mount-everest-with-group-of-climbers.jpg?s=2048x2048&w=is&k=20&c=X2OPJSceKSFkKTVXuEwr8pcR_a6Q5QJ4WToYs7U9SB4="
              />
            ))}
          </>
        )}
        {activeTab === 1 && (
          <>
            {[...Array(12)].map((_, i) => (
              <ForumCard
                key={i}
                image="https://media.istockphoto.com/id/1453838542/photo/last-light-on-mount-sneffels.jpg?s=2048x2048&w=is&k=20&c=UINUY9pVBNtNF0bAH8zNO-AnIXAe1RBEdCQoPWQrz_A="
              />
            ))}
          </>
        )}
        {activeTab === 2 && (
          <>
            {[...Array(4)].map((_, i) => (
              <ForumCard
                key={i}
                image="https://media.istockphoto.com/id/157481250/photo/colorado-snow-capped-peak.jpg?s=2048x2048&w=is&k=20&c=UR6DFrIBMxwTfEyEfoDUDEA0I9HojfAAbv0cXb9vKkM="
              />
            ))}
          </>
        )}
        {activeTab === 3 && (
          <>
            {[...Array(12)].map((_, i) => (
              <ForumCard
                key={i}
                image="https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=2048x2048&w=is&k=20&c=Wethccdnu8YIeap5arzfYqLcEdaehFSJiSFZS3Un9gk="
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ForumWrapper;
