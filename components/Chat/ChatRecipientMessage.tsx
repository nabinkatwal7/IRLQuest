import { Avatar } from "@mantine/core";
import Image from "next/image";
import { motion } from "framer-motion";

const ChatRecipientMessage = ({
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
      className="flex items-start gap-3 justify-end"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative bg-primary text-primary-foreground rounded-lg p-3 max-w-[70%] shadow">
        <div className="absolute inset-0 rounded-lg border-2 border-primary-foreground opacity-10"></div>
        <p>{message}</p>
        <p className="text-xs text-primary-foreground/80 mt-1">{time}</p>
      </div>
      <Avatar src={image} radius="xl" size="md" />
    </motion.div>
  );
};

export default ChatRecipientMessage;
