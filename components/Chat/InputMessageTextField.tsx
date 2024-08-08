"use client";

import { Button, TextInput } from "@mantine/core";
import { useState, ChangeEvent } from "react";
import { IoAdd, IoSend } from "react-icons/io5";

const InputMessageTextField: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  };

  const handleSend = () => {
    if (message.trim() !== "") {
      console.log("Sending message:", message);
      // Add your actual send logic here
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <div className="bg-muted p-4 border-t flex items-center gap-2">
      <Button variant="transparent" color="black" size="icon">
        <IoAdd size={32} />
      </Button>
      <TextInput
        placeholder="Type your message..."
        variant="filled"
        className="flex-1"
        value={message}
        onChange={handleChange}
        styles={{
          input: {
            border: "solid 1px transparent",
          },
        }}
      />
      <div className="flex flex-col gap-2">
        <Button variant="filled" bg="black" size="icon" onClick={handleSend}>
          <IoSend size={20} />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
};

export default InputMessageTextField;
