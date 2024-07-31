"use client";
import TabNavigation from "../common/TabNavigation";
import NoteCard from "./NoteCard";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const NotesWrapper = () => {
  const tabs = ["All", "Work", "Lifestyle", "Travel"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="note-wrapper flex flex-col gap-8">
      <p className="text-5xl font-bold font-primary text-center">
        Conversation with yourself
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
              <NoteCard key={i} />
            ))}
          </>
        )}
        {activeTab === 1 && (
          <>
            {[...Array(12)].map((_, i) => (
              <NoteCard key={i} />
            ))}
          </>
        )}
        {activeTab === 2 && (
          <>
            {[...Array(4)].map((_, i) => (
              <NoteCard key={i} />
            ))}
          </>
        )}
        {activeTab === 3 && (
          <>
            {[...Array(22)].map((_, i) => (
              <NoteCard key={i} />
            ))}
          </>
        )}
      </div>
      <div className="fixed bottom-20 right-20  text-white p-3 rounded-full shadow-xl bg-black cursor-pointer">
        <FaPlus size={25} />
      </div>
    </div>
  );
};

export default NotesWrapper;
