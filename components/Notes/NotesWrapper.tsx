"use client";

import TabNavigation from "../common/TabNavigation";
import NoteCard from "./NoteCard";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "@mantine/core";

const NotesWrapper = () => {
  const tabs = ["All", "Work", "Lifestyle", "Travel"];
  const [activeTab, setActiveTab] = useState(0);

  const handleAddNote = () => {
    // Handle add note action
  };
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
      {/* Add Note Button */}
      <Tooltip label="Add Notes">
        <motion.button
          onClick={handleAddNote}
          className="fixed bottom-20 right-20  text-white p-3 rounded-full shadow-xl bg-black cursor-pointer "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPlus size={25} />
        </motion.button>
      </Tooltip>
    </div>
  );
};

export default NotesWrapper;
