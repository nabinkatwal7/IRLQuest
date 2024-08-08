import { Avatar } from "@mantine/core";
import Image from "next/image";
import { motion } from "framer-motion";

const ChatSenderMessage = ({
  image,
  message,
  time,
}: {
  image: string;
  message: string;
  time: string;
}) => {
  return (
    <motion.div
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Avatar src={image} radius="xl" size="md" />
      <div className="relative bg-[#888] text-white text-muted-foreground rounded-lg p-3 max-w-[70%] shadow border border-muted-foreground/20">
        <div className="absolute inset-0 rounded-lg border-2 border-muted-foreground opacity-10"></div>
        <p>{message}</p>
        <p className="text-xs text-muted-foreground/80 mt-1">{time}</p>
      </div>
    </motion.div>
  );
};

export default ChatSenderMessage;
