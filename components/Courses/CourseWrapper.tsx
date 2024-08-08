"use client";
import { useState } from "react";
import TabNavigation from "../common/TabNavigation";
import BrowseCourse from "./BrowseCourse";
import MyCourses from "./MyCourses";

const CourseWrapper = () => {
  const tabs = ["Browse", "My Courses"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="course-wrapper flex flex-col gap-8">
      <p className="text-5xl font-bold text-center capitalize">
        Learn and Grow with us
      </p>
      <div className="flex flex-row items-center justify-center">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="flex flex-col gap-4">
        {activeTab === 0 && <BrowseCourse />}
        {activeTab === 1 && <MyCourses />}
      </div>
    </div>
  );
};

export default CourseWrapper;
